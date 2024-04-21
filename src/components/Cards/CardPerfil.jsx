import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { perfilAPI } from "../../api/perfilAPI";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircularColor from "../../utils/CircularProgress";
import styles from "./CardPerfil.module.css";
import RatingWithValoration from "../../utils/RatingWithValoration";

function CardPerfil() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    perfilAPI
      .get(username)
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(`${error.response.status} | ${error.response.data.detail}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularColor />
      ) : data ? (
        <section
          style={{
            border: "2px solid black",
            padding: "10px",
            borderRadius: "10px",
            width: "850px",
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
                  sx={{ width: 72, height: 72, color: "#008588" }}
                  aria-label="recipe"
                >
                  {username[0].toUpperCase()}
                </Avatar>
              }
              title={
                <h2 style={{ textAlign: "start" }}>{`${data.full_name}`}</h2>
              }
              subheader={
                <div style={{ color: "black", fontSize: "25px" }}>
                  <h6 style={{ marginTop: "-10px" }}>{data.cargo}</h6>
                  <h6 style={{ marginTop: "-40px" }}>{data.country}</h6>
                </div>
              }
            />
          </article>
          <article>
            <div style={{ marginLeft: "-30px" }}>
              <Box style={{ overflowY: "auto" }}>
                <TextField
                  id="outlined-read-only-input"
                  label="Acerca de"
                  multiline
                  value={`${
                    data.description == ""
                      ? "No hay descripción"
                      : data.description
                  }`}
                  InputProps={{
                    readOnly: true,
                    shrink: true,
                    style: {
                      fontSize: "24px",
                      width: "800px",
                      marginTop: "10px",
                      maxHeight: "550px",
                      maxWidth: "100%",
                      whiteSpace: "pre-wrap",
                      overflowWrap: "break-word",
                      overflowY: "auto",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "24px", marginTop: "13px" },
                  }}
                />
              </Box>
            </div>
            <br />
            <div style={{ marginLeft: "-10px" }}>
              <Box style={{ width: "450px" }}>
                <TextField
                  id="outlined-read-only-input"
                  label="Destacado"
                  multiline
                  InputProps={{
                    readOnly: true,
                    shrink: true,
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                          width: "100%",
                          alignItems: "flex-start",
                          marginTop: "-180px",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <SchoolIcon />
                          <Typography
                            variant="body1"
                            style={{ marginLeft: "5px" }}
                          >
                            {data.estudiantes == 0
                              ? "No tiene estudiantes"
                              : `${data.estudiantes} estudiantes`}
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <CalendarMonthIcon />
                          <Typography
                            variant="body1"
                            style={{ marginLeft: "5px" }}
                          >
                            Miembro de inove desde {data.miembro_desde}
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <DiamondIcon />
                          <Typography
                            variant="body1"
                            style={{ marginLeft: "5px" }}
                          >
                            {data.desarrollos == null
                              ? "No tiene desarrollos"
                              : data.desarrollos}
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <StarIcon />
                          <Typography
                            variant="body1"
                            style={{ marginLeft: "5px" }}
                          >
                            {data.destacado == null
                              ? "N/A"
                              : "Cuadro de honor: " + data.destacado}
                          </Typography>
                        </div>
                        <div>
                          <RatingWithValoration
                            valoracion={4}
                            cantidadOpiniones={400}
                          />
                        </div>
                      </InputAdornment>
                    ),
                    style: {
                      fontSize: "24px",
                      height: "200px",
                      width: "800px",
                      padding: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "24px", marginTop: "3px" },
                  }}
                />
              </Box>
            </div>
            <br />
            <div style={{ marginLeft: "-10px" }}>
              <Box style={{ width: "450px" }}>
                <TextField
                  id="outlined-read-only-input"
                  label="Destacado"
                  multiline
                  InputProps={{
                    readOnly: true,
                    shrink: true,
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          marginTop: "-130px",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <SchoolIcon />
                          <Typography
                            variant="body1"
                            style={{ marginLeft: "5px" }}
                          >
                            {`Cursando: ${
                              data.cursando == null
                                ? "Ningun curso"
                                : data.cursando
                            }`}
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <LoginIcon />
                          <Typography
                            variant="body1"
                            style={{ marginLeft: "5px" }}
                          >
                            {`Ultimo login: ${
                              data.last_login == null
                                ? "Nunca"
                                : data.last_login
                            }`}
                          </Typography>
                        </div>
                      </InputAdornment>
                    ),
                    style: {
                      fontSize: "24px",
                      height: "100px",
                      width: "800px",
                      padding: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "24px", marginTop: "3px" },
                  }}
                />
              </Box>
            </div>
          </article>
        </section>
      ) : null}
    </>
  );
}

export default CardPerfil;
