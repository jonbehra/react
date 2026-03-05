import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const Projects = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>PROJECTS</Text>
            <TouchableOpacity>
                <Text style={styles.viewAll}>View All< /Text>
            </TouchableOpacity>
        </View>
        <View style={styles.projectsContainer}>
            ///prej qitu duhet me e permisu  </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    fullName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    position: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
    },
})
export default StudentInfo;