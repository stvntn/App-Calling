import type { NextPage } from 'next'
import React from 'react';
import style from '../styles/Home.module.css'
import {Navbar} from '../components/Navbar'
import { Menu } from '@/components/Menu';
import { VideoCall } from '@/components/VideoCall'
import { Chat } from '@/components/Chat'

const Home: NextPage = () => { 
    return ( 
        <main className='mainBackground'>
            <Navbar />
            <div style={{display:'flex'}}>
                <Menu />
                <VideoCall />
                <Chat />
            </div>          
        </main>
    );
};

export default Home;