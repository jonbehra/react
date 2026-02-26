import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StudentDetails from '../components/StudentDetails';

const StudentScreen = () => {
    return(
        <View>
            <Text style={StyleSheet.text}>Student Screen</Text>
            <StudentDetails />
            <StudentDetails />
            <StudentDetails />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize:20,
        marginVertical: 20
    }
})

export default StudentScreen;

