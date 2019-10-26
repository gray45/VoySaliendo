function showRutasModal() {
    var ventana_ancho = $(window).width();

    if (ventana_ancho < 1300) {
        $(".page-wrapper").removeClass("toggled");
    }

    getRutas(1);

    $("#rutaModal").modal({
        show: 'false'
    });
    
}

function getRutas(numPage) {

    $.ajax({

        url: "Ruta/getRutas"
        ,

        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información en la base de datos");
            //mostrarModal("mensajeAlert", "Error al cargar en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            if (data) {
                dibujarPanel(numPage, data);
                paginadorModal(numPage, data.length/6);
            }

        },
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });
}

function dibujarPanel(numpag, dataJson) {

    $("#panel").html("");
    var cont = 0;
    var i = 6 * (numpag - 1);
    for (; i < dataJson.length && (cont < 6); i++, cont++) {
        var row = $('<div class="row" onclick="rutaModalView(' + dataJson[i].idRuta + ')"></div>');
        row.addClass("tabla");
        $("#panel").append(row);
        if (dataJson[i] !== "undefined") {
            row.append($("<div class='col-md-1'></div><div class = 'col-md-11' >" +
                "<div class='row'><div class='col-md-5'><h4>" + dataJson[i].Origen + "</h4>" +
                "</div > <div class='col-md-2'><h4> <i class='fas fa-arrow-right green'></i></h4>" + 
                "</div > <div class='col-md-5'><h4> " + dataJson[i].Destino + "</h4></div></div ></div > "));
        }
        
    }

}

function paginadorModal(pagAct, tam) {
    var ini = 1;
    $("#paginacionOpcModal").html("");
    if (pagAct > 2) {
        ini = pagAct - 2;
        $("#paginacionOpcModal").append('<li onclick="getRutas(' + ini + '),paginadorModal(' + (pagAct - 1) + ',' + tam + ')"><a>&laquo;</a></li>');
    } else {
        $("#paginacionOpcModal").append('<li onclick="getRutas(' + ini + '), paginadorModal(' + (pagAct - 1) + ',' + tam + ')" ><a>&laquo;</a></li>');
    }
    for (var i = 0; i < tam; i++ , ini++) {
        if (ini === pagAct) {
            $("#paginacionOpcModal").append('<li class="active" onclick="getRutas(' + ini + '),paginadorModal(' + ini + ',' + tam + ') "><a>' + ini + '</a></li> ');
        } else {
            $("#paginacionOpcModal").append('<li onclick="getRutas(' + ini + '),paginadorModal(' + ini + ',' + tam + ') "><a>' + ini + '</a></li>');
        }
    }
    $("#paginacionOpcModal").append('<li onclick="getRutas(' + (ini - 1) + '), paginadorModal(' + (ini - 1) + ',' + tam + ')"><a>&raquo;</a></li>');
}

function showNuevaRutaModal() {
    var ventana_ancho = $(window).width();

    if (ventana_ancho < 1300) {
        $(".page-wrapper").removeClass("toggled");
    }

    $("#rutaModal").modal("hide");

    $("#rutaNuevaModal").modal({
        show: 'false'
    });
}

function agregarRuta() {

    if (!isemptyRuta()) {


        $.ajax({

            url: "Ruta/agregarRuta"
            ,
            data: {
                origen: $("#origenRuta").val(),
                destino: $("#destinoRuta").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                alert("Se presento un error a la hora de cargar la información en la base de datos");
                //mostrarModal("mensajeAlert", "Error al cargar en la base de datos");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                if (data) {
                     cancel("rutaNuevaModal");
                    var text = "La ruta " + data.Origen + " " + data.Destino + " agregada con exito desea asignar paradas o autobuses";
                    var text1 = "rutaModalView(" + data.idRuta + ")";
                    showAlertConfirm("green", text, text1,"");
                }
                
            },
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });
    }
    else {
        $("#mensajeRuta").append("<i class='fas fa-exclamation-triangle btn-lg error prefix'></i><h4 style='display:inline-block'> Rellene los campos en rojo</h4>");
    }
}

function isemptyRuta() {
    $("#mensajeRuta").empty();
    var errores = false;
    $("#divOrigenRuta").removeClass("error");
    $("#divDestinoRuta").removeClass("error");

    var origen = $("#origenRuta").val();
    var destino = $("#destinoRuta").val();

    if (origen === "") {
        $("#divOrigenRuta").addClass("error");
        errores = true;
    }
    if (destino === "") {
        $("#divDestinoRuta").addClass("error");
        errores = true;
    }
    return errores;
}

function rutaModalView(idRuta) {
    var ventana_ancho = $(window).width();
    $("#alerModalConfirm").modal("hide");
    

    if (ventana_ancho < 1300) {
        $(".page-wrapper").removeClass("toggled");
    }

    $.ajax({

        url: "Ruta/getRuta"
        ,
        data: {
            id: idRuta
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información en la base de datos");
            //mostrarModal("mensajeAlert", "Error al cargar en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            if (data) {
                $("#rutaModal").modal("hide");
                $("#headerRutaView").html("");

                $("#headerRutaView").append("<input class='form-control alaPar transparent-input' readonly value='" + data.Origen + "' /><h3 class='alaPar'> - - </h3><input class='form-control alaPar transparent-input'readonly value='" + data.Destino + "' />");
                $("#idRuta").val(data.idRuta);
                $("#rutaViewModal").modal("show");
            }

        },
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });

    
    
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("#idRuta").val("");
});


