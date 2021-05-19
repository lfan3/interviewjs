import {Component} from 'react';

class ClassLifeCycle extends Component{
    constructor(){
        super();
        this.state = {count:0}
      }
      componentDidMount(){
        this.counterInterval = setInterval(()=>this.increment(), 1000);
      }
      componentWillUnmount(){
        clearInterval(this.counterInterval);
      }
      increment(){
        this.setState((preState) =>({count: preState.count+1}));
      }
      render(){
        const count = this.state.count;
        return (
          <div>
          <Counter count={count}/>
          </div>
        );
      }
}

class Counter extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext){
      console.log('[Counter] - [shouldComponentUpdate]')
  
        if(nextProps.count > 4)
          return false
        return true
    }
    componentDidMount(){
      console.log('[Counter] - [componentDidMount]')
  
    }
    componentDidUpdate() {
      console.log('[Counter] - [componentDidUpdate]')
    }
  
    render(){
      console.log('[Counter] - [render]')
      const count = this.props.count;
      return(
        <div className="App" style={{fontSize:'5em'}}>
        {count}
        </div>
      )
    }
}
  
export default ClassLifeCycle;