from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=128, null=False, blank=False)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} Done => {self.done}"
