import {Component, Fragment} from 'react'

export class Count extends Component {
    state ={
        count: 1,
        name: 'Maksim'
    }

    handleClick =() => {
        this.setState({count: this.state.count +1})
    }
    
    render(){
        console.log(this.props.count)
        return  <Fragment>
                    <p>Count: {this.state.count}</p>
                    <button type='button' onClick={this.handleClick}>Click</button>
                </Fragment>
    }
    
}   