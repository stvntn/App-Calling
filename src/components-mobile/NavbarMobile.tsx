import React from 'react';
import style from '../styles/Home.module.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import Button from '@mui/material/Button';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneIcon from '@mui/icons-material/Phone';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const NavbarMobile: React.FC<{handleSetMode: (mode: string) => void}>= (handleSetMode) => {

    return (
        <AppBar className={style.classNavbar}>
          <Toolbar className={style.classToolbar}>
            <div className={style.headToolbar}>
                <IconButton onClick={() => handleSetMode('video')} style={{width:'25px', height:'25px', backgroundColor:'rgba(107, 124, 146, 1)', borderRadius:'20%'}}>
                    <ArrowBackIosNewIcon fontSize='small' color='primary' />
                </IconButton>
                <Typography className={style.tittleNavbar}>
                    Design Critique
                </Typography>
                <IconButton>
                    <VideocamIcon fontSize='small' color='primary' />
                </IconButton>
                <IconButton>
                    <PhoneIcon fontSize='small' color='primary' />
                </IconButton>
                <IconButton>
                    <MoreVertIcon fontSize='small' color='primary' />
                </IconButton>
            </div>
            <div className={style.groupButtonHead}>                
                <Button>Chat</Button>
                <Button>File</Button>
                <Button>Pole</Button>                
            </div>
          </Toolbar>
        </AppBar>
    );
}