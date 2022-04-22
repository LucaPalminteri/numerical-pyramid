import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Clock from "./Clock";
import Confetti from 'react-confetti'

export default function Pyramid(props) {

    const [test, setTest] = useState([])
    const [win, setWin ] = useState(false);
    const [finish,setFinish] = useState(false)
    ordenatedBase(test)
    let aux = 0,tries = 0;

    useEffect(()=> {
        setTest(createBase(props.value))
    },[])

    function changeInput(e,i,j) {
        
        e.target.value == test[i][j] ? 
        aux++:
        console.log("Not equals");
        console.log(aux);
        console.log(tries);
    }

    function createBase(n) {
        const base = []
        for (let i = n; i > 0; i--) {
            const arr = []
                for (let i = 0; i < n; i++) {
                    arr.push(Math.ceil(Math.random()*9))
                }
            base.push(arr)
            n--;
        }
        return(base);
    }

    function handleKeyPress(target) {
        if(target.charCode === 13) {
            verify(target)
        }
    }

    function ordenatedBase(arr) {
        for (let i = 0; i < arr.length; i++) {
           for (let j = 0; j < arr[i].length; j++) {
               if(i > 0) {
                    arr[i][j] = arr[i-1][j] + arr[i-1][j+1]
               }
               else if (i === 0) {
                    arr[i][j] = arr[i][j]
               }
           }
        }

        return(arr);
    }

    function newPyramid(arr) {
        let pyramid = [],aux = 0;

        for (let i = 0; i < arr.length; i++) {
            let line = []
            for (let j = 0; j < arr[i].length; j++) {
                let n = Math.random()
                if (n > (props.value === 4 ? 0.4 : 0.6)) {
                    aux++
                    line.push(<input 
                        className="helper" 
                        onChange={changeInput} 
                        key={nanoid()} 
                        type='number' 
                        value={arr[i][j]} 
                        disabled/>)
                }
                else {
                    tries++
                    line.push(<input 
                        onChange={(e)=>changeInput(e,i,j)} 
                        key={nanoid()} 
                        type='number'/>)
                }
            }
            pyramid.push(<div key={nanoid()}>{line}</div>)
        }

        
        return(
            <div className="piramid">
                {pyramid.reverse()}
            </div>
        )
    }

    function toggle() {
        setTest(createBase(props.value))
    }

    function verify() {
        setFinish(true)
        if(aux >= tries) setWin(true);
        else console.log("lose");
        setTimeout(()=>{
            setTest(createBase(props.value))
            setWin(false)
            setFinish(false)
        },2000)
    }

    return (
        <div onKeyPress={handleKeyPress}>
            {win && <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.5}/>}
            {finish ? win ? <div className="message">Win</div> : <div className="message">Lose</div> :<></> }
            {newPyramid(test)}
            <Clock second={0} minute={0}/>
            <div>
                <button onClick={toggle}>New Game</button>
                <button onClick={verify}>Finish</button>
            </div>
            
        </div>
    )
}
