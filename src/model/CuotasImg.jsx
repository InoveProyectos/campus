import React from "react";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import certificate from "../assets/certificado.png";
import escudoIA2 from "../assets/escudoIA2.png";
import escudoWBE from "../assets/escudoWBE.png";
import pythonInicial from "../assets/PythonInicial.png";
import programadorPython from "../assets/ProgramadorPython.png";
import HelpIcon from "@mui/icons-material/Help";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WarningIcon from "@mui/icons-material/Warning";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ClearIcon from "@mui/icons-material/Clear";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const CursosImg = ({ element, handleBtn, numero }) => {
  const renderContent = () => {
    switch (numero) {
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
      case 16:
        return (
          <LocalAtmIcon
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
      case 17:
        return (
          <ReceiptLongIcon
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
      default:
        return null;
    }
  };

  return renderContent();
};

export default CursosImg;
