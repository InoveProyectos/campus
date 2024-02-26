import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
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
export default function CardNosotros() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const text = "Python | React - Javascript | HTML | CSS - Boostrap | Mysql | Postman | SoapUI"
  const truncatedSubheader = text.length > 60 ? `${text.slice(0, 60)}...` : text;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar src={perfil} sx={{ width: 72, height: 72 }} aria-label="recipe">
            R
          </Avatar>
        }
        title={
          <p style={{ textAlign: "start" }}>Fernando Daniel Valls</p>
        }
        subheader={
          <div style={{ color: "white" }}>
            <h6 style={{ textAlign: "start", marginTop: "-10px" }}>{truncatedSubheader}</h6>
            <h6 style={{ textAlign: "start", marginTop: "-20px" }}>Buenos Aires</h6>
          </div>
        }
      />
      <Divider />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          <div className={styles.divMiddleCard}>
            <div className={styles.divNiddleTitle}>
              <StarIcon />
              <h5 >Tutor de Frontend</h5>
            </div>
            <div className={styles.divNiddleTitle}>
              <DiamondIcon />
              <h5>Desarrollos: Campus (Frontend)</h5>
            </div>
            <div className={styles.divNiddleTitle}>
              <SchoolIcon />
              <h5>Cuadro de honor Fontend y Backend</h5>
            </div>
            <br />
            <TextRating />
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
                console.log("Ver perfil completo");
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
                console.log("Ver LinkedIn");
              }}
              clickable
            />
          </Stack>
          <div className={styles.customExpand}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ color: "white", border: "1px solid white", borderRadius: "50%" }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </div>
        </section>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent >
          <Typography paragraph>Sobre mi:</Typography>
          <Typography paragraph>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}