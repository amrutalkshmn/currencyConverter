import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';

const RowItem = ({ title, onPress, rightIcon }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                {rightIcon}
            </TouchableOpacity>
            <View style={styles.separator} />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
    },
    title: {
        color: colors.text,
        fontSize: 16,
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,

    },
});

export default RowItem;