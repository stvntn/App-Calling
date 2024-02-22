import React from 'react';
import style from '../styles/Home.module.css'
import Image from 'next/image';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';

import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
import MicIcon from '@mui/icons-material/Mic';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const VideoCallMobile: React.FC<{handleSetMode: (mode: string) => void}>= (handleSetMode) => {

    return (
        <div className={style.mainVideoCallMobile}>
            <Paper className={style.navbarVideoCallMobile}>
                <IconButton style={{backgroundColor:'rgba(74, 87, 103, 1)', color:'white', borderRadius:'20%', width:'25px', height:'25px', marginRight:'10px'}}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <div style={{flexGrow:'1'}}>
                    <Typography fontSize='21px' color='primary'>
                        Design Critique
                    </Typography>
                    <div style={{display:'flex'}}>
                        <Image src='/assets/videocall/record.svg' alt='record' width={12} height={12} style={{marginRight:'5px'}} />
                        <Typography fontSize='9px' color='grey'>
                            REC  00:12:36
                        </Typography>
                    </div>
                </div>                
                <Paper style={{backgroundColor:'rgba(74, 87, 103, 1)', color:'white', display:'flex', boxShadow:'0', alignItems:'center', padding:'0px 5px', width:'66px', height:'25px', justifyContent:'center'}}>
                    <PeopleAltIcon sx={{width:'11px', mr:'5px'}}/>
                    <Typography fontSize='10px'>
                        +15
                    </Typography>
                </Paper>
                <IconButton onClick={() => handleSetMode('chat')}>
                    <ChatIcon color='primary'/>
                </IconButton> 
            </Paper>

            <div className={style.foto1Videocalling}>
                <Image src='/assets/videocall/foto1.jpg' alt='foto1' width={400} height={430} style={{borderRadius:'2%'}}/>
                <Paper className={style.overImage}>
                    <Image src='/assets/videocall/eq.svg' alt='eq' width={40} height={25} style={{marginRight:'10px'}} />
                    <div >
                        <Typography style={{color:'grey', fontSize:'8px'}}>
                            Now
                        </Typography>
                        <Typography style={{color:'white', fontSize:'9px'}}>
                            Thank you everyone for joining the design critique meeting. I want everyone’s opinion so please start !
                        </Typography>
                    </div>
                </Paper>
            </div>
            <div className={style.memberVideoCallMobile}>
                <Image src='/assets/videocall/foto2.jpg' alt='foto2' width={94} height={90} className={style.memberPhotoMobile}/>
                <Image src='/assets/videocall/foto3.jpg' alt='foto3' width={94} height={90} className={style.memberPhotoMobile}/>
                <Image src='/assets/videocall/foto4.jpg' alt='foto4' width={94} height={90} className={style.memberPhotoMobile}/>
                <Image src='/assets/videocall/foto5.jpg' alt='foto5' width={94} height={90} className={style.memberPhotoMobile}/>
            </div>

            <Paper className={style.tableButtonsVideoCallMobile}>
                
                <IconButton className={style.buttonTable}>
                  <VolumeDownIcon />
                </IconButton>

                <IconButton className={style.buttonTable}>
                  <VideocamIcon />
                </IconButton>

                <IconButton className={style.buttonTableCallEnd}>
                  <CallEndIcon />
                </IconButton>

                <IconButton className={style.buttonTable}>
                  <MicIcon />
                </IconButton>

                <IconButton className={style.buttonTable}>
                  <MoreHorizIcon />
                </IconButton>
                
            </Paper>
        </div>
    );
}