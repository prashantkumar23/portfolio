import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,   
    marginTop: '50px',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  businessPaper: {
    width: '100%',
    height: '100%',
    background: '#F9858B',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  square: {
    width: '100%',
    height: '100%',
    paddingBottom: '25px',
    paddingTop: '25px'
  },
  typographyName: {
    display: 'flex',
    justifyContent: 'center',
    color: '#ffffff'
  },
  borderLine: {
    border: '2px solid #7F8C8D ',
  },
  IconContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center" justify="center" spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.businessPaper} variant="outlined" >
            <Avatar variant="square" className={classes.square} src={require('../../assets/contact.svg')} />
            <Divider />
            <br />
            <Typography variant="h4" className={classes.typographyName}>
              PRASHANT KUMAR
             </Typography>
            <Typography variant="h5" className={classes.typographyName}>
              FULL STACK DEVELOPER
             </Typography>
            <br />
            <Divider />


            <div  className={classes.IconContainer} >
              <IconButton href="https://www.linkedin.com/in/prashantkumar23" target="_blank">
                <LinkedInIcon fontSize="large" style={{ color: 'white' }} />
              </IconButton>

              <IconButton href="mailto:prashantdrew23@gmail.com" target="_blank">
                <EmailIcon fontSize="large" style={{ color: 'white' }} />
              </IconButton>

              <IconButton href="https://www.instagram.com/prashantjdreww" target="_blank">
                <InstagramIcon fontSize="large" style={{ color: 'white' }} />
              </IconButton>

              <IconButton href="https://api.whatsapp.com/send?phone=+919452108399?text=I'm%20interested%20in%20your%20projects%20for%20work" target="_blank">
                <WhatsAppIcon fontSize="large" style={{ color: 'white' }} />
              </IconButton>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
