function mostrarToast(tipo, mensaje) {
    let backgroundColor;
    let className;

    switch (tipo) {
        case 'error':
            backgroundColor = "linear-gradient(to right, #ff5f6d, #ffc371)";
            className = "error";
            break;
        case 'info':
            backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)";
            className = "info";
            break;
        // Puedes añadir más casos para otros tipos de notificaciones
        default:
            backgroundColor = "linear-gradient(to right, #333, #999)";
            className = "default";
            break;
    }

    Toastify({
        text: mensaje,
        backgroundColor: backgroundColor,
        style: {
            background: "#17C964", // Un color sólido para el fondo
          },
        duration: 3000
    }).showToast();
}
