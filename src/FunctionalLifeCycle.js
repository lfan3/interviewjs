import {useEffect, useState, useRef,memo, useCallback, useMemo} from 'react';
//this file is maily to explain memo, useCallback, useMemo

/**
 * add commentary *
 */

export default function FunctionalLifeCycle(){
    const [text, setText]= useState("");
    const obj = {a:'a'};
    const i = 'i'
    const data = useMemo(()=>({b:'b'}), []);
    const callback =useCallback(()=>(i), [i]);//not work with object, object should use useMemo as above
    return(
        <div>
            <input type='text' onChange={e=>setText(e.target.value)} value={text}/>
            <p style={{fontWeight:'bold'}}>Counter without props</p>
            <CounterHook/> 
            <p style={{fontWeight:'bold'}}>CounterMemo without props</p>
            <CounterMemo/>
            <p style={{fontWeight:'bold'}}>CounterMemo with lamba as props</p>
            <CounterMemo anonyme = {()=>(obj)}/>
            <p style={{fontWeight:'bold'}}>CounterMemo with useCallback as propos</p>
            <CounterMemo anonyme = {callback}/>
            <p style={{fontWeight:'bold'}}>CounterMemo with object as props</p>
            <CounterMemo anonyme = {obj}/>
            <p style={{fontWeight:'bold'}}>CounterMemo with useMemo object as props</p>
            <CounterMemo anonyme = {data}/>
            <p style={{fontWeight:'bold'}}>CounterMemoCompare props</p>
            <CounterMemoCompare anonyme = {obj}/>
        </div>
    )
}
/**
 * bug from react part :
 * in the react strickmode ==>find in index.js with npx create-react-app, 
 * this will cause twice rendering, so renderRef.current++, will be invoked twice *
 */

function CounterHook() {
    const [count, setCount] = useState(0);
    const renderRef = useRef(0);
    const clickHandler = ()=>{
        setCount(c=>c+1);
    }
    return (
        <div>
            <div>click count: {count}</div>
            <div>render: {renderRef.current++}</div>
            <button onClick={clickHandler}>add counter</button>
        </div>
    )
}

const CounterMemo = memo(CounterHook);
const CounterMemoCompare = memo(CounterHook, (preProps, nextProps)=>{
    if(preProps.anonyme.a === nextProps.anonyme.a)
        return true;
    return false;
})