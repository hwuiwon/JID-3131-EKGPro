from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = (
            "name",
            "patientid",
            "date",
            "time",
            "doctor",
            "room",
            "team",
            "primary_diagnosis",
        )