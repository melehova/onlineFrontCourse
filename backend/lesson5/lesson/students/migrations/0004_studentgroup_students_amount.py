# Generated by Django 4.0.5 on 2022-06-17 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0003_student_birthday_student_group'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentgroup',
            name='students_amount',
            field=models.DecimalField(blank=True, decimal_places=0, max_digits=4, null=True, verbose_name='Кількість студентів'),
        ),
    ]