from django.db import models
import datetime

# Create your models here.
class Patient(models.Model):
    currentDateAndTime = datetime.datetime.now()
    curr_time = str(currentDateAndTime.hour) + ":" + str(currentDateAndTime.minute)
    curr_date = str(currentDateAndTime.month) + "/" + str(currentDateAndTime.day) + "/" + str(currentDateAndTime.year)
    
    name = models.CharField(max_length=100, default="")
    patientid = models.CharField(max_length=10)
    date = models.CharField(default=curr_date, max_length=10)
    time = models.CharField(default=curr_time, max_length=5)
    doctor = models.CharField(max_length=100, default="")
    room = models.BigIntegerField(default="1")
    team = models.CharField(max_length=1, default="A")
    primary_diagnosis = models.CharField(max_length=100, default="")
    
    class Meta:
        ordering = ["patientid"]
    
    def __str__(self):
        return self.patientid