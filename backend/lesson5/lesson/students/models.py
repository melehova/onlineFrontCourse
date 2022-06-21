from tabnanny import verbose
from tkinter.tix import Balloon
from xmlrpc.client import TRANSPORT_ERROR
from django.db import models

# Create your models here.
class StudentGroup(models.Model):
    name = models.CharField(verbose_name="Група", max_length=100)
    students_amount = models.DecimalField(max_digits=4, decimal_places=0, verbose_name="Кількість студентів", blank=True, null=True)
    # students_amount = models.IntegerField


    def __str__(self):
        return self.name


    class Meta:
        verbose_name = "Група студентів"
        verbose_name_plural = "Групи студентів"


class Student(models.Model):
    SURNAME_CHOISES = (
        ('mel', 'мел'),
        ('bolt', 'болт'),
    )

    name = models.CharField(verbose_name="Ім'я", max_length=100)
    surname = models.CharField(verbose_name='Прізвище', choices=SURNAME_CHOISES, max_length=100, blank=True, null=True)
    birthday = models.DateField(verbose_name="День народження", blank=True, null=True)
    group = models.ForeignKey(StudentGroup, verbose_name="Група", on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):

        # self.name += ' bebrus'
        super().save(*args, **kwargs)
            


    class Meta:
        verbose_name = "Студент"
        verbose_name_plural = "Студенти"
