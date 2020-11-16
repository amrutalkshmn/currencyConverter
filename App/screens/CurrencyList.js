import React from 'react';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import RowItem from '../components/RowItem';

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        backgroundColor: colors.background,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ({ route }) => {
    const params = route.params || {};
    const { activeCurrency } = params;
    return (
        <View style={{ backgroundColor: colors.white }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <FlatList
                data={currencies}
                renderItem={({ item }) => {
                    const selected = params.activeCurrency === item;
                    return <RowItem
                        title={item}
                        onPress={() => {
                            props.navigation.pop();
                        }}
                        rightIcon={
                            selected && (
                                <View style={styles.icon}>
                                    <Entypo name="check" size={20} color={colors.white} />
                                </View>
                            )
                        }
                    />;
                }}
                keyExtractor={(item) => item}
            />
        </View>

    )
};