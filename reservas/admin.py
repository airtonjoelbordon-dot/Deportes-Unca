from django.contrib import admin
from .models import ActividadDeportiva, Horario, Inscripcion

@admin.register(ActividadDeportiva)
class ActividadDeportivaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'lugar', 'cupo')
    search_fields = ('nombre', 'lugar')

admin.site.register(Horario)
admin.site.register(Inscripcion)
