import React, { useState, useRef, useEffect } from 'react';
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
    
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState<{ texto: string; autor: string; hora: string; }[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {          
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}`;    
            setMessages([...messages, { texto: inputText, autor: 'You', hora: timeString }]); 
            setInputText('');
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleInsertImage = () => {
        console.log('Insertar imagen');
    };
    

    return (  
        <div className={style.classChat}>
            {/* chat1 */}     
            <List className={style.classForList}> 
                <div style={{display:'flex'}}>
                    <Avatar sx={{marginRight:'10px', marginTop:'10px'}}>
                        <Image src='/assets/chat/Avatar1.png' alt='avatar1' width={46} height={46} />
                    </Avatar>
                    <Box>
                        <ListItemText primary='Caesy' style={{color:'white'}}/>           
                        <Paper style={{backgroundColor:'rgba(74, 87, 103, 1)', borderRadius:'0px 6px 6px 6px'}}>
                            <ListItem sx={{display:'flex', justifyContent:'space-between'}}>                                
                                <Typography style={{color:'white', fontSize:'12px'}}>                            
                                    Hello Guys! Whats your opinion?                                
                                </Typography>
                                <Typography style={{color:'rgba(191, 191, 191, 1)', fontSize:'8px', marginLeft:'5px'}}>
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
                                <Typography style={{color:'white', fontSize:'12px'}}>                            
                                    Images are better.                              
                                </Typography>
                                <Typography style={{color:'rgba(191, 191, 191, 1)', fontSize:'8px', marginLeft:'5px'}}>
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
                                <Typography style={{color:'white', fontSize:'12px'}}>                            
                                    Yes, It will decrease the loading 👍                             
                                </Typography>
                                <Typography style={{color:'rgba(191, 191, 191, 1)', fontSize:'8px', marginLeft:'5px'}}>
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
                                <Typography style={{color:'white', fontSize:'12px'}}>                            
                                    Anyone is up for illustrations. I think there are less relatable images according to our brand.                                
                                </Typography>
                                <Typography style={{color:'rgba(191, 191, 191, 1)', fontSize:'8px', marginLeft:'5px'}}>
                                    12:05 pm
                                </Typography>
                            </ListItem>
                        </Paper>
                    </Box>
                </div>
    
                {/* Chat5 */}
                <div style={{display:'flex', marginTop:'10px', justifyContent:'end'}}>                    
                    <Box>
                        <ListItemText primary='You' style={{color:'white', display:'flex', justifyContent:'end'}}/>           
                        <Paper style={{backgroundColor:'rgba(74, 87, 103, 1)', borderRadius:'6px 0px 6px 6px'}}>
                            <ListItem sx={{display:'flex', justifyContent:'space-between'}}>                                
                                <Typography style={{color:'white', fontSize:'12px'}}>                            
                                Any website for stock images?                             
                                </Typography>
                                <Typography style={{color:'rgba(191, 191, 191, 1)', fontSize:'8px', marginLeft:'5px'}}>
                                    12:04 pm
                                </Typography>
                            </ListItem>
                        </Paper>
                    </Box>
                </div> 
    
                
                    {messages.map((message, index) => (
                        <div key={index} style={{display:'flex', marginTop:'10px', justifyContent: message.autor === 'You' ? 'end' : 'start'}}>
                            {message.autor !== 'You'}
                            <Box>
                                <ListItemText primary={message.autor} style={{color:'white', display:'flex', justifyContent:'end'}}/>
                                <Paper style={{backgroundColor:'rgba(74,  87,  103,  1)', borderRadius:'6px  0px  6px  6px'}}>
                                    <ListItem sx={{display:'flex', justifyContent:'space-between'}}>                                
                                        <Typography style={{color:'white', fontSize:'12px' }}>
                                            {message.texto}
                                        </Typography>
                                        <Typography style={{color:'rgba(191, 191, 191, 1)', fontSize:'8px', marginLeft:'5px'}}>
                                            {message.hora}
                                        </Typography>
                                    </ListItem>
                                </Paper>
                            </Box>
                        </div>
                    ))}
    
                {inputText && (
                    <Box display='flex' marginTop='20px' sx={{alignItems:'center'}}>
                        <Image src='/assets/chat/load.svg' alt='load' width={40} height={40} />
                        <Typography style={{fontSize:'10px', color:'grey'}}>                
                            John is typing..
                        </Typography>
                    </Box> 
                )}
                <div ref={messagesEndRef} />
            </List>
    
           
            
            
    
            <Paper style={{backgroundColor:'rgba(129, 186, 255, 0.5)', display:'flex', alignItems:'center'}}>
                <IconButton onClick={handleInsertImage}>
                    <InsertPhotoIcon style={{color:'white'}}/>
                </IconButton>
            <Divider color="white" sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <FormControl sx={{flexGrow:'1', ml:'5px'}}>                    
            <InputBase
                placeholder='Write message here'
                value={inputText}
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown}                    
                style={{color:'white', fontSize:'12px'}}
            />                
            </FormControl>
            <IconButton onClick={handleSendMessage}>
                <SendIcon fontSize='large' style={{backgroundColor:'white', borderRadius:'6px', padding:'8px'}}/>
            </IconButton>
        </Paper>

        
    </div>
    );
}