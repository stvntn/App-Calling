import type { NextPage } from 'next'
import React from 'react';
import style from '../styles/Home.module.css'
import { Menu } from '@/components/Menu';
import { VideoCall } from '@/components/VideoCall'
import { Chat } from '@/components/Chat'

const Home: NextPage = () => { 
    return ( 
        <main className='mainBackground'>
            <div className={style.mainAppContainer}>
                <Menu />
                <VideoCall />
                <Chat />
            </div>          
        </main>
    );
};

export default Home;