import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const Project = (props) => {
  const { Image1, Image2 } = props;
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>PROJECTS</Text>
            <TouchableOpacity>
                <Text style={styles.viewAll}>View All </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.projectsContainer}>
          <View style={styles.projectCard}>
            <Image
            source={Image1}
            style={styles.projectImage}
            />
            </View>
            <View style={styles.projectCard}>
                <Image
            source={Image2}
            style={styles.projectImage}
            />
                </View> 
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal:20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    viewAll: {
        fontSize: 14,
        color: '#fff',
        backgroundColor: '#ffd700',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 15,
        fontWeight: '600',
        overflow: 'hidden'
    },
    scrollView: {
        marginLeft: -20,
        paddingLeft:20
    },
    projectsContainer:{
        flexDirection: 'row',
        gap: 15
    },
    projectCard: {
        marginRight: 10,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5
    },
    projectImage: {
        width: 160,
        height: 200,
        borderRadius:12
    },
});
export default Project;