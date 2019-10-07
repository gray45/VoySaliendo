

function showlogin() {
    $("#mensajeLogin").empty();
    $("#divUserName").removeClass("error");
    $("#divPassword").removeClass("error");
    $("#userName").val("");
    $("#password").val("");
  //  $("#registrarseBotom").hide();
    $("#loginBotom").show();

    $("#loginModal").modal({
        show: 'false'
    }); 
}

function Login(action) {

    if (!isempty()) {


        $.ajax({

            url: "User/" + action
            ,
            data: {
                userName: $("#userName").val(),
                password: $("#password").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                alert("Se presento un error a la hora de cargar la información en la base de datos");
                //mostrarModal("mensajeAlert", "Error al cargar en la base de datos");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                if (data.mensaje === "mal") {
                    error();
                }
                else {
                    if (data.mensaje === "existente") {
                        errorRegistarse();
                    }
                    else {
                        succesLogin(data);
                        $("#loginModal").modal("hide");
                    }
                }
            },
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });
    }
    else {
        $("#mensajeLogin").append("<i class='fas fa-exclamation-triangle btn-lg error prefix'></i><h4 style='display:inline-block'> Rellene los campos en rojo</h4>");
    }
}

function succesLogin(data) {
    $("#loginIcon").hide();
    $("#user").empty();
    $("#loginLi").hide();
    $("#loginClass").empty();
   // $("#user").append("<a id='loginClass' class='btn'>" + data.userName + "</a>");
    $("#user").append("<strong>" + data.userName + "</strong>");
    $("#user").show();
    $("#registrar").hide();
    $("#logoutClass").show();
    Obtener_ubicacion();
}

function succesLogout() {
    $("#loginIcon").show();
    $("#user").empty();
    $("#user").hide();
    $("#registrar").show();
    $("#logoutClass").hide();
}

function logout() {

    $.ajax({

        url: "User/Logout"
        ,
        data: {
            logout: "logout"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información en la base de datos");
            //mostrarModal("mensajeAlert", "Error al cargar en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            succesLogout();
        },
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }); 
}

function error() {
    $("#mensajeLogin").empty();
    $("#divUserName").addClass("error");
    $("#divPassword").addClass("error");
    $("#mensajeLogin").append("<i class='fas fa-exclamation-triangle btn-lg error prefix'></i><h4 style='display:inline-block'> Usuario o Contraseña incorrectos</h4>");
}

function errorRegistarse() {
    $("#mensajeLogin").empty();
    $("#divUserName").addClass("error");
    $("#divPassword").addClass("error");
    $("#mensajeLogin").append("<i class='fas fa-exclamation-triangle btn-lg error prefix'></i><h4 style='display:inline-block'> El usuario ya existe </h4>");
}

function isempty() {
    $("#mensajeLogin").empty();
    var errores = false;
    $("#divUserName").removeClass("error");
    $("#divPassword").removeClass("error");

    var userName = $("#userName").val();
    var password = $("#password").val();

    if (userName === "") {
        $("#divUserName").addClass("error");
        errores = true;
    }
    if (password === "") {
        $("#divPassword").addClass("error");
        errores = true;
    }
    return errores;
}

function showRegister() {

    $("#mensajeLogin").empty();
    $("#divUserName").removeClass("error");
    $("#divPassword").removeClass("error");
    $("#userName").val("");
    $("#password").val("");
    $("#registrarseBotom").show();
    $("#loginBotom").hide();

    $("#loginModal").modal({
        show: 'false'
    }); 

}

    $(document).ready(function () {

        var user = $("#textUser").val();
        if (user !== "") {

           // $("#user").append("<a id='loginClass' class='btn'>" + user + "</a>");
            $("#user").append("<strong>" + user + "</strong>");
            $("#user").show();
            $("#logoutClass").show();
            Obtener_ubicacion();
        }
        else {
            $("#loginIcon").show();
            $("#register").show();
            showlogin();
        }

    });


