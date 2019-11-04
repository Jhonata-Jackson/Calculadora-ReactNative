import React from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native'

export default class Title extends React.Component {
    render() {
    return (
        <TouchableOpacity>
            <Text style={{width:30, height:100}}>{this.props.label}</Text>
        </TouchableOpacity>
                    
        )    
    }
}