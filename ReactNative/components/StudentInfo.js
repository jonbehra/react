import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const StudentInfo = ({ fullName, position, description, profileimage }) => {
  return (
    <View style={styles.container}>
        <View styles={styles.headerBackground}/>
        <View style={styles.ImageContainer}>
        <Image 
        source={profileimage} 
        style={styles.profileImage} />
        </View>

        <TouchableOpacity style={styles.settingsIcon}>
        <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>

        <View style={styles.cardContent}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={style.hireButton}>
            <Text style={styles.hireButtonText}>HIRE HIM</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width:0, height:2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5
  },
    headerBackground: {
    height: 120,
    backgroundColor: '#4A90E2',
    },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 10,
    zIndex: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#333',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 15,
  },
    settingsText: {
        fontSize: 20,
  },
    cardContent: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
    },
    fullName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color : '#666'
    },
    position: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    fontWeight: 'bold'
    },
  description: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 24,
    color: '#666',
    marginBottom: 15,
  },
  hireButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    },
    hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    },
});

export default StudentInfo;