import React from 'react';
import {gridSize} from '../constants/game'

import _ from 'lodash';
import Cell from './cell.jsx';

export default class Row extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div 
                className='row'
                style={{
                    margin: '0px 0px 0px 0px',
                    padding: '0px 0px 0px 0px'
                }}
            >
                { 
                    _.range(gridSize).map((v, x)=>{
                        return <Cell 
                            key={x}
                            y={this.props.y}
                            x={x}
                            color={this.props.color}
                            position={this.props.position} 
                        />;
                    })
                }
            </div>
        )
    }

}
