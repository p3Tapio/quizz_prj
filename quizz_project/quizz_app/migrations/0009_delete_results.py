# Generated by Django 3.0.6 on 2020-05-27 15:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quizz_app', '0008_results'),
    ]

    operations = [
        migrations.DeleteModel(
            name='results',
        ),
    ]