import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const ConversionInput = ({ text, onButtonPress, ...props }) => {
    const containerStyles = [styles.container]
    if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }
    return (
        <View style={containerStyles}>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>

            <TextInput style={styles.input} {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        borderRadius: 8,
    },
    containerDisabled: {
        backgroundColor: colors.offWhite,
    },
    button: {
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
    buttonText: {
        fontSize: 18,
        color: colors.background,
        fontWeight: 'bold'
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: colors.text,
    }
});

export default ConversionInput;