import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import ConversionInput from '../components/ConversionInput';
import colors from '../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';

const screen = Dimensions.get('window');

const HomeScreen = (props) => {
    const baseCurrency = 'USD';
    const quoteCurrency = 'GBP';
    const conversionRate = 0.8924;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} />

            <SafeAreaView style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.push("Options")}>
                    <Entypo name="cog" size={32} color={colors.white} />
                </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.itemContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                </View>

                <Text style={styles.textHeader}>Currency Converter</Text>

                <ConversionInput
                    text={baseCurrency}
                    value="123"
                    onButtonPress={() => props.navigation.push('CurrencyList', { title: 'From Currency', activeCurrency: baseCurrency })}
                    keyboardType="numeric"
                    onChangeText={(text) => console.log('text', text)}
                />

                <ConversionInput
                    text={quoteCurrency}
                    value="123"
                    onButtonPress={() => props.navigation.navigate('CurrencyList', { title: 'To Currency', activeCurrency: quoteCurrency })}
                    editable={false}
                />

                <Text style={styles.text}>
                    {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency}`}
                </Text>

                <Button
                    text="Reverse Currencies"
                    onPress={() => alert('Hello')}
                />
                <View style={{ height: screen.height }} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    itemContainer: {
        paddingTop: screen.height * 0.1,
    },
    logo: {
        alignSelf: 'center',
        width: screen.width * 0.25,
        height: screen.height * 0.25,
    },
    textHeader: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        color: colors.offWhite,
        textAlign: 'center',
        marginTop: 10,
    },
    header: {
        alignItems: 'flex-end',
        marginHorizontal: 20
    }
});

export default HomeScreen;