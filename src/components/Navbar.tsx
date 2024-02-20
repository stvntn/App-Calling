import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import style from '../styles/Home.module.css'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';


export const Navbar: React.FC = () => { 
    return (        
        <AppBar className={style.barApp}>
          <Toolbar>
            <IconButton>
                <ChevronLeftIcon fontSize='large' className={style.buttonNavbar}/>
            </IconButton>
            <h1 className={style.tituloNavbar}>
                Design Critique - Nickelfox Website  
            </h1>
            <div className={style.personCounting}>
                <PeopleAltIcon sx={{width:'17px'}}/>
                <Typography fontSize='13px'>15+</Typography>
            </div>
          </Toolbar>
          <Divider className={style.divi}/>
        </AppBar>
    );
};