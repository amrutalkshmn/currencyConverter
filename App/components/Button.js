import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image
                source={require('../assets/reverse-icon.png')}
                resizeMode='contain'
                style={styles.buttonIcon}
            />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonIcon: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    text: {
        color: colors.white,
        fontSize: 15,
    }
});

export default Button;