using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Globales.DataSource
{
    public class ParadaDao
    {
        DBEntities de = new DBEntities();

        public List<getParadasByRuta_Result> getParadas(int idRuta)
        {
            return de.getParadasByRuta(idRuta).ToList();
        }

        public  void NuevaParada(int idRuta, string latitud, string longitud, string ubicacion) {
             de.NuevaParada(idRuta, latitud, longitud, ubicacion);
        }

        
    }
}
