import React from "react";
import { View, Text, StyleSheet, Button , TouchableOpacity} from "react-native";

const MenuScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>
                Welcome to MenuScreen
            </Text>
            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('List')}>
                <Text style={styles.btnText}>Go to List Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnn}
                onPress={() => props.navigation.navigate('Student')}>
                <Text style={styles.btnTextt}>Go to Student Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('Box')}>
                <Text style={styles.btnText}>Go to Box Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnn}
                onPress={() => props.navigation.navigate('Posts')}>
                <Text style={styles.btnTextt}>Go to Posts Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('Users')}>
                <Text style={styles.btnText}>Go to Users Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize:20
    },
    btn: {
        backgroundColor: 'yellow',
        marginVertical: 17,
        paddingVertical:17,
        borderRadius: 30,
        margin: 0
    },
    btnn: {
        backgroundColor: 'blue',
        marginVertical: 17,
        paddingVertical:17,
        borderRadius: 30,
        margin: 0
    },
    btnTextt: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    btnText: {
        color: 'black',
        fontSize: 15,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

export default MenuScreen;