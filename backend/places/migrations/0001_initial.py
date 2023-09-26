# Generated by Django 4.1.1 on 2023-09-24 09:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='VisitablePlace',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('regione', models.CharField(max_length=255)),
                ('latin', models.CharField(max_length=255)),
                ('zotude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('category', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='PlacePosts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('photo', models.ImageField(blank=True, null=True, upload_to='places/posts/photos')),
                ('video', models.FileField(blank=True, null=True, upload_to='places/posts/videos')),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='places.visitableplace')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('commented_date', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]