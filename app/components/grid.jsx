import React from 'react';
import {gridSize} from '../constants/game'

import _ from 'lodash';
import Row from './row.jsx';

export default class Grid extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                { 
                    _.range(gridSize).map((v, y)=>{
                        return <Row 
                            key={y} 
                            y={y} 
                            position={this.props.position} 
                            color={this.props.color}
                        />;
                    })
                }
            </div>
        )
    }

}
