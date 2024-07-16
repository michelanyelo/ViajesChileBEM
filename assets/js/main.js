// Cambiar background del navbar en movimiento
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 300) {
        $(".navbar").css({
            "background-color": "#212529"
        }).removeClass("bg-transparent");
    } else {
        $(".navbar").css("width", "").addClass("bg-transparent"); // Restablece el ancho cuando el scroll es menor a 300
    }
});

// Activación de pestañas según sección
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar'
});


// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('¡Gracias por contactarte con Viajes Chile! Te responderemos a la brevedad.', 'success')
    })
}