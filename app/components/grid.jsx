import React from 'react';
import {gridSize} from '../constants/game'

import _ from 'lodash';

export default class Grid extends React.Component {
    constructor(props){
        super(props);
    }
    isActiveCell(x, y){
        return x === this.props.position[0] && y === this.props.position[1]
    }
    createCellStyle(x, y){
        return {
            padding: '10px',
            border:'solid 1px black',
            backgroundColor: this.isActiveCell(x, y) ? this.props.color : 'unset'
        }
    }
    renderGrid(){
        return _.range(gridSize).map((v, y)=>{
            return (
                <div 
                    className='row'
                    style={{
                        padding: '10px'
                    }}
                >
                    { 
                        _.range(gridSize).map((v, x)=>{
                            return (
                                <span 
                                    className='cell'
                                    style={this.createCellStyle(x, y)}
                                >
                                    {x}, {y}
                                </span>
                            )
                        })
                    }
                </div>
            )
        });
    }
    render(){
        return (
            <div>
                { this.renderGrid() }
            </div>
        )
    }

}
