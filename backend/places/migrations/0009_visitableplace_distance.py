# Generated by Django 4.1.1 on 2023-09-26 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0008_placephoto_visitableplace_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='visitableplace',
            name='distance',
            field=models.FloatField(blank=True, null=True),
        ),
    ]