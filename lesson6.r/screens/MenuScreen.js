import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const MenuScreen = () => {
    return (
        <View>
            <Text style={StyleSheet.text}>
                Welcome to MenuScreen
            </Text>
            <Button
                title="Go to List Screen"
                color="purple"
                onPress={() => console.log('Button Clicked:', counter++)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize:20
    }
});

export default MenuScreen;