import React from "react";

export default function ItemDitail() {
  return (
<form>
<h3>Registro de usuario</h3>
<div className="mb-3">
    <label htmlFor="Nombre" className="form-label">
     Nombre
    </label>
    <input
      type="text"className="form-control"id="nombre"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="apellido" className="form-label">
      Apellido
    </label>
    <input
      type="text"className="form-control"id="apellido"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="tel" className="form-label">
      Teléfono
    </label>
    <input
      type="number"className="form-control"id="tel"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">
      Correo electrónico
    </label>
    <input
      type="email"className="form-control"id="email"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">
      Contraseña
    </label>
    <input
      type="password" className="form-control" id="Password"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="ConfirmarPassword1" className="form-label">
      Confirmar contraseña
    </label>
    <input
      type="password" className="form-control"id="Password"
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Registrar
  </button>
</form>
  );
}
