import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../App.css";

function CardCursos(props) {
  const {
    title,
    imageUrl,
    commission,
    date,
    days,
    info,
    messegeIcon,
    messegeIcon2,
    icon,
    icon2,
    iconTitle,
    classNameMain,
    classNameSecondary,
  } = props;

  return (
    <Card className={classNameMain}>
      <div
        style={{ marginLeft: "15px", marginRight: "10px", lineHeight: "22px", }}
        className="centeredContent titleH2"
      >
        <p className="parrafTitle"> {title} </p>{iconTitle}
       
      </div>

      <div style={{ background: "black" }} className="effectIcon">
        {imageUrl}
      </div>
      <CardContent>
        <Typography textAlign="start" variant="h2">
          <div className="titleH3">
            Comisión: {commission}
            <br />
            Del {date}
            <br />
            {days}
            <br />
            {info}
          </div>
        </Typography>
        <div className={classNameSecondary}>
          <div>
            <div className="effectIcon">{icon}</div>
            <p
              className="message"
              style={{ marginTop: "-1px", whiteSpace: "nowrap" }}
            >
              {messegeIcon}
            </p>
          </div>
          <div>
            <div className="effectIcon">{icon2}</div>
            <p
              className="message"
              style={{ marginTop: "-1px", whiteSpace: "nowrap" }}
            >
              {messegeIcon2}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardCursos;
