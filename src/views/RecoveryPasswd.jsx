import React from "react";

function RecoveryPasswd() {
  return (
    <>
      <div>
        <h1>Solicitar usuario y contraseña</h1>
        <h3>
          Ingrese su email de alumno, el sistema le enviará un mail con los
          datos de sus credenciales nuevas (usuario y contraseña)
        </h3>
      </div>
      <article style={{ display: "flex", flexDirection: "column" }}>
        <form>
          <div style={{marginLeft: "-110px"}}>
            <label htmlFor="email">Correo Electrónico:</label>
          </div>
            <input style={{width: "250px", height: "30px", background: "white"}} type="email" id="email" name="email" required />
          <br />
          <br />
          <div style={{marginLeft: "-160px"}}>
            <label htmlFor="password">Contraseña:</label>
          </div>
            <input style={{width: "250px", height: "30px", background: "white"}} type="password" id="password" name="password" required />
          <br />
          <br />
          <button type="submit">Recuperar</button>
        </form>
      </article>
    </>
  );
}

export default RecoveryPasswd;
