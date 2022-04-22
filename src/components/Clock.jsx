import { useEffect, useState } from "react"

export default function Clock({second,minute}) {
    let a = 7;
    const [sec,setSec] = useState(second)
    const [min,setMin] = useState(minute)
    let secs, mins

    useEffect(()=>{
        setTimeout(()=>{
            if(sec < 59) {
                setSec(prev=>prev+1)
            }
            else if(sec >= 59) {
                setMin(prev=>prev+1)
                setSec(0)
            }
        },1000)
    },[sec])

    if(min < 10) mins = '0' + min
    else mins = min
    if(sec < 10) secs = '0' + sec
    else secs = sec


    return (
        <div className="clock">
            {`${mins}:${secs}`}
        </div>
    )
}