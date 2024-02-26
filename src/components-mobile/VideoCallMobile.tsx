import React from 'react';
import style from '../styles/Home.module.css'
import Image from 'next/image';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';

import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
import MicIcon from '@mui/icons-material/Mic';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MicOffIcon from '@mui/icons-material/MicOff';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

export const VideoCallMobile: React.FC<{handleSetMode: (mode: string) => void}>= ({handleSetMode}) => {

    return (
        <div className={style.mainVideoCallMobile}>
            <Paper className={style.navbarVideoCallMobile}>
                <IconButton onClick={() => handleSetMode('video')} style={{width:'25px', height:'25px', backgroundColor: 'rgba(129, 186, 255, 0.3)', borderRadius:'20%', marginRight:'10px', padding:'3px'}}>
                    <ArrowBackIosNewIcon color='primary' style={{fontSize:'14px'}}/>
                </IconButton>
                <div style={{flexGrow:'1'}}>
                    <Typography fontSize='21px' color='primary'>
                        Design Critique
                    </Typography>
                    <div style={{display:'flex'}}>
                        <Image src='/assets/videocall/record.svg' alt='record' width={12} height={12} style={{marginRight:'5px'}} />
                        <Typography fontSize='9px' style={{color:'rgba(191, 191, 191, 1)'}}>
                            REC  00:12:36
                        </Typography>
                    </div>
                </div>                
                <Paper elevation={0} style={{backgroundColor: 'rgba(129, 186, 255, 0.3)', color:'white', display:'flex', alignItems:'center', padding:'0px 5px', width:'66px', height:'25px', justifyContent:'center'}}>
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
                <div className={style.iconMemberVideoCallMobile}><Image src='/assets/videocall/foto2.jpg' alt='foto2' width={94} height={90} className={style.memberPhotoMobile}/><MicOffIcon style={{position:'absolute', left:'70%', top:'60%' , backgroundColor:'red', color:'white', borderRadius:'50%', padding:'2px', fontSize:'130%'}}/></div>
                <div className={style.iconMemberVideoCallMobile}><Image src='/assets/videocall/foto3.jpg' alt='foto3' width={94} height={90} className={style.memberPhotoMobile}/><MicOffIcon style={{position:'absolute', left:'70%', top:'60%' , backgroundColor:'red', color:'white', borderRadius:'50%', padding:'2px', fontSize:'130%'}}/></div>
                <div className={style.iconMemberVideoCallMobile}><Image src='/assets/videocall/foto4.jpg' alt='foto4' width={94} height={90} className={style.memberPhotoMobile}/><GraphicEqIcon style={{position:'absolute', left:'70%', top:'60%' , backgroundColor:'green', color:'white', borderRadius:'50%', padding:'2px', fontSize:'130%'}}/></div>
                <div className={style.iconMemberVideoCallMobile}><Image src='/assets/videocall/foto5.jpg' alt='foto5' width={94} height={90} className={style.memberPhotoMobile}/><MicOffIcon style={{position:'absolute', left:'70%', top:'60%' , backgroundColor:'red', color:'white', borderRadius:'50%', padding:'2px', fontSize:'130%'}}/></div>
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