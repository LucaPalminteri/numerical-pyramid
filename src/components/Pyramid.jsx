import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Clock from "./Clock";

export default function Pyramid(props) {

    const [test, setTest] = useState([])
    ordenatedBase(test)
    const [ clock, setClock ] = useState(<Clock second={0} minute={0}/>);

    useEffect(()=> {
        setTest(createBase(props.value))
    },[])

    function changeInput(e) {
        console.log(e.target.value);
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
        let pyramid = []

        for (let i = 0; i < arr.length; i++) {
            let line = []
            for (let j = 0; j < arr[i].length; j++) {
                let n = Math.random()
                if (n > (props.value === 4 ? 0.4 : 0.6)) {
                    line.push(<input className="helper" onChange={changeInput} key={nanoid()} type='number' value={arr[i][j]} disabled/>)
                }
                else {
                    line.push(<input onChange={changeInput} key={nanoid()} type='number'/>)
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

    }

    return (
        <div>
            {newPyramid(test)}
            {clock}
            <div>
                <button onClick={toggle}>New Game</button>
                <button onClick={verify}>Finish</button>
            </div>
            
        </div>
    )
}
