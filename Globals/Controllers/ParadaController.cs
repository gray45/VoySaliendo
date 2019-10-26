using Globales.DataSource;
using Globals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Web.Mvc;

namespace Globals.Controllers
{
    public class ParadaController : Controller
    {
        [HttpGet]
        public JsonResult agregarParada(string idRuta, string latitud, string longitud, string ubicacion)
        {
            ParadaDao paradaDao = new ParadaDao();
            paradaDao.NuevaParada(int.Parse(idRuta), latitud, longitud, ubicacion);


            Mensaje mensage = new Mensaje();
            mensage.mensaje = "Bien";
            return Json(mensage, JsonRequestBehavior.AllowGet);


        }

        [HttpGet]
        public JsonResult getParadas(string idRuta)
        {
            ParadaDao paradaDao = new ParadaDao();
           var paradas = paradaDao.getParadas(int.Parse(idRuta));
            
            return Json(paradas, JsonRequestBehavior.AllowGet);


        }
    }
}