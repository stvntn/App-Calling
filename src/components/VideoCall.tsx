import React from 'react';
import style from '../styles/Home.module.css'
import Image from 'next/image';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'


import AddIcon from '@mui/icons-material/Add';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SettingsIcon from '@mui/icons-material/Settings';

export const VideoCall: React.FC = () => { 
    return (
        <div className={style.configVideocall}>
            <div className={style.headerButton}>
                <div className={style.headerButton1}>
                    <Image src='/assets/videocall/record.svg' alt='record' width={16} height={16} />
                    <Typography style={{color:'white', fontSize:'12px', marginLeft:'5px'}}>REC  00:12:36</Typography>
                </div>
                <div className={style.headerButton2}>
                    <IconButton>
                        <AddIcon style={{color:'white', backgroundColor:'rgba(64, 89, 115, 1)', borderRadius:'5px'}}/>
                    </IconButton>
                    <Typography style={{color:'black', fontSize:'10px', marginTop:'12px'}}>Add user to the call</Typography>
                </div>
            </div>

            <div className={style.prueba1}>
                <div>
                    <Image src='/assets/videocall/foto1.jpg' alt='foto1' width={831} height={681} className={style.photo1}/>
                    <div className={style.buttonPhoto1}>
                        <IconButton className={style.buttonVideocall}>
                            <UnarchiveIcon fontSize='small' style={{color:'white'}}/>
                        </IconButton>
                        <IconButton className={style.buttonVideocall}>
                            <VideocamIcon fontSize='small' style={{color:'white'}}/>
                        </IconButton> 
                        <IconButton style={{backgroundColor:'red', borderRadius:'5px'}}>
                            <CallEndIcon fontSize='large' style={{color:'white'}} />
                        </IconButton> 
                        <IconButton className={style.buttonVideocall}>
                            <KeyboardVoiceIcon fontSize='small' style={{color:'white'}}/>
                        </IconButton> 
                        <IconButton className={style.buttonVideocall}>
                            <SettingsIcon fontSize='small' style={{color:'white'}}/>
                        </IconButton>
                    </div>    
                </div>
                <div className={style.memberVideocall}>
                    <Image src='/assets/videocall/foto2.jpg' alt='foto2' width={50} height={50} className={style.memberPhoto}/>
                    <Image src='/assets/videocall/foto3.jpg' alt='foto3' width={50} height={50} className={style.memberPhoto}/>
                    <Image src='/assets/videocall/foto4.jpg' alt='foto4' width={50} height={50} className={style.memberPhoto}/>
                    <Image src='/assets/videocall/foto5.jpg' alt='foto5' width={50} height={50} className={style.memberPhoto}/>
                </div>
            </div>
            <div className={style.footVideocall}>
                <Image src='/assets/videocall/eq.svg' alt='eq' width={30} height={25} />
                <div className={style.footerWritten}>
                    <Typography style={{color:'grey', fontSize:'8px'}}>
                        Now
                    </Typography>
                    <Typography style={{color:'white', fontSize:'10px'}}>
                        Thank you everyone for joining the design critique meeting. I want everyone’s opinion so please start !
                    </Typography>
                </div>
            </div>
        </div>
    );
};