using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Globals.Models
{
    public class UsuarioModel
    {
        public int id { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
    }

    public class Mensaje {
        public string mensaje { get; set; } 
    }
}