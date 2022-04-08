import React from 'react';
import styles from './Header.module.css'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Divider, Drawer, List, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {HashLink as Link} from 'react-router-hash-link';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(0),
//   Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 50,
  },
}));

const Header = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    menuIconBreak:{
      [theme.breakpoints.up('sm')]: {
        display:"none !important"
      },
    },
    navsLinkDesktop: {
      [theme.breakpoints.down('md')]: {
        display:"none !important"
      },
    },
    drawerBackground:{
      // backgroundColor:'#0a192f4d !important'
      background:'rgb(17, 34, 64)'
    },
    drawerFirstBackground:{
      // backgroundColor:'#0a192f4d !important'
     backdropFilter:'blur(5px)'
    }
  });
  const {menuIconBreak, navsLinkDesktop, drawerBackground, drawerFirstBackground} = useStyles();


  const resumeDownloadLink = () =>{
    window.location.replace('https://drive.google.com/u/0/uc?id=1Ktl1sVeRSU6pg90K5yAPRlFfpAZ_lf8o&export=download')
  }



  // Drawer
  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    className={drawerBackground}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280, height:1  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton
      style={{color:'orange',position:'absolute', right:'1.5rem', top:'1.5rem', backgroundColor:'green'}}
      >
      <CloseIcon/>
      </IconButton>
      <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1 }}
          style={{marginLeft:'1.5rem', marginTop:'1.5rem'}}
      >
          <img style={{width:'4rem'}} src='https://i.ibb.co/GMdTvFZ/logo-2.png' alt=''/>
      </Typography>
        <List className={styles.responsiveNavs}>
              <Link className={`${styles.texts1} ${styles.home}`} smooth to="#home">Home</Link>  
              <Link className={`${styles.texts1} ${styles.aboutMe}`} smooth to="#about-me">About Me</Link>  
              <Link className={`${styles.texts1} ${styles.skills}`} smooth to="#skills">Skills</Link>  
              <Link className={`${styles.texts1} ${styles.projects}`} smooth to="#projects">Projects</Link>  
              <Link className={`${styles.texts1} ${styles.blogs}`} smooth to="#blogs">Blogs</Link>  
              <Link className={`${styles.texts1} ${styles.contacts}`} smooth to="#contacts">Contacts</Link> 
        {/* <IconButton> */}
        <Button style={{marginRight: '5rem'}} onClick={resumeDownloadLink} className={`${styles.navsResumeButton}`}>Resume</Button>
        {/* </IconButton> */}
        </List>
    </Box>
  );


    return (
        <div>
            <Box sx={{ flexGrow: 1}}>
              <AppBar className={styles.appBar} position="static">
                <StyledToolbar>
                  <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    <img style={{width:'4rem'}} src='https://i.ibb.co/GMdTvFZ/logo-2.png' alt='' />
                  </Typography>

                  <Box className={navsLinkDesktop} style={{marginTop:'1.2rem'}}>
                      <Link  className={`${styles.texts} ${styles.home}`} smooth to="#home">Home</Link>  
                      <Link  className={`${styles.texts} ${styles.aboutMe}`} smooth to="#about-me">About Me</Link>  
                      <Link  className={`${styles.texts} ${styles.skills}`} smooth to="#skills">Skills</Link>  
                      <Link  className={`${styles.texts} ${styles.projects}`} smooth to="#projects">Projects</Link>  
                      <Link  className={`${styles.texts} ${styles.blogs}`} smooth to="#blogs">Blogs</Link>  
                      <Link  className={`${styles.texts} ${styles.contacts}`} smooth to="#contacts">Contacts</Link>  
                  </Box>

                  <IconButton
                    size="large"
                    aria-label="display more actions"
                    edge="end"
                    color="inherit"
                    className={menuIconBreak}
                    onClick={toggleDrawer('right', true)}
                  >
                    <i style={{width:'5rem'}} class="fas fa-bars"></i>
                    <MenuIcon/>
                  </IconButton>
                  <Button onClick={resumeDownloadLink} className={`${navsLinkDesktop} ${styles.navsResumeButton}`}>Resume</Button>
                </StyledToolbar>
              </AppBar>
            </Box>
            <div>
      
        <React.Fragment>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            className={drawerFirstBackground}
            
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      
        </div>
      </div>
    );
};

export default Header;


