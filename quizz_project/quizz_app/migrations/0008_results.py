# Generated by Django 3.0.6 on 2020-05-27 14:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('quizz_app', '0007_auto_20200527_1307'),
    ]

    operations = [
        migrations.CreateModel(
            name='results',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField(default=0)),
                ('player', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('quizz_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quizz_app.quizzes')),
            ],
        ),
    ]