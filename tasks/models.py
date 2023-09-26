from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    title = models.CharField(max_length=128, null=False, blank=False)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default='None')


    def __str__(self):
        return f"{self.title} Done => {self.done}"
