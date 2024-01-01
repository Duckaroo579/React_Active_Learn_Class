import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const MyButton = props => (

    <TouchableOpacity onPress={props.myOnPress}
        style={{ backgroundColor: props.backgroundColor, width: 80, height: 80, borderRadius: 10, margin: 20 }}>
        <Text style={{ textAlign: 'center', lineHeight: 100, fontSize: 50, color: props.color }}>{props.myTitle}</Text>
    </TouchableOpacity >
)

export default MyButton