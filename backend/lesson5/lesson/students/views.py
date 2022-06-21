from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from students.models import Student
# Create your views here.
def my_view(request):
    if request.method == 'get':
        return HttpResponse('result')

class MyView(View):
    def get(self, request):
        students = Student.objects.all()
        return HttpResponse({
            'name':'beb',
            'surname':'aea'
        })
    def post(self, request):
        return HttpResponse('res post')