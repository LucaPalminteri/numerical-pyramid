import React, { useEffect } from "react";
import { nanoid } from "nanoid";

export default function Pyramid() {
    const test = createBase(5)
    ordenatedBase(test)

    useEffect(()=> {

    },[])

    function changeInput() {

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

        return(
            <div>
                <div><input onChange={changeInput} value={arr[4]}/></div>
                <div><input onChange={changeInput} value={arr[3][0]}/><input onChange={changeInput} value={arr[3][1]}/> </div>
                <div>{arr[2][0]} - {arr[2][1]} - {arr[2][2]}</div>
                <div>{arr[1][0]} - {arr[1][1]} - {arr[1][2]} - {arr[1][3]}</div>
                <div>{arr[0][0]} - {arr[0][1]} - {arr[0][2]} - {arr[0][3]} - {arr[0][4]}</div>
            </div>
        )
    }

    //console.log(test.reverse())

    return (
        <div>
            {newPyramid(test)}
        </div>
    )
}
