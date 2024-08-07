import React, { useState } from "react";

const Player = ()=>{

    const [backBackgorund, setBackBackgorund] = useState('grey')
    const [playBackgorund, setPlayBackgorund] = useState('grey')
    const [stopBackgorund, setStopBackgorund] = useState('grey')
    const [nextBackgorund, setNextBackgorund] = useState('grey')

    function back(){
        if( backBackgorund == 'green'){
            setBackBackgorund('gray')
        }else{
            setBackBackgorund('green')
            setPlayBackgorund('gray')
            setStopBackgorund('gray')
            setNextBackgorund('gray')
        }
    }

    function stop(){
        if( playBackgorund == 'green'){
            setPlayBackgorund('gray')
        }else{
            setPlayBackgorund('green')
            setBackBackgorund('gray')
        }
    }

    function next(){
        if( playBackgorund == 'green'){
            setPlayBackgorund('gray')
        }else{
            setPlayBackgorund('green')
            setBackBackgorund('gray')
        }
    }

    function play(){
        if( playBackgorund == 'green'){
            setPlayBackgorund('gray')
        }else{
            setPlayBackgorund('green')
            setBackBackgorund('gray')
        }
    }

    return(
        <>
            <h1>Player</h1>
            <button style={{ backgroundColor: backBackgorund }} onClick={back}>Anterior</button>
            <button style={{ backgroundColor: playBackgorund }} onClick={play}>Reproducir</button>
            <button style={{ backgroundColor: stopBackgorund }} onClick={play}>Stop</button>
            <button style={{ backgroundColor: nextBackgorund }} onClick={play}>Siguiente</button>
        </>
    )
}

export default Player