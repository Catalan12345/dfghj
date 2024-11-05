document.getElementById('botonDescargar').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'descarga/app-debug.apk'; // Ruta al archivo APK
    link.download = 'dicelo.apk'; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
