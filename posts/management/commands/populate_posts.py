from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError
from wagtail.core.models import Page
from home.models import HomePage
from posts.models import PostsIndexPage, PostPage
from datetime import date

class Command(BaseCommand):
    help = 'Autopopulates the posts'

    def add_arguments(self, parser):
        parser.add_argument('--amount', dest='amount', help='How many posts should be created', type=int, default=3)

    def handle(self, *args, **options):
        amount = int(options.get('amount'))
        
        home = HomePage.objects.first()
        author = get_user_model().objects.filter(is_superuser=True).first()

        try:
            posts_index_page = PostsIndexPage.objects.first()
            assert posts_index_page
        except:
            posts_index_page = PostsIndexPage(
                title="Posts",
                slug="posts"
            )
            home.add_child(instance=posts_index_page)
            self.stdout.write(self.style.SUCCESS('Created Post Index Page as a child of the home page'))

        for i in range(amount):
            try:
                last_post_id = PostPage.objects.last().id
            except:
                last_post_id = 0
            post = PostPage(
                date=date.today(),
                body=f"This is post number {1 + last_post_id}",
                title=f"Post #{1 + last_post_id}",
                author=author
            )
            posts_index_page.add_child(instance=post)
            self.stdout.write(self.style.SUCCESS(f"Created new post {post.title}"))

        


