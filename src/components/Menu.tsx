import React from 'react';
import style from '../styles/Home.module.css'
import { ListItemButton } from "@mui/material";

import Image from 'next/image';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import PollIcon from '@mui/icons-material/Poll';
import EventNoteIcon from '@mui/icons-material/EventNote';
import VideocamIcon from '@mui/icons-material/Videocam';
import HomeIcon from '@mui/icons-material/Home';

export const Menu: React.FC = () => { 
    return (
        <div className={style.menuIconos}>
            <Image src='/assets/menu/Logo.svg' alt='logo' width={50} height={50} className={style.logoMenu} />
            
            <div className='iconBotones'>
                <ListItemButton><NotificationsIcon style={{color:'white'}}/></ListItemButton>
                
                <ListItemButton><PersonIcon style={{color:'white'}}/></ListItemButton>

                <ListItemButton><PollIcon style={{color:'white'}}/></ListItemButton> 

                <ListItemButton><EventNoteIcon style={{color:'white'}}/></ListItemButton>

                <ListItemButton><VideocamIcon style={{color:'white'}}/></ListItemButton>

                <ListItemButton><HomeIcon style={{color:'white'}}/></ListItemButton>
            </div>
{/* HOla */}
            <Image src='/assets/menu/avatar.svg' alt='avatar' width={46} height={46} />
        </div>
    );
};