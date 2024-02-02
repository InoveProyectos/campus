import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import certificate from "../assets/certificado.png";
import escudoIA2 from "../assets/escudoIA2.png";
import escudoWBE from "../assets/escudoWBE.png";
import escudoIOT from "../assets/escudoIOT.png";
import pythonInicial from "../assets/PythonInicial.png";
import escudoDW from "../assets/html_logo.png";
import escudoJS from "../assets/javascript.png";
import escudoReact from "../assets/react_logo.png";
import programadorPython from "../assets/ProgramadorPython.png";
import HelpIcon from "@mui/icons-material/Help";

const CursosImg = ({ element, handleBtn, numero, desafios, proyecto }) => {
  const renderContent = () => {
    switch (numero) {
      case 11:
        return (
          <img
            src={certificate}
            alt="photo"
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              fontSize: "50px",
              filter: proyecto && desafios ? "none" : "grayscale(100%)",
            }}
          />
        );
      case 14:
        return (
          <HelpIcon
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              fontSize: "50px",
            }}
          />
        );
      case 13:
        return (
          <DoNotTouchIcon
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              fontSize: "50px",
            }}
          />
        );
      case 9:
        return (
          <AccountBalanceIcon
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              fontSize: "50px",
            }}
          />
        );
      case 10:
        return (
          <PlayCircleIcon
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              fontSize: "50px",
            }}
          />
        );
      case 2:
        return (
          <img
            src={programadorPython}
            alt="Escudo curso"
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              width: "100px",
            }}
          />
        );
      case 3:
        return (
          <img
            src={escudoWBE}
            alt="Escudo curso"
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              width: "100px",
            }}
          />
        );
      case 4:
          return (
            <img
              src={escudoIA2}
              alt="Escudo curso"
              onClick={() =>
                element.open_dialog
                  ? handleBtn(
                    element.text_dialog,
                    element.title_dialog,
                    element.btn
                  )
                  : window.open(element.url, "_blank")
              }
              style={{
                width: "100px",
              }}
            />
          );
      case 5:
            return (
              <img
                src={escudoIOT}
                alt="Escudo curso"
                onClick={() =>
                  element.open_dialog
                    ? handleBtn(
                      element.text_dialog,
                      element.title_dialog,
                      element.btn
                    )
                    : window.open(element.url, "_blank")
                }
                style={{
                  width: "100px",
                }}
              />
            );
      case 6:
        return (
          <img
            src={escudoDW}
            alt="Escudo curso"
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              width: "100px",
            }}
          />
        );
      case 1:
        return (
          <img
            src={pythonInicial}
            alt="Escudo curso"
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              width: "100px",
            }}
          />
        );
      case 7:
        return (
          <img
            src={escudoJS}
            alt="Escudo curso"
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              width: "100px",
            }}
          />
        );
      case 8:
        return (
          <img
            src={escudoReact}
            alt="Escudo curso"
            onClick={() =>
              element.open_dialog
                ? handleBtn(
                  element.text_dialog,
                  element.title_dialog,
                  element.btn
                )
                : window.open(element.url, "_blank")
            }
            style={{
              width: "100px",
            }}
          />
        );
      default:
        return null;
    }
  };

  return renderContent();
};

export default CursosImg;
