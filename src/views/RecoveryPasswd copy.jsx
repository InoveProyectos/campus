import React from "react";
import styles from "./RecoveryPasswd.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import CustomSnackbar from "../utils/SnackBar";
import { resetAPI } from "../api/resetAPI";

function RecoveryPasswd() {
  const navigate = useNavigate();
  const [warningSnackbar, setWarningSnackbar] = React.useState(false);
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);
  const [successSnackbar, setSuccessSnackbar] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    dni: '',
  });

  const handleSnackbarClose = () => {
    setWarningSnackbar(false);
    setErrorSnackbar(false);
    setSuccessSnackbar(false);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRecovery = (e) => {
    e.preventDefault();

    resetAPI.post(formData)
      .then((response) => {
        setSuccessSnackbar(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log('Datos del formulario:', formData);
        setErrorSnackbar(true);
      });
    setIsLoading(true);
  };

  return (
    <>
      <CustomSnackbar
        open={warningSnackbar}
        onClose={handleSnackbarClose}
        message="Por favor, completa todos los campos."
        severity="warning"
        duration={2000}
      />
      <CustomSnackbar
        open={errorSnackbar}
        onClose={handleSnackbarClose}
        message="Error al realizar el inicio de sesión."
        severity="error"
        duration={1000} // Set the duration in milliseconds
      />
      <CustomSnackbar
        open={successSnackbar}
        onClose={handleSnackbarClose}
        message="Credenciales recuperadas exitosamente!."
        severity="success"
        duration={2000}
      />
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
              <button style={{ background: "#00DEBC", color: "#031C18" }} onClick={(e) => handleRecovery(e)}>
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
