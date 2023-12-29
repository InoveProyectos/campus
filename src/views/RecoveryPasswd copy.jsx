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
              <label htmlFor="email">Email:</label>
            </div>
            <input
              className={styles.label}
              type="email"
              id="email"
              name="email"
            />
            <br />
            <br />
            <div>
              <label htmlFor="password">DNI (documento único):</label>
            </div>
            <input
              className={styles.label}
              type="password"
              id="password"
              name="password"
            />
            <br />
            <div>
              <p>
                Ante cualquier duda puede contatarnos a: <br />
                admin@inovecode.com
              </p>
            </div>
            <div className={styles.button}>
              <button style={{ background: "#00DEBC", color: "#031C18"}} onClick={() => handleRecovery()} type="submit">
                Recuperar
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}

export default RecoveryPasswd;
