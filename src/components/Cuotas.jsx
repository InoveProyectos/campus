import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CardCuotas from "../components/Cards/CardCuotas.jsx";
import Divider from "@mui/material/Divider";
import CustomizedDialogs from "../utils/AlerDialogCustomization.jsx";
import CircularColor from "../utils/CircularProgress.jsx";
import CuotasImg from "../model/CuotasImg.jsx";

export default function Cuotas() {
  const [data, setData] = useState({});
  const [btnAlertTextDialogs, setBtnAlertTextDialogs] = useState("");
  const [btnAlertTitleDialogs, setBtnAlertTitleDialogs] = useState("");
  const [objChoose, setObjChoose] = useState([]);
  const [isCustomizedDialogs, setIsCustomizedDialogs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCuotas() {
      try {
        const response = await axios.get(
          "https://admin.inovecode.com/api/perfil/cuotas/"
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

    getCuotas();
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
        MIS CUOTAS
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
          {data.map((element, index) => {
            return (
              <article
                key={index}
                style={{ display: "flex", marginLeft: "20px" }}
              >
                {
                  <CardCuotas
                    key={element.id}
                    title={element.name}
                    numero={element.status}
                    imageUrl={
                      element.btn_center != null ? (
                        <CuotasImg
                          element={element.btn_center}
                          handleBtn={handleBtnCenter}
                          numero={element.btn_center.type}
                        />
                      ) : null
                    }
                    icon={
                      element.btn_left != null ? (
                        <CuotasImg
                          element={element.btn_left}
                          handleBtn={handleOpenDialog}
                          numero={element.btn_left.type}
                        />
                      ) : null
                    }
                    messegeIcon={
                      element.btn_left != null ? element.btn_left.text : null
                    }
                    status_text={element.status_text}
                    status_color={element.status_color}
                    cuota={element.cuota}
                    amount={element.amount}
                    date={element.expiration}
                    status={element.status}
                    classNameMain={"backgroundCardCuotas"}
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
