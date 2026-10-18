from django import forms
from .models import ActividadDeportiva

class ActividadDeportivaForm(forms.ModelForm):
    class Meta:
        model = ActividadDeportiva
        fields = ('nombre', 'descripcion', 'lugar', 'cupo')
        widgets = {
            'nombre': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ingrese el nombre de la actividad'
            }),
            'descripcion': forms.Textarea(attrs={
                'class': 'form-control',
                'rows': 3,
                'placeholder': 'Describa la actividad deportiva...'
            }),
            'lugar': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ej: Polideportivo / Cancha 1'
            }),
            'cupo': forms.NumberInput(attrs={
                'class': 'form-control',
                'placeholder': 'Cantidad máxima de participantes',
                'min': 1
            }),
        }