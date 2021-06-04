# Generated by Django 3.0.3 on 2020-03-25 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('power', models.TextField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('price', models.IntegerField(blank=True, null=True)),
                ('quantity', models.IntegerField(blank=True, null=True)),
                ('brand', models.TextField(blank=True, null=True)),
                ('weight', models.FloatField(blank=True, null=True)),
                ('height', models.FloatField(blank=True, null=True)),
                ('width', models.FloatField(blank=True, null=True)),
                ('length', models.FloatField(blank=True, null=True)),
                ('model_code', models.TextField(blank=True, null=True)),
                ('colour', models.TextField(blank=True, null=True)),
                ('img_url', models.URLField(blank=True, null=True)),
            ],
        ),
    ]