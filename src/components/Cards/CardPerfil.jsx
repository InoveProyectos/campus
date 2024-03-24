import React from 'react'
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import TextRating from '../../utils/Rating';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import styles from "./CardNosotros.module.css";
import { useNavigate } from "react-router-dom";

function CardPerfil({ data }) {

  const { username } = useParams();

  const myData = data;

  // const text = myData.description == "" ? "" : myData.description; 
  const text = username == "" ? "" : username;
  const truncatedSubheader = text.length > 60 ? `${text.slice(0, 60)}...` : text;
  const navigate = useNavigate();

  return (
    <Card sx={{ width: "407.08px", height: "auto", boxShadow: '-8px 8px 26px -7px rgba(0,0,0,0.57)' }}>
      <CardHeader
        avatar={
          <Avatar
            // src={myData.avatar_url != null ? myData.avatar_url : null}
            sx={{ width: 72, height: 72, color: '#008588' }}
            aria-label="recipe"

          >
            {username[0]}
          </Avatar>
        }
        title={
          <p style={{ textAlign: "start" }}>Test</p>
        }
        subheader={
          <div style={{ color: "white" }}>
            <h6 style={{ textAlign: "start", marginTop: "-10px" }}>{truncatedSubheader != null ? truncatedSubheader : ""}</h6>
            {truncatedSubheader == "" ? <div style={{ marginTop: "30px" }}><br /> </div> : null}
            <h6 style={{ textAlign: "start", marginTop: "-20px" }}>username</h6>
          </div>
        }
      />
      <Divider />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          <div className={styles.divMiddleCard}>
            <div className={styles.divMiddleTitle}>
              <StarIcon />
              <h5 >username</h5>
            </div>
            {/* {myData.desarrollos != null ? (<div className={styles.divMiddleTitle}>
              <DiamondIcon />
              <h5>{myData.desarrollos != null ? `${myData.desarrollos}` : <br />}</h5>
            </div>) : null} */}

            {/* {myData.destacado != null ? (<div className={styles.divMiddleTitle}>
              <SchoolIcon />
              <h5>{myData.destacado != null ? `${myData.destacado}` : null}</h5>
            </div>) : <br />}
            {myData.valoracion != null ? (<div style={myData.destacado != null && myData.desarrollos != null ? { marginTop: "30px" } : { marginTop: "60px" }}>
              <TextRating valoracion={myData.valoracion} />
            </div>) : null} */}
          </div>
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <section  style={username == null ? { marginLeft: "25px" } : {}} className={styles.customChip}>
          <Stack direction="row" >
            <Chip className={styles.colorIcons}
              icon={<AccountBoxIcon />}
              label="Ver perfil completo"
              href="#basic-chip"
              variant="outlined"
              onClick={() => {
                navigate(`/perfil/${data.username}`)
              }}
              clickable
            />
            {username != null ? (<Chip
              style={{ background: "rgb(18,107,196)", marginLeft: "35px" }}
              icon={<LinkedInIcon />}
              label="Ver LinkedIn"
              href="#basic-chip"
              variant="outlined"
              // onClick={() => {
              //   window.open(`${myData.linkedin}`, "_blank")
              // }}
              clickable
            />) : null}
          </Stack>
        </section>
      </CardActions>
    </Card>
  )
}

export default CardPerfil