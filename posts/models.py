from django.db import models
from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.search import index

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

    search_fields = Page.search_fields + [
        index.SearchField('body')
    ]

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('body')
    ]