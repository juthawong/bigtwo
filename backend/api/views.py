from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def index(request):
    """Testing if everything works"""
    return JsonResponse({"success": True}, status=203)
    
