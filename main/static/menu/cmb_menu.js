$.fn.select2.defaults.set('theme', 'bootstrap');
var placeholder = 'Seleccione';
$('.cmb_menu').select2({
    placeholder: placeholder,
    allowClear: true,
    width: null,
    width: null,
    containerCssClass: ':all:',
    ajax: {
        url: '/api_proxy/',
        type: 'post',
        dataType: 'json',
        data: JSON.stringify({
            "api_method": "menus_options","type_method":"GET" 
            }), 
        processResults: function (response) {
        console.log(response);
        if (response && Array.isArray(response.data)) {
            return {
                results: response.data.map(function(item) {
                    return { id: item.id, text: item.title }; 
                })
            };
        } else {
            return {
                results: []
            };
        }
    }
    },
    success: function(response) {
        console.log('Respuesta del servidor:', response);
        mostrarToast("success", "¡Operación exitosa!")
    },
    error: function(xhr, status, error) {
        console.log('Error:', error);
        mostrarToast("Error", "Error en la operación");
    }
});