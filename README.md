# life cycle comparaison with React Class Component and React Funcitonal Component(HOOK)

## ClassLifeCycle show the following theory
mount: (ordered with execution order)
* constructor, props,state,bind method, no dom
* render, render jsx to virtual dom, return dom
* componentDidMount: fetch date, manipulate dom element, execute only once

update: 
* render,
* componentDidUpdate
* shouldComponentUpdate,  

unmount:
* componentWillUnmount


## FuncionalLifeCycle show the following theory
mount: (ordered with execution order)
* avant useEffect: non dom
* apres useEffect: non dom
* useEffect: Dom, fetch data => like componentDidMount

update:
useEffect: with the second parameter ==> like componentDidUpdate
React.memo: like shouldComponentUpdate.
* not use lamba function as props vs but can use React.useCallback()
* not use object as props vs use (prevProps, nextProps) to decide vs or use React.useMemo to rember object
* retun value: true is not render, false is render vs shouldComponentUpdate true render, false not render

unmount:
* return of useEffect

React:strick mode bug, render two times, see the detail in functionalLifeCycle commentary part

## use worker api with react vs react.useEffect
* multile treading for frontend, exemple in WorkerMain.js and the worker is in public folder
* handle process intensive task, worker.js has no assess to dom api and work independently
 