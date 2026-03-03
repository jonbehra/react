import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const StudentDetails = (props) => {
    console.log(props);
    return(
        <View style={styles.container}>  
            <View style={styles.cardWrapper}> 
                <View style={styles.imgWrapper}>
                    <Image source={props.image} style={styles.img}/>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    )
}

 const styles = StyleSheet.create({
    cardWrapper:{
        flexDirection: 'row',
        textAlign: 'center',
        fontSize: 10,
        marginVertical: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20
    },
    img: {
        width: 90,
        height: 90,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    infoWrapper:{
        marginLeft: 20,
        marginTop: 20
    },
    name :{
        fontWeight: 'bold'
    }
 })

 export default StudentDetails;