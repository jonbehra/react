import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentDetails = (props) => {
    console.log(props);
    return(
        <View>
            <Text styles={styles.text}>Student Details Component</Text>
        </View>
    )
}

 const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
 })

 export default StudentDetails;