import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import perfil from '../../assets/perfil.jpg';
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
import classnames from "classnames";
import { useTheme } from '@mui/material/styles';
import CustomSnackbar from "../../utils/SnackBar";
import { red } from '@mui/material/colors';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {


  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function CardNosotros({ data }) {
  const myData = data;

  // const [expanded, setExpanded] = React.useState(false);
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);
  const text = myData.description == "" ? "" : myData.description;
  const truncatedSubheader = text.length > 60 ? `${text.slice(0, 60)}...` : text;

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const handleSnackbarClose = () => {
    setErrorSnackbar(false);
  };


  return (
    <Card sx={{ width: "407.08px", height: "auto", boxShadow: '-8px 8px 26px -7px rgba(0,0,0,0.57)' }}>
      <CustomSnackbar
        open={errorSnackbar}
        onClose={handleSnackbarClose}
        message="El docente no posee link de LinkedIn."
        severity="error"
        duration={3000}
      />
      <CardHeader
        avatar={
          <Avatar
            src={myData.avatar_url != null ? myData.avatar_url : null}
            sx={{ width: 72, height: 72, color: '#008588' }}
            aria-label="recipe"

          >
            {myData.avatar_url ? null : myData.full_name[0]}
          </Avatar>
        }
        title={
          <p style={{ textAlign: "start" }}>{myData.full_name}</p>
        }
        subheader={
          <div style={{ color: "white" }}>
            <h6 style={{ textAlign: "start", marginTop: "-10px" }}>{truncatedSubheader != null ? truncatedSubheader : ""}</h6>
            {truncatedSubheader == "" ? <div style={{ marginTop: "30px" }}><br /> </div> : null}
            <h6 style={{ textAlign: "start", marginTop: "-20px" }}>{myData.country}</h6>
          </div>
        }
      />
      <Divider />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          <div className={styles.divMiddleCard}>
            <div className={styles.divMiddleTitle}>
              <StarIcon />
              <h5 >{myData.cargo}</h5>
            </div>
            {myData.desarrollos != null ? (<div className={styles.divMiddleTitle}>
              <DiamondIcon />
              <h5>{myData.desarrollos != null ? `Desarrollos: ${myData.desarrollos}` : <br />}</h5>
            </div>) : null}

            {myData.destacado != null ? (<div className={styles.divMiddleTitle}>
              <SchoolIcon />
              <h5>{myData.destacado != null ? `${myData.destacado}` : null}</h5>
            </div>) : <br />}
            <div style={myData.destacado != null || myData.desarrollos != null ? { marginTop: "30px" } : { marginTop: "60px" }}>
              <TextRating valoracion={myData.valoracion} />
            </div>
          </div>
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <section className={styles.customChip}>
          <Stack direction="row" >
            <Chip className={styles.colorIcons}
              icon={<AccountBoxIcon />}
              label="Ver perfil completo"
              href="#basic-chip"
              variant="outlined"
              onClick={() => {
                { myData.linkedin != null ? window.open(`${myData.linkedin}`, "_blank") : setErrorSnackbar(!errorSnackbar) }
              }}
              clickable
            />
            <Chip className={classnames(styles.colorIcons)}
              style={{ background: "rgb(18,107,196)", marginLeft: "35px" }}
              icon={<LinkedInIcon />}
              label="Ver LinkedIn"
              href="#basic-chip"
              variant="outlined"
              onClick={() => {
                { myData.linkedin != null ? window.open(`${myData.linkedin}`, "_blank") : setErrorSnackbar(!errorSnackbar) }
              }}
              clickable
            />
          </Stack>
          {/* <div className={styles.customExpand}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ color: "white", border: "1px solid white", borderRadius: "50%" }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </div> */}
        </section>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent >
          <Typography paragraph>Sobre mi:</Typography>
          <Typography paragraph>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}