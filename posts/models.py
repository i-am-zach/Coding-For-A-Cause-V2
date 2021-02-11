from django.db import models
from django.contrib.auth import get_user_model
from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel
from wagtail.search import index

User = get_user_model()

# Create your models here.
class PostsIndexPage(Page):
    
    def get_context(self, request):
        context = super().get_context(request)
        post_pages = self.get_children().live().order_by('-first_published_at')
        context['post_pages'] = post_pages
        return context

class PostPage(Page):
    date = models.DateField("Post date")
    body = RichTextField("Body")
    author = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL, related_name="posts")

    search_fields = Page.search_fields + [
        index.SearchField('body')
    ]

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('body'),
        FieldPanel('author')
    ]