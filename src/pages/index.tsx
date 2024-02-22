import type { NextPage } from 'next'
import React, { useState } from 'react';
import style from '../styles/Home.module.css'
import { Menu } from '@/components/Menu';
import { VideoCall } from '@/components/VideoCall'
import { Chat } from '@/components/Chat'
import { NavbarMobile } from '@/components-mobile/NavbarMobile'
import { ChatMobile } from '@/components-mobile/ChatMobile'
import { VideoCallMobile } from '@/components-mobile/VideoCallMobile'

const Home: NextPage = () => { 

    const [modeMobile, setModeMobile] = useState<string>('video')

    const handleSetMode = (mode:string) => {
        setModeMobile(mode)
    }

    return ( 
        <main>
            <div className='mainBackground'>
                <div className={style.mainAppContainer}>
                    <Menu />
                    <VideoCall />
                    <Chat />
                </div>                    
            </div>
            <div className='mainMobile'>
            {
                modeMobile === 'chat' && (
                    <>
                        <NavbarMobile handleSetMode={handleSetMode} />
                        <ChatMobile />
                    </>
                )
            }       
            {
                modeMobile === 'video' && (
                    <VideoCallMobile handleSetMode={handleSetMode}/>
                )
            }   
            </div> 
        </main> 
    );
};

export default Home;