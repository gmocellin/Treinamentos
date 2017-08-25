import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextField = ({ label, value, onChangeText, autoCorrect, placeholder, secureTextEntry }) => {
    const { textFieldStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle} >
            <Text style={labelStyle} >{label}</Text>
            <TextInput 
                autoCorrect={autoCorrect}
                placeholder={placeholder}
                value={value} 
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText} 
                style={textFieldStyle} 
            />
        </View>
    );
};

const styles = {
    textFieldStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        justifyContent: 'center',
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { TextField };
