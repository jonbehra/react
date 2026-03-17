import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StudentDetails from '../components/StudentDetails';

const StudentScreen = ({navigation}) => {
    return(
        <View>
            <Text style={StyleSheet.text}>Students Screen</Text>
            <TouchableOpacity
                style={styles.profileButton}
                onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableOpacity>
                    <Text styles={StyleSheet.text}>Students Screen</Text>
                    <StudentDetails name="Dion" image={require('../assets/avatar.png')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.has been the industry's standard dummy text ever since the 1500s"/>
                    <StudentDetails name="Leon" image={require('../assets/avatar2.png')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.has been the industry's standard dummy text ever since the 1500s"/>
                    <StudentDetails name="Fisi" image={require('../assets/avatar3.png')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.has been the industry's standard dummy text ever since the 1500s"/>
                </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize:20,
        marginVertical: 20,
        
    },
    profileButton: {
        border: '2px solid black',
        backgroundColor: 'red',
        
        alignItems: 'center',
        borderRadius: 30
        
    },
    buttonText: {
        color: 'black',
        
    }

})

export default StudentScreen;

