using Globales.DataSource;
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

            //7777 JsonResult json = new JsonResult { Data = login };
            
            return Json(login,JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Logout()
        {
            UsuarioDao user = new UsuarioDao();
            
            //7777 JsonResult json = new JsonResult { Data = login };

            return null;
        }


    }
}