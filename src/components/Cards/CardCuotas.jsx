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
    btn_right,
    classNameMain,
  } = props;

  return (
    <Card className={classNameMain}>
      {console.log(btn_right)}
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
        <div className={styles.imageContainerCuotas} style={title.length <= 16 ? { marginTop: "30px", alignItems: "self-start" } : null}>
          <div style={messegeIcon.length >= 16 ? { marginLeft: "15px", marginRight: "-35px" } : { marginLeft: "15px", marginRight: "-15px" }}>
            <div className={styles.effectIcon}>{icon}</div>
            {messegeIcon}
          </div>
          <div className={styles.effectIcon}>
            {(() => {
              switch (btn_right.type) {
                case 19:
                  return (
                    <DownLoader
                      textButton="Ver comprobante"
                      nroCuota={cuota_id}
                    />
                  );
                case 18:
                  return (
                    <Uploader
                      textButton="Subir comprobante"
                      nroCuota={cuota_id}
                    />
                  );
              }
            })()}
            <br />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardCuotas;
