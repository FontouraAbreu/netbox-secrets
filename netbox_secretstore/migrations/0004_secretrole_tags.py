# Generated by Django 3.2.9 on 2021-12-21 15:27

from django.db import migrations
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('extras', '0066_customfield_name_validation'),
        ('netbox_secrets', '0003_modify_objectchange_records'),
    ]

    operations = [
        migrations.AddField(
            model_name='secretrole',
            name='tags',
            field=taggit.managers.TaggableManager(through='extras.TaggedItem', to='extras.Tag'),
        ),
    ]
