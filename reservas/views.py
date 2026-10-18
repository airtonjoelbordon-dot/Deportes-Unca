from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.contrib import messages
from .models import ActividadDeportiva
from .forms import ActividadDeportivaForm

# Consigna 1: Vista para registrar una nueva actividad deportiva
def agregar_actividad(request):
    if request.method == 'POST':
        form = ActividadDeportivaForm(request.POST)
        if form.is_valid():
            nueva_actividad = form.save()
            messages.success(
                request,
                f'Se ha registrado correctamente la actividad "{nueva_actividad.nombre}".'
            )
            return redirect(reverse('reservas:agregar_actividad'))
    else:
        form = ActividadDeportivaForm()

    return render(request, 'reservas/agregar_actividad.html', {'form': form})

# Consigna 2: Vista para mostrar todas las actividades deportivas
def lista_actividades(request):
    actividades = ActividadDeportiva.objects.all()
    return render(request, 'reservas/lista_actividades.html', {'actividades': actividades})

# Consigna 3: Vista para mostrar los detalles de una actividad deportiva
def detalle_actividad(request, pk):
    actividad = get_object_or_404(ActividadDeportiva, pk=pk)
    return render(request, 'reservas/detalle_actividad.html', {'actividad': actividad})
