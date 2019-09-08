using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Globales.DataSource
{
    public class UsuarioDao
    {
        DBEntities1 de = new DBEntities1();

        public selectUserForLogin_Result SelectUserForLogin(string userName, string password)
        {
            return de.selectUserForLogin(userName, password).FirstOrDefault();
        }

        public Boolean UpdatePassword(string userName, string password)
        {
            return (de.ChangePassword(userName, password)!=0);
        }

    }
}
