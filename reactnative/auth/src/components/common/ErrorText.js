import React from 'react';
import { Text } from 'react-native';

const ErrorText = ({ errorText }) => {
    return (
        <Text style={styles.errorTextStyle}>{errorText}</Text>
    );
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        padding: 5,
        alignSelf: 'center',
        color: 'red'
    }
};

export { ErrorText };
