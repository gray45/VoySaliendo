using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Globales.DataSource
{
    public class UsuarioDao
    {
        DBEntities de = new DBEntities();

        public selectUserForLogin_Result SelectUserForLogin(string userName, string password)
        {
            return de.selectUserForLogin(userName, password).FirstOrDefault();
        }

        public insertUser_Result insertUser(string userName, string password) {
            return de.insertUser(userName, password).FirstOrDefault();
        }

        

    }
}
