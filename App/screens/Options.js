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

                <RowItem
                    title="Theme"
                    onPress={() => alert("Todo")}
                    rightIcon={
                        <Entypo name="chevron-right" size={20} color={colors.blue} />
                    }
                />

                <RowItem
                    title="Theme"
                    onPress={() => alert("Todo")}
                    rightIcon={
                        <Entypo name="chevron-right" size={20} color={colors.blue} />
                    }
                />


            </ScrollView>
        </SafeAreaView>
    );
};
export default Options;
