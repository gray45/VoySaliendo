using Globales.DataSource;
using Globals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Web.Mvc;

namespace Globals.Controllers
{
    public class RutaController : Controller
    {
        [HttpGet]
        public JsonResult agregarRuta(string origen, string destino)
        {
            RutaDao ruta = new RutaDao();
            var road = ruta.insertRoad("","", origen, destino);
            if (road != null)
            {
                
                return Json(road, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Mensaje mensage = new Mensaje();
                mensage.mensaje = "mal";
                return Json(mensage, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult getRutas()
        {
            RutaDao ruta = new RutaDao();
            var roads = ruta.getRutas();
           

                return Json(roads, JsonRequestBehavior.AllowGet);
            
        }

        [HttpGet]
        public JsonResult getRuta(string id)
        {
            RutaDao ruta = new RutaDao();
            var road = ruta.getRuta(int.Parse(id));


            return Json(road, JsonRequestBehavior.AllowGet);

        }

    }
}