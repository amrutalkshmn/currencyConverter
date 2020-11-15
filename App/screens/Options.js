import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import colors from '../constants/colors';
import RowItem from '../components/RowItem';
import Entypo from 'react-native-vector-icons/Entypo';


const Options = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <RowItem
                    title="Theme"
                    onPress={() => alert("Todo")}
                    rightIcon={
                        <Entypo name="chevron-right" size={20} color={colors.blue} />
                    }
                />
                <View style={styles.separator} />

                <RowItem
                    title="Theme"
                    onPress={() => alert("Todo")}
                    rightIcon={
                        <Entypo name="chevron-right" size={20} color={colors.blue} />
                    }
                />
                <View style={styles.separator} />

                <RowItem
                    title="Theme"
                    onPress={() => alert("Todo")}
                    rightIcon={
                        <Entypo name="chevron-right" size={20} color={colors.blue} />
                    }
                />
                <View style={styles.separator} />


            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
    }
})

export default Options;
