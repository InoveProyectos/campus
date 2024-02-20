import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WarningIcon from "@mui/icons-material/Warning";
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';

const inoveYellow = '#FAF74D';
const inoveGreen = '#C4F071';
const inoveRed = '#EE146D';


const CuotasIconTitle = ({ numero }) => {
  const renderContent = () => {
    switch (numero) {
      case 0:
        return (
          <MoneyOffCsredIcon
            style={{
              color: "black",
              fontSize: "50px",
              marginRight: "20px",
            }}
          />
        );
      case 1:
        return (
          <AccessTimeFilledIcon
            style={{
              color: inoveGreen,
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      case 2:
        return (
          <CheckCircleOutlineIcon
            style={{
              color: inoveGreen,
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      case 3:
        return (
          <WarningIcon
            style={{
              color: inoveYellow,
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      case 4:
        return (
          <WarningIcon
            style={{
              color: inoveRed,
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      case 5:
        return (
          <CancelIcon
            style={{
              color: inoveRed,
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      default:
        return null;
    }
  };

  return renderContent();
};

export default CuotasIconTitle;
