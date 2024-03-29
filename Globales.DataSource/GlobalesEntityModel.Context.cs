﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Globales.DataSource
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class DBEntities : DbContext
    {
        public DBEntities()
            : base("name=DBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        public virtual ObjectResult<insertUser_Result> insertUser(string userName, string password)
        {
            var userNameParameter = userName != null ?
                new ObjectParameter("UserName", userName) :
                new ObjectParameter("UserName", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("Password", password) :
                new ObjectParameter("Password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<insertUser_Result>("insertUser", userNameParameter, passwordParameter);
        }
    
        public virtual ObjectResult<insertRoad_Result> insertRoad(string direccion, string pasaPor, string origen, string destino)
        {
            var direccionParameter = direccion != null ?
                new ObjectParameter("direccion", direccion) :
                new ObjectParameter("direccion", typeof(string));
    
            var pasaPorParameter = pasaPor != null ?
                new ObjectParameter("pasaPor", pasaPor) :
                new ObjectParameter("pasaPor", typeof(string));
    
            var origenParameter = origen != null ?
                new ObjectParameter("origen", origen) :
                new ObjectParameter("origen", typeof(string));
    
            var destinoParameter = destino != null ?
                new ObjectParameter("destino", destino) :
                new ObjectParameter("destino", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<insertRoad_Result>("insertRoad", direccionParameter, pasaPorParameter, origenParameter, destinoParameter);
        }
    
        public virtual ObjectResult<selectRutaPorId_Result> selectRutaPorId(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<selectRutaPorId_Result>("selectRutaPorId", idParameter);
        }
    
        public virtual ObjectResult<selectRutas_Result> selectRutas()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<selectRutas_Result>("selectRutas");
        }
    
        public virtual ObjectResult<selectUserForLogin_Result> selectUserForLogin(string userName, string password)
        {
            var userNameParameter = userName != null ?
                new ObjectParameter("UserName", userName) :
                new ObjectParameter("UserName", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("Password", password) :
                new ObjectParameter("Password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<selectUserForLogin_Result>("selectUserForLogin", userNameParameter, passwordParameter);
        }
    
        public virtual ObjectResult<getParadasByRuta_Result> getParadasByRuta(Nullable<int> idRuta)
        {
            var idRutaParameter = idRuta.HasValue ?
                new ObjectParameter("idRuta", idRuta) :
                new ObjectParameter("idRuta", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<getParadasByRuta_Result>("getParadasByRuta", idRutaParameter);
        }
    
        public virtual int NuevaParada(Nullable<int> idRuta, string lat, string @long, string ubicacion)
        {
            var idRutaParameter = idRuta.HasValue ?
                new ObjectParameter("idRuta", idRuta) :
                new ObjectParameter("idRuta", typeof(int));
    
            var latParameter = lat != null ?
                new ObjectParameter("lat", lat) :
                new ObjectParameter("lat", typeof(string));
    
            var longParameter = @long != null ?
                new ObjectParameter("long", @long) :
                new ObjectParameter("long", typeof(string));
    
            var ubicacionParameter = ubicacion != null ?
                new ObjectParameter("ubicacion", ubicacion) :
                new ObjectParameter("ubicacion", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("NuevaParada", idRutaParameter, latParameter, longParameter, ubicacionParameter);
        }
    }
}
