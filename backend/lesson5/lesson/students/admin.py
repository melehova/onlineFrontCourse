from django.contrib import admin

# Register your models here.
from students.models import Student
from students.models import StudentGroup



admin.site.register(Student)
admin.site.register(StudentGroup)
