import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Pyramid() {

    //const [test, setTest] = useState(createBase(8))
    const test = createBase(4)
    ordenatedBase(test)

    useEffect(()=> {

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
                line.push(<input onChange={changeInput} key={nanoid()} type='number' value={arr[i][j]}/>)
            }
            pyramid.push(<div key={nanoid()}>{line}</div>)
        }

        return(
            <div className="piramid">
                {pyramid.reverse()}
            </div>
        )
    }

    //console.log(test.reverse())

    console.log(test);

    return (
        <div>
            {newPyramid(test)}
        </div>
    )
}
