import "../App.css";
import CircularWithValueLabel from "../utils/CircularProgressWithLabel.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import CardCursos from "../components/Cards/CardCursos.jsx";
import Divider from "@mui/material/Divider";
import CustomizedDialogs from "../utils/AlerDialogCustomization.jsx";
import CircularColor from "../utils/CircularProgress.jsx";
import CursosImg from "../model/CursosImg.jsx";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { grey, yellow } from "@mui/material/colors";

export default function CurrentCourses() {
  const [data, setData] = useState({});
  const [btnAlertTextDialogs, setBtnAlertTextDialogs] = useState("");
  const [btnAlertTitleDialogs, setBtnAlertTitleDialogs] = useState("");
  const [objChoose, setObjChoose] = useState([]);
  const [isCustomizedDialogs, setIsCustomizedDialogs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://admin.inovecode.com/api/perfil/cursos/"
        );
        setTimeout(() => {
          setData(response.data);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    getUser();
  }, []);

  const handleOpenDialog = (dialog, title, btn) => {
    setBtnAlertTextDialogs(dialog);
    setBtnAlertTitleDialogs(title);
    setIsCustomizedDialogs(true);
    setObjChoose(btn);
  };

  const handleBtnCenter = (dialog, title, btn) => {
    setBtnAlertTextDialogs(dialog);
    setBtnAlertTitleDialogs(title);
    setObjChoose(btn);
    setIsCustomizedDialogs(true);
  };

  const handleCloseCustomizedDialogs = () => {
    setIsCustomizedDialogs(false);
  };

  return (
    <>
      <h1 className="titleCard">
        MIS CURSOS
      </h1>
      <Divider
        variant="middle"
        color="white"
        style={{
          marginBottom: "15px",
        }}
      />
      {isLoading ? (
        <CircularColor />
      ) : data ? (
        <section className="containerCard">
          {data.results.map((element, index) => {
            return (
              <article
                key={element.id}
                style={{ display: "flex", marginLeft: "20px" }}
              >
                {
                  <CardCursos
                    key={element.id}
                    title={element.name}
                    imageUrl={
                      element.btn_center != null ? (
                        <CursosImg
                          element={element.btn_center}
                          handleBtn={handleBtnCenter}
                          numero={element.btn_center.type}
                          desafios={element.desafios}
                          proyecto={element.proyecto}
                        />
                      ) : null
                    }
                    commission={element.code}
                    date={element.start_date + " al " + element.end_date}
                    days={element.horario_cursada}
                    icon={
                      element.btn_left != null ? (
                        <CursosImg
                          element={element.btn_left}
                          handleBtn={handleOpenDialog}
                          numero={element.btn_left.type}
                          desafios={element.desafios}
                          proyecto={element.proyecto}
                        />
                      ) : null
                    }
                    messegeIcon={
                      element.btn_left != null ? element.btn_left.text : null
                    }
                    icon2={
                      element.btn_right != null ? (
                        <CursosImg
                          element={element.btn_right}
                          handleBtn={handleOpenDialog}
                          numero={element.btn_right.type}
                          desafios={element.desafios}
                          proyecto={element.proyecto}
                        />
                      ) : null
                    }
                    messegeIcon2={
                      element.btn_right != null ? element.btn_right.text : null
                    }
                    iconTitle={(() => {
                      let iconComponent;

                      if (!element.disabled) {
                        //Si no esta disable, y desafios y proyecto son false, muestro CircleProgress
                        if (!element.desafios || !element.proyecto) {
                          iconComponent = (
                            <CircularWithValueLabel
                              attendance={element.attendance}
                            />
                          );
                        } else {
                          //Si ambos son true, la copa es dorada, si no gris + presentismo
                          !element.desafios && !element.proyecto
                            ? (iconComponent = (
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "5px",
                                    marginRight: "10px",
                                    flexDirection: "row",
                                  }}
                                >
                                  <div style={{ marginRight: "-15px" }}>
                                    <CircularWithValueLabel
                                      attendance={element.attendance}
                                    />
                                  </div>
                                  <div>
                                    <EmojiEventsIcon
                                      sx={{
                                        width: "40px",
                                        height: "40px",
                                        color: yellow[600],
                                      }}
                                    />
                                  </div>
                                </div>
                              ))
                            : (iconComponent = (
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "5px",
                                    marginRight: "10px",
                                    flexDirection: "row",
                                  }}
                                >
                                  <div style={{ marginRight: "-15px" }}>
                                    <CircularWithValueLabel
                                      attendance={element.attendance}
                                    />
                                  </div>
                                  <div>
                                    <EmojiEventsIcon
                                      sx={{
                                        width: "40px",
                                        height: "40px",
                                        color: grey[600],
                                      }}
                                    />
                                  </div>
                                </div>
                              ));
                        }
                      }

                      return iconComponent;
                    })()}
                    classNameMain={
                      element.is_disable || element.disabled
                        ? "backgroundCardNotStartedDisable"
                        : "backgroundCardIACurrentCourses"
                    }
                    classNameSecondary={
                      element.id == 20 ? "imageContainerPI" : "imageContainer"
                    }
                  />
                }
                <CustomizedDialogs
                  open={isCustomizedDialogs}
                  handleClose={handleCloseCustomizedDialogs}
                  text={btnAlertTextDialogs}
                  title={btnAlertTitleDialogs}
                  btn={objChoose}
                />
              </article>
            );
          })}
        </section>
      ) : null}
    </>
  );
}
