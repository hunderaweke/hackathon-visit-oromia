# Generated by Django 4.1.1 on 2023-09-25 11:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('places', '0005_sitereccomendation'),
    ]

    operations = [
        migrations.AddField(
            model_name='sitereccomendation',
            name='latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='sitereccomendation',
            name='longitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='sitereccomendation',
            name='region',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='sitereccomendation',
            name='text_description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='sitereccomendation',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='sitereccomendation',
            name='zone',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.CreateModel(
            name='RecommendationImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='suggestions/image')),
                ('recommendation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='places.sitereccomendation')),
            ],
        ),
    ]