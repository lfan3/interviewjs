self.addEventListener('message', e=>{
    console.log(e.data);
    let count=0;
    for(let i=0; i< 2000000000; i++){
        count++;
    }
    self.postMessage(count);
})
