import React from "react";
import { nanoid } from "nanoid";

export default function Pyramid() {
    const test = createBase(5)
    
    function createLine(n) {
        const line = [];
        for (let i = 0; i < n; i++) {
            line.push(
                <input 
                    key={nanoid()} 
                    type='number' 
                    min={0}
                    value={Math.floor(Math.random()*100)}
                    onChange={changeInput}/>
            )
        }
        line.push(<br key={nanoid()}/>)
        return(line)
    } 

    function createPyramid(arr) {
        let n = arr.length
        const pyramid = []
        for (let i = n; i > 0; i--) {
            pyramid.push(createLine(n))
            n--;
        }
        return (pyramid.reverse())
    }

    function changeInput() {

    }

    function randomBase(n) {
        const arr = []
        for (let i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random()*5))
        }
    }

    function createBase(n) {
        const base = []
        for (let i = n; i > 0; i--) {
            const arr = []
                for (let i = 0; i < n; i++) {
                    arr.push(Math.floor(Math.random()*5))
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
                //console.log(`${i}-${j}: ${arr[i-1][j] + arr[i-1][j+1]} (${arr[i-1][j]} + ${arr[i-1][j+1]})`);
               }
               else if (i === 0) {
                arr[i][j] = arr[i][j]
                //console.log(`${i}-${j}: ${arr[i][j]}`);
               }
           }
        }

        return(arr);
    }

    ordenatedBase(test)

    console.log(test)

    return (
        <div>
            {createPyramid(test)}

        </div>
    )
}
