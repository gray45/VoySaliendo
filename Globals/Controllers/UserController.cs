using Globales.DataSource;
using Globals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Web.Mvc;

namespace Globals.Controllers
{
    public class UserController : Controller
    {
        [HttpGet]
        public JsonResult Login(string userName, string password)
        {
            UsuarioDao user = new UsuarioDao();
            selectUserForLogin_Result login = user.SelectUserForLogin(userName, password);
            if (login != null)
            {
                string name = login.userName;
                int id = login.id;

                Session["userName"] = name;
                Session["id"] = id;

                return Json(login, JsonRequestBehavior.AllowGet);
            }
            else {
                Mensaje mensage = new Mensaje();
                    mensage.mensaje = "mal";
                    return Json(mensage, JsonRequestBehavior.AllowGet);
                }
        }

        [HttpGet]
        public JsonResult Logout(string logout)
        {
            Mensaje mensage = new Mensaje();

            if (logout == "logout")
            {

                Session["userName"] = null;
                Session["id"] = null;
                mensage.mensaje = "bien";

                return Json(mensage, JsonRequestBehavior.AllowGet);
            }
            else {
                mensage.mensaje = "mal";
                return Json(mensage, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult registrarse(string userName, string password)
        {
            UsuarioDao user = new UsuarioDao();
            selectUserForLogin_Result login = user.SelectUserForLogin(userName, password);
            if (login == null)
            {
                insertUser_Result registro = user.insertUser(userName, password);

                Session["userName"] = registro.userName;
                Session["id"] = registro.id;

                return Json(registro, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Mensaje mensage = new Mensaje();
                mensage.mensaje = "existente";
                return Json(mensage, JsonRequestBehavior.AllowGet);
            }
        }

    }
}