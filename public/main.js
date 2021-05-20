const worker = new Worker('worker.js')

worker.addEventListener('message', e=>{
    console.log('message from worker '+e.data)
})

worker.postMessage('hi from main stream')