jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });




});

$(document).ready(function ($) {
    var ventana_ancho = $(window).width();

    if (ventana_ancho < 1300) {
        $(".page-wrapper").removeClass("toggled");
    }
}); 

function showAlertConfirm(clase, texto, action,cancel) {
    var ventana_ancho = $(window).width();

    if (ventana_ancho < 1300) {
        $(".page-wrapper").removeClass("toggled");
    }

    var text = "cancelBoton('" + cancel + "')";

    $("#footerModal").empty();
    $("#cancelBoton").empty();

    $("#icono").removeClass("red");
    $("#icono").removeClass("green");
    $("#icono").removeClass("blue");
    $("#mensaje").text("");
    $("#cancelBoton").append('<i  class="fas fa-times btn-lg btn-danger" onclick="' + text + '" ></i>');

    $("#icono").addClass(clase);
    $("#mensaje").text(texto);
    if (action !== "") {
        $("#footerModal").append('<button class="btn btn-lg btn-active" onclick="' + action + '"> Si </button>');
        $("#footerModal").append('<button class="btn btn-lg" onclick="' + text + '"> No </button>');
    }
    else {
        $("#footerModal").append('<button class="btn btn-lg " onclick="hideModalConfirm()"> Aceptar </button>');
    }
    $("#alerModalConfirm").modal("show");
}

function hideModalConfirm() {
    $("#alerModalConfirm").modal("hide");
}

function cancelBoton(action) {

    if (action === "parada") {
        $("#idRuta").val("");
    }
    

    $("#alerModalConfirm").modal("hide");
}

function cancel(idModal) {

    if (idModal === "rutaNuevaModal") {
        $("#mensajeRuta").empty();
        var errores = false;
        $("#origenRuta").val("");
        $("#destinoRuta").val("");
        $("#divOrigenRuta").removeClass("error");
        $("#divDestinoRuta").removeClass("error");
    }

    if (idModal === "rutaViewModal") {
        $("#divBus").show();
        $("#divParada").removeClass("col-md-12");
        $("#divParada").addClass("col-md-6");
        $("#divBuscarParadas").addClass("escondida");
        $("#divNuevaParada").hide();
        $("#panelGenerico").html("");
        $("#paginacionOpcModalGenerico").html("");
    }

    $("#" + idModal).modal("hide")
}
