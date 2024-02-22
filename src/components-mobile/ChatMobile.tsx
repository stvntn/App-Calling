import React from 'react';
import style from '../styles/Home.module.css'
import Image from 'next/image';
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SendIcon from '@mui/icons-material/Send';

export const ChatMobile: React.FC = () => {

    return (

        <div className={style.classChat}>
            {/* chat1 */}
            <List> 
            <div style={{display:'flex'}}>
                <Avatar sx={{marginRight:'10px', marginTop:'10px'}}>
                    <Image src='/assets/chat/Avatar1.png' alt='avatar1' width={46} height={46} />
                </Avatar>
                <Box>
                    <ListItemText primary='Caesy' style={{color:'white'}}/>           
                    <Paper style={{backgroundColor:'rgba(74, 87, 103, 1)', borderRadius:'0px 6px 6px 6px'}}>
                        <ListItem sx={{display:'flex', justifyContent:'space-between'}}>                                
                            <Typography fontSize='12px' style={{color:'white'}}>                            
                                Hello Guys! Whats your opinion?                                
                            </Typography>
                            <Typography fontSize='8px' marginLeft='5px' color='grey'>
                                    12:02 pm
                            </Typography>
                        </ListItem>
                    </Paper>
                </Box>
            </div>
            {/* chat2 */}
            <div style={{display:'flex', marginTop:'10px'}}>
                <Avatar sx={{marginRight:'10px', marginTop:'10px'}}>
                    <Image src='/assets/chat/Avatar2.png' alt='avatar2' width={46} height={46} />
                </Avatar>
                <Box>
                    <ListItemText primary='John' style={{color:'white'}}/>           
                    <Paper style={{backgroundColor:'rgba(74, 87, 103, 1)', borderRadius:'0px 6px 6px 6px'}}>
                        <ListItem sx={{display:'flex', justifyContent:'space-between'}}>                                
                            <Typography fontSize='12px' style={{color:'white'}}>                            
                                Images are better.                              
                            </Typography>
                            <Typography fontSize='8px' marginLeft='5px' color='grey'>
                                12:03 pm
                            </Typography>
                        </ListItem>
                    </Paper>
                </Box>
            </div> 
            {/* chat3 */}
            <div style={{display:'flex', marginTop:'10px', justifyContent:'end'}}>                    
                <Box>
                    <ListItemText primary='You' style={{color:'white', display:'flex', justifyContent:'end'}}/>           
                    <Paper style={{backgroundColor:'rgba(74, 87, 103, 1)', borderRadius:'6px 0px 6px 6px'}}>
                        <ListItem sx={{display:'flex', justifyContent:'space-between'}}>                                
                            <Typography fontSize='12px' style={{color:'white'}}>                            
                                Yes, It will decrease the loading 👍                             
                            </Typography>
                            <Typography fontSize='8px' marginLeft='5px' color='grey'>
                                12:04 pm
                            </Typography>
                        </ListItem>
                    </Paper>
                </Box>
            </div> 
            {/* chat4 */}
            <div style={{display:'flex', marginTop:'10px'}}>
                <Avatar sx={{marginRight:'10px', marginTop:'10px'}}>
                    <Image src='/assets/chat/Avatar3.png' alt='avatar3' width={46} height={46} />
                </Avatar>
                <Box>
                    <ListItemText primary='Jack' style={{color:'white'}}/>           
                    <Paper style={{backgroundColor:'rgba(74, 87, 103, 1)', borderRadius:'0px 6px 6px 6px'}}>
                        <ListItem sx={{display:'flex', justifyContent:'space-between'}}>                                
                            <Typography fontSize='12px' style={{color:'white'}}>                            
                                Anyone is up for illustrations. I think there are less relatable images according to our brand.                                
                            </Typography>
                            <Typography fontSize='8px' marginLeft='5px' color='grey'>
                                12:05 pm
                            </Typography>
                        </ListItem>
                    </Paper>
                </Box>
            </div>                 
        </List>

        {/* Chat5 */}
        <div style={{display:'flex', marginTop:'10px', justifyContent:'end'}}>                    
                <Box>
                    <ListItemText primary='You' style={{color:'white', display:'flex', justifyContent:'end'}}/>           
                    <Paper style={{backgroundColor:'rgba(74, 87, 103, 1)', borderRadius:'6px 0px 6px 6px'}}>
                        <ListItem sx={{display:'flex', justifyContent:'space-between'}}>                                
                            <Typography fontSize='12px' style={{color:'white'}}>                            
                            Any website for stock images?                             
                            </Typography>
                            <Typography fontSize='8px' marginLeft='5px' color='grey'>
                                12:04 pm
                            </Typography>
                        </ListItem>
                    </Paper>
                </Box>
            </div> 
        
        <Box display='flex' marginTop='20px' sx={{alignItems:'center'}}>
            <Image src='/assets/chat/load.svg' alt='load' width={40} height={40} />
            <Typography fontSize='10px' color='grey'>                
                John is typing..
            </Typography>
        </Box>

        <Paper style={{backgroundColor:'rgba(53, 70, 87, 1)', display:'flex', alignItems:'center'}}>
            <IconButton>
                <InsertPhotoIcon style={{color:'white'}}/>
            </IconButton>
            <Divider color="white" sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <FormControl sx={{flexGrow:'1', ml:'5px'}}>                    
            <InputBase
                placeholder='Write message here'                    
                style={{color:'white', fontSize:'12px'}}
            />                
            </FormControl>
            <IconButton >
                <SendIcon fontSize='large' style={{backgroundColor:'white', borderRadius:'6px', padding:'8px'}}/>
            </IconButton>
        </Paper>

        
    </div>
    );
}