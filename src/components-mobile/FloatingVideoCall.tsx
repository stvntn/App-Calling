import React, { useState } from 'react';
import style from '../styles/Home.module.css'
import Image from 'next/image';

export const FloatingVideoCall: React.FC = () => {

    return(
        <Image src='/assets/videocall/foto1.jpg' alt='foto1' width={150} height={150} style={{borderRadius:'2%'}}/>
    );
}