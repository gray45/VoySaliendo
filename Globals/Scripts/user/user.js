function showlogin() {
    $("#loginModal").modal({
        show: 'false'
    }); 
}

function Login() {

    $.ajax({

        url: "User/Login"
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
            succesLogin(data);
        },
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }); 
}

function succesLogin(data) {
    $("#loginIcon").hide();
    $("#user").empty();
    $("#user").append("<h3 class='gris'>" + data.userName + "</h3>&nbsp");
    $("#user").show();
    $("#registrar").hide();
    $("#logoutIcon").show();
}

