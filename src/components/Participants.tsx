import React from 'react';
import Image from 'next/image';
import { List, ListItem, ListItemText } from '@mui/material-next';
import Avatar from '@mui/material/Avatar'

    export const Participants: React.FC = () => {

        const listMember = [
            {
                name: 'Casey',
                lastName: 'Perez',
                image: '/assets/chat/Avatar1.png',
            },
            {
                name: 'John',
                lastName: 'Snow',
                image: '/assets/chat/Avatar2.png',
            },
            {
                name: 'Jack',
                lastName: 'Mcklein',
                image: '/assets/chat/Avatar3.png',
            },
            {
                name: 'Claudia',
                lastName: 'Bottini',
                image: '/assets/videocall/foto5.jpg',
            },
            {
                name: 'China',
                lastName: 'Yaoming',
                image: '/assets/videocall/foto1.jpg',
            },
            {
                name: 'Steven',
                lastName: 'Ramirez',
                image: '/assets/chat/Avatar4.jpg',
            },            
        ]

        return(
            <List>
                { listMember.map((member) => (
                    <ListItem
                        key={member.name}
                    >
                        <Avatar>
                            <Image src= {member.image} alt='{member.name}' width={46} height={46} />
                        </Avatar >
                        <ListItemText 
                            primary={`${member.name} ${member.lastName}`} 
                            style={{
                                marginLeft:'10px',
                                color:'white'
                            }} 
                        />
                    </ListItem>
                ))}  
            </List>          
        );
    }