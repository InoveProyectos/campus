import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./CardCuotas.module.css";
import classnames from "classnames";
import CuotasIconTitle from "../../model/CuotasIconTitle.jsx";
import Uploader from "../../utils/buttons/UpLoader.jsx";
import DownLoader from "../../utils/buttons/DownLoader.jsx";

function CardCuotas(props) {
  const {
    cuota_id,
    title,
    date,
    numero,
    cuota,
    amount,
    messegeIcon,
    status_text,
    status_color,
    icon,
    status,
    classNameMain,
  } = props;

  return (
    <Card className={classNameMain}>
      <div className={classnames(styles.centeredContent, styles.titleH2)}>
        <p className={styles.parrafTitle}> {title} </p>
        {<CuotasIconTitle numero={numero} />}
      </div>

      <div>
        <div className={styles.flexContainer}>
          <p style={{ color: `${status_color}` }}>
            <b>{status_text}</b>
          </p>
        </div>
      </div>
      <CardContent style={{ marginTop: "-20px" }}>
        <div style={{ textAlign: "start" }}>
          <p style={{ marginBottom: "-10px" }}>Pago N°{cuota}</p>
          <p style={{ marginBottom: "-10px" }}>{amount}</p>
          <p style={{ marginBottom: "15px" }}>Fecha de vencimiento: {date}</p>
        </div>
        <div className={styles.imageContainerCuotas} style={title.length <= 16 ? { marginTop: "30px" } : null}>
          <div style={{ marginLeft: "15px", marginRight: "-10px" }}>
            <div className={styles.effectIcon}>{icon}</div>
            <p
              className={classnames(styles.containerClassName, styles.message)}
            >
              {messegeIcon}
            </p>
          </div>
          {status === 5 || status_text === "PAGADO" ? (
            <div className={styles.effectIcon}>
              {(() => {
                switch (status) {
                  case 4:
                  case 3:
                  case 5:
                    return (
                      <Uploader
                        textButton="Subir comprobante"
                        nroCuota={cuota_id}
                      />
                    );
                    null
                  default:
                    return (
                      <DownLoader
                        textButton="Ver comprobante"
                        nroCuota={cuota_id}
                      />
                    );
                }
              })()}
              <br />
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default CardCuotas;
