from django.db import models

from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel, PageChooserPanel


class HomePage(Page):
    cta_text = models.CharField(max_length=200, default="Contact Us")
    cta_link = models.ForeignKey(Page, related_name="+", on_delete=models.SET_NULL, null=True)

    content_panels = Page.content_panels + [
        FieldPanel('cta_text'),
        PageChooserPanel('cta_link'),
    ]
