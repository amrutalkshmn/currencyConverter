import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
import ConversionInput from '../components/ConversionInput';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.blue} />

            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode='center'
                />
            </View>

            <ConversionInput
                text="INR"
                value="123"
                onButtonPress={() => alert('Hello')}
                keyboardType="numeric"
                onChangeText={(text) => console.log('text', text)}
            />

            <ConversionInput
                text="USD"
                value="123"
                onButtonPress={() => alert('Hello')}
                editable={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignContent: 'center',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center',
        width: screen.width * 0.25,
        height: screen.height * 0.25,
    }
});

export default HomeScreen;