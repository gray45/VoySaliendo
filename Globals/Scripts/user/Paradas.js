
function GetParadas(numPage) {

    ruta = $("#idRuta").val();

    $.ajax({

        url: "Parada/getParadas"
        ,
        data: {
            idRuta: ruta
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información en la base de datos");
            //mostrarModal("mensajeAlert", "Error al cargar en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            if (data) {
                dibujarPanelGenerico(numPage, data);
                paginadorModalGenerico(numPage, data.length / 6);

                $("#divBus").hide();
                $("#divParada").removeClass("col-md-6");
                $("#divParada").animate(function () { addClass("col-md-12") }, "slow");
                $("#divBuscarParadas").removeClass("escondida", "slow");
                $("#divNuevaParada").show();
            }

        },
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });

    
}

function dibujarPanelGenerico(numpag, dataJson) {

    $("#panelGenerico").html("");
    var cont = 0;
    var i = 6 * (numpag - 1);
    for (; i < dataJson.length && (cont < 6); i++ , cont++) {
        var text = "showParada(" + dataJson[i].lactitud + "," + dataJson[i].longitud + ",'" + dataJson[i].ubicacion.replace(',','') + "')";

        var row = $('<div class="row" onclick="' + text + '"></div>');
        row.addClass("tablaParada");
        $("#panelGenerico").append(row);
        if (dataJson[i] !== "undefined") {
            row.append($("<div class = 'col-md-12' >" +
                "<div class='row'><div class='col-md-1'><h4> <i class='fas fa-map-marker-alt blue'></i></h4>" +
                "</div > <div class='col-md-11'><h4> " + dataJson[i].ubicacion + "</h4></div></div ></div > "));
        }

    }

}

function paginadorModalGenerico(pagAct, tam) {
    var ini = 1;
    $("#paginacionOpcModalGenerico").html("");
    if (pagAct > 2) {
        ini = pagAct - 2;
        $("#paginacionOpcModalGenerico").append('<li onclick="GetParadas(' + ini + '),paginadorModal(' + (pagAct - 1) + ',' + tam + ')"><a>&laquo;</a></li>');
    } else {
        $("#paginacionOpcModalGenerico").append('<li onclick="GetParadas(' + ini + '), paginadorModal(' + (pagAct - 1) + ',' + tam + ')" ><a>&laquo;</a></li>');
    }
    for (var i = 0; i < tam; i++ , ini++) {
        if (ini === pagAct) {
            $("#paginacionOpcModalGenerico").append('<li class="active" onclick="GetParadas(' + ini + '),paginadorModal(' + ini + ',' + tam + ') "><a>' + ini + '</a></li> ');
        } else {
            $("#paginacionOpcModalGenerico").append('<li onclick="GetParadas(' + ini + '),paginadorModal(' + ini + ',' + tam + ') "><a>' + ini + '</a></li>');
        }
    }
    $("#paginacionOpcModalGenerico").append('<li onclick="GetParadas(' + (ini - 1) + '), paginadorModal(' + (ini - 1) + ',' + tam + ')"><a>&raquo;</a></li>');
}

function agregarParada() {
    $("#rutaViewModal").modal("hide");
    var text = "Dar doble click al mapa para agregar Paradas a la Ruta";
    showAlertConfirm("blue", text, "", "parada");
    Obtener_ubicacion_Paradas("");
}

function agregarParadaConfirm() {
    var idRuta = $("#idRuta").val(); 
    var parada = $("#inputParada").val();

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
                var text = "Agregar una Parada en " + parada + " a la Ruta " + data.Origen + " => " + data.Destino;
                var text1 = "agregarParadaAction()";
                showAlertConfirm("blue", text, text1, "");
            }

        },
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });
    
    
}

function agregarParadaAction() {
    $("#alerModalConfirm").modal("hide");
    var latitud = $("#lactitud").val();
    var longitud = $("#longitud").val();
    var idRuta = $("#idRuta").val();
    var parada = $("#inputParada").val();

    $.ajax({

        url: "Parada/agregarParada"
        ,
        data: {
            idRuta: idRuta,
            latitud: latitud,
            longitud: longitud,
            ubicacion: parada
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información en la base de datos");
            //mostrarModal("mensajeAlert", "Error al cargar en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            if (data) {
                
                var text = "Agregada con exito, desea agregar otra";
                showAlertConfirm("blue", text, "Obtener_ubicacion_Paradas('parada')", "Parada");
            }

        },
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });
}

