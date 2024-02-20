import React from 'react';
import style from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'

import Image from 'next/image';

import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton'

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SendIcon from '@mui/icons-material/Send';

export const Chat: React.FC = () => {
    
    const [value, setValue] = React.useState<number>();    

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
      };

      
    return (
        <div className={style.firstSectionChat}>
            <div className={style.headButtons}>
                <Button className={style.firstHeadButton}>
                    Messages (4)
                </Button>
                <Button className={style.secondHeadButton}>
                    Participants
                </Button>                
            </div>
            <Divider sx={{margin:'20px 0px', color:'white'}} />
            <div className={style.secondSectionChat}>
                <Typography color='primary' fontSize='16px' mb='10px'>
                    Use of Graphics
                </Typography>
                <Divider sx={{mb:'10px', width:'100%', bgcolor:'rgba(255, 255, 255, 0.5)'}}/>
                <div>
                    <Slider size="small" aria-label="Volume" value={value} onChange={handleChange} defaultValue={25} className={style.MuiSliderThumb}/>
                    <Typography color='rgba(255, 255, 255, 0.5)' fontSize='12px'>Illustrations</Typography>
                </div>
                <div className={style.secondSliderChat}>
                    <Slider size="small" aria-label="Volume" value={value} onChange={handleChange}  defaultValue={75}/>
                    <Typography color='rgba(255, 255, 255, 0.5)' fontSize='12px'>Images</Typography>
                </div>
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
                <Divider sx={{mt:'30px', border:'none'}}>
                    <Typography color='primary' fontSize='12px'>
                        Messages
                    </Typography>
                </Divider>
            </div>
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
                    style={{color:'white', fontSize:'14px'}}
                   />                
                </FormControl>
                <IconButton >
                    <SendIcon fontSize='large' style={{backgroundColor:'white', borderRadius:'6px', padding:'8px'}}/>
                </IconButton>
            </Paper>
        </div>
    );
};