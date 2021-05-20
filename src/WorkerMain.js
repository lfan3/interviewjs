import {useState, useEffect} from 'react'

export default function WorkerMain(){
    const [show, setShow] = useState(false)
    useEffect(()=>{
        let count=0;
        for(let i=0; i< 2000000000; i++){
            count++;
        }
        console.log('counte in useEfffect '+count)
    },[])
    const callWorker = ()=>{
        let worker = new window.Worker('./worker.js');
        worker.addEventListener('message', e=>{
            console.log('message from worker '+e.data)
        })
        
        worker.postMessage('hi from main')
        setShow(true)
    }
    return(
        <div>
            { show && <div>show</div> }
        <button onClick={callWorker}>call worker</button>

        </div>
    )
}