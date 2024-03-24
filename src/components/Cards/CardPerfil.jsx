import React from "react";
import { useParams } from "react-router-dom";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import TextRating from "../../utils/Rating";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import styles from "./CardNosotros.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import { useNavigate } from "react-router-dom";

function CardPerfil({ data }) {
  const { username } = useParams();

  const myData = data;

  // const text = myData.description == "" ? "" : myData.description;
  const text = username == "" ? "" : username;
  const truncatedSubheader =
    text.length > 60 ? `${text.slice(0, 60)}...` : text;
  const navigate = useNavigate();

  return (
    <section
      style={{
        border: "2px solid black",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <article
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
          marginLeft: "0px",
          padding: "0px",
        }}
      >
        <CardHeader
          sx={{ display: "flex", flexDirection: "row" }}
          avatar={
            <Avatar
              // src={myData.avatar_url != null ? myData.avatar_url : null}
              sx={{ width: 72, height: 72, color: "#008588" }}
              aria-label="recipe"
            >
              {username[0]}
            </Avatar>
          }
          title={
            <h2
              style={{ textAlign: "start" }}
            >{`Fernando Valls (${username})`}</h2>
          }
          subheader={
            <div style={{ color: "black", fontSize: "25px" }}>
              <h6 style={{marginTop: "-10px"}}>Descripcion</h6>
              <h6 style={{ marginTop: "-40px" }}>Pais</h6>
            </div>
          }
        />
      </article>
      <br />
      <div>
        <Card sx={{ maxWidth: 345, textAlign: "left" }}>
          <CardActionArea style={{ background: "white" }}>
            <CardContent>
              <Typography
                color={"#008588"}
                gutterBottom
                variant="h4"
                component="div"
              >
                Acerca de
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descripción tipo Linkedin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <br />
      <br />
      <div>
        <Card sx={{ maxWidth: 345, textAlign: "left" }}>
          <CardActionArea style={{ background: "white" }}>
            <CardContent>
              <Typography
                color={"#008588"}
                gutterBottom
                variant="h4"
                component="div"
              >
                Destacado
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descripción tipo Linkedin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <br />
      <br />
      <div>
        <Card sx={{ maxWidth: 345, textAlign: "left" }}>
          <CardActionArea style={{ background: "white" }}>
            <CardContent>
              <Typography
                color={"#008588"}
                gutterBottom
                variant="h4"
                component="div"
              >
                Actividad
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descripción tipo Linkedin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <br />
      <br />
      <div>
        <Card sx={{ maxWidth: 345, textAlign: "left" }}>
          <CardActionArea style={{ background: "white" }}>
            <CardContent>
              <Typography
                color={"#008588"}
                gutterBottom
                variant="h4"
                component="div"
              >
                Datos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descripción tipo Linkedin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </section>
  );
}

export default CardPerfil;
