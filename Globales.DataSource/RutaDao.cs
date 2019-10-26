using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Globales.DataSource
{
    public class RutaDao
    {
        DBEntities de = new DBEntities();
        
        public insertRoad_Result insertRoad(string direccion, string pasaPor, string origen, string destino)
        {
            return de.insertRoad(direccion, pasaPor, origen, destino).FirstOrDefault();
        }

        public List<selectRutas_Result> getRutas() {
            return de.selectRutas().ToList();
        }

        public selectRutaPorId_Result getRuta(int id)
        {
            return de.selectRutaPorId(id).FirstOrDefault();
        }

    }
}
