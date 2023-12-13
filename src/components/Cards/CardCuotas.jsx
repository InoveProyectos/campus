import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../../App.css";
import CuotasIconTitle from "../../model/CuotasIconTitle.jsx";
import Uploader from "../../utils/buttons/UpLoader.jsx";
import DownLoader from "../../utils/buttons/DownLoader.jsx";

function CardCuotas(props) {
  const {
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
      <div
        style={{ marginLeft: "15px", marginRight: "10px", lineHeight: "22px" }}
        className="centeredContent titleH2"
      >
        <p className="parrafTitle"> {title} </p>
        {<CuotasIconTitle numero={numero} />}
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            backgroundColor: "#fefae0",
            border: "3px solid #dddd",
          }}
        >
          <p style={{ color: `${status_color}` }}>
            <b>{status_text}</b>
          </p>
        </div>
      </div>
      <CardContent>
        <div style={{ textAlign: "start" }}>
          <p style={{ marginBottom: "-20px" }}>Pago N°{cuota}</p>
          <p style={{ marginBottom: "-20px" }}>{amount}</p>
          <p>Fecha de vencimiento: {date}</p>
        </div>
        <div className="imageContainerCuotas">
          <div>
            <div className="effectIcon">{icon}</div>
            <p
              className="message"
              style={{
                marginTop: "-1px",
                whiteSpace: "wrap",
                marginRight:
                  messegeIcon === "Descargar recibo" ? "-5px" : "0px",
              }}
            >
              {messegeIcon}
            </p>
          </div>
          {status === 5 || status_text === "PAGADO" ? null : (
            <div className="effectIcon">
              {(() => {
                switch (status) {
                  case 4:
                  case 3:
                  case 0:
                    return (
                      <Uploader
                        textButton="Subir comprobante"
                        nroCuota={cuota}
                      />
                    );
                  default:
                    return (
                      <DownLoader
                        textButton="Ver comprobante"
                        nroCuota={cuota}
                      />
                    );
                }
              })()}
              <br />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default CardCuotas;
