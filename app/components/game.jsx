import React from 'react';

const gameTickSize = 250

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameTime: 0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({gameTime: this.state.gameTime + gameTickSize })
        }, gameTickSize)
    }
    render(){
        return (
            <div>{ this.state.gameTime }</div>
        )
    }

}
