/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function showParada(latitud, longitud, ubicacion) {
    var mapa = $("#Mapa_de_usuario").html("");

    map = new google.maps.Map(
        document.getElementById('Mapa_de_usuario'),
        { center: new google.maps.LatLng(parseFloat(latitud), parseFloat(longitud)), zoom: 16 }
    );

    var iconParada = {
        path: fontawesome.markers.MAP_MARKER,
        fillColor: '#233999',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 0.4
    }

    const Marcador_Parada = new google.maps.Marker(
        {
            position: new google.maps.LatLng(parseFloat(latitud), parseFloat(longitud)),
            map: map,
            title: ubicacion,
            icon: iconParada
        });

    $("#rutaViewModal").modal("hide");
}
    
                  


function Obtener_ubicacion( )
{
    const Ubicacion = new Geolocalizacion(( ) =>
    {
        var mapa = document.getElementById('Mapa_de_usuario');

        const Objeto_de_configuracion_del_mapa =
                {
                    center:
                            {
                                lat: Ubicacion.latitude,
                                lng: Ubicacion.longitude
                            },
                    zoom: 15
                };

        const Mapa_de_Google = new google.maps.Map(mapa, Objeto_de_configuracion_del_mapa);

        var icon = {
            path: fontawesome.markers.MAP_PIN,
            fillColor: '#000000',
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 0.4
        }

        const Marcador_del_mapa_de_Google = new google.maps.Marker(
                {
                    position:
                            {
                                lat: Ubicacion.latitude,
                                lng: Ubicacion.longitude
                            },
                    map: Mapa_de_Google,
                title: 'Ubicación actual',
                icon: icon
            });

     

        
        var Geocodificador = new google.maps.Geocoder;

        var coordenadas_geograficas =
        {
            lat: Ubicacion.latitude,
            lng: Ubicacion.longitude
        };

        Geocodificador.geocode
                (
                        {
                            'location': coordenadas_geograficas
                        },
                        function (results, status)
                        {
                            if (status === 'OK')
                            {
                                if (results[1])
                                {
                                    document.getElementById('inputDireccion').value = results[1].formatted_address;
                                    document.getElementById('lactitud').value = Ubicacion.latitude;
                                    document.getElementById('longitud').value = Ubicacion.longitude;
                                } else
                                {
                                    alert('No results found');
                                }
                            } else
                            {
                                alert('Geocoder failed due to: ' + status);
                            }
                        }
                );

        // Colocar marcadores.

        Mapa_de_Google.addListener('click', function (event)
        {
            ruta = $("#idRuta").val();

            if (ruta === "") {

                Marcador_del_mapa_de_Google.setPosition(event.latLng);

                Mapa_de_Google.setCenter(event.latLng);

                Geocodificador.geocode
                    (
                        {
                            'location': event.latLng
                        },
                        function (results, status) {
                            if (status === 'OK') {
                                if (results[1]) {
                                    var latLon = event.latLng.toString();
                                    latLon = latLon.replace("(", "").replace(")", "");
                                    var splitLatLong = latLon.split(",");
                                    document.getElementById('inputDireccion').value = results[1].formatted_address;
                                    document.getElementById('lactitud').value = splitLatLong[0];
                                    document.getElementById('longitud').value = splitLatLong[1];
                                } else {
                                    alert('No results found');
                                }
                            } else {
                                alert('Geocoder failed due to: ' + status);
                            }
                        }
                    );

                // alert ( Marcador_del_mapa_de_Google.getPosition ( ) ) ;
            }
        });

        
    });

}



function Obtener_ubicacion_Paradas(parada) {

    if (parada === "parada") {
        $("#alerModalConfirm").modal("hide");
    }

    const Ubicacion = new Geolocalizacion(() => {
        var mapa = document.getElementById('Mapa_de_usuario');

        const Objeto_de_configuracion_del_mapa =
        {
            center:
            {
                lat: Ubicacion.latitude,
                lng: Ubicacion.longitude
            },
            zoom: 15
        };

        const Mapa_de_Google = new google.maps.Map(mapa, Objeto_de_configuracion_del_mapa);

        var icon = {
            path: fontawesome.markers.MAP_PIN,
            fillColor: '#000000',
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 0.4
        }

        const Marcador_del_mapa_de_Google = new google.maps.Marker(
            {
                position:
                {
                    lat: Ubicacion.latitude,
                    lng: Ubicacion.longitude
                },
                map: Mapa_de_Google,
                title: 'Ubicación actual',
                icon: icon
            });




        var Geocodificador = new google.maps.Geocoder;

        var coordenadas_geograficas =
        {
            lat: Ubicacion.latitude,
            lng: Ubicacion.longitude
        };

        Geocodificador.geocode
            (
                {
                    'location': coordenadas_geograficas
                },
                function (results, status) {
                    if (status === 'OK') {
                        if (results[1]) {
                            document.getElementById('inputDireccion').value = results[1].formatted_address;
                            document.getElementById('lactitud').value = Ubicacion.latitude;
                            document.getElementById('longitud').value = Ubicacion.longitude;
                        } else {
                            alert('No results found');
                        }
                    } else {
                        alert('Geocoder failed due to: ' + status);
                    }
                }
            );

        // Colocar marcadores.

     

        Mapa_de_Google.addListener('dblclick', function (event) {



            ruta = $("#idRuta").val();

            if (ruta !== "") {
                
                Geocodificador.geocode
                    (
                        {
                            'location': event.latLng
                        },
                        function (results, status) {
                            if (status === 'OK') {
                                if (results[1]) {
                                    var latLon = event.latLng.toString();
                                    latLon = latLon.replace("(", "").replace(")", "");
                                    var splitLatLong = latLon.split(",");
                                    document.getElementById('inputParada').value = results[1].formatted_address;
                                    document.getElementById('lactitud').value = splitLatLong[0];
                                    document.getElementById('longitud').value = splitLatLong[1];
                                } else {
                                    alert('No results found');
                                }
                            } else {
                                alert('Geocoder failed due to: ' + status);
                            }
                        }
                    );

                var iconParada = {
                    path: fontawesome.markers.MAP_MARKER,
                    fillColor: '#233999',
                    fillOpacity: 1,
                    strokeWeight: 0,
                    scale: 0.4
                }

                const Marcador_Parada = new google.maps.Marker(
                    {
                        position:
                        {
                            lat: Ubicacion.latitude,
                            lng: Ubicacion.longitude
                        },
                        map: Mapa_de_Google,
                        title: $("#inputParada").val(),
                        icon: iconParada
                    });

                Marcador_Parada.setPosition(event.latLng);

                Mapa_de_Google.setCenter(event.latLng);

                agregarParadaConfirm();

                // alert ( Marcador_del_mapa_de_Google.getPosition ( ) ) ;
            }
        });
    });

    

}







  
