import React from "react";
import styles from "./RecoveryPasswd.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function RecoveryPasswd() {
  const navigate = useNavigate();

  const handleRecovery = () => {
    navigate("/login");
  };

  return (
    <>
      <section className={styles.bodyRecovery}>
        <div>
          <h1>Solicitar usuario y contraseña</h1>
        </div>
        <article>
          <h3>
            Ingrese su email de alumno, el sistema le enviará un mail con los
            datos de sus credenciales nuevas (usuario y contraseña)
          </h3>
          <form>
            <div>
              <label htmlFor="email">Correo Electrónico:</label>
            </div>
            <input
              className={styles.label}
              type="email"
              id="email"
              name="email"
              color="black"
            />
            <br />
            <br />
            <div>
              <label htmlFor="password">Contraseña:</label>
            </div>
            <input
              className={styles.label}
              type="password"
              id="password"
              name="password"
              color="black"
            />
            <br />
            <br />
            <div className={styles.button}>
              <button onClick={() => handleRecovery()} type="submit">Recuperar</button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}

export default RecoveryPasswd;
