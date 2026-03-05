import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import StudentInfo from '../components/StudentInfo';
import Projects from '../components/Project';
import { View } from 'react-native-web';


const ProfileScreen = () => {
  return (  
        <View style={styles.container}>

        
        <StudentInfo 
          fullName="Leon Krasniqi"
          position="Mobile Developer"
          description="Student i apasionuar pas teknologjisë dhe zhvillimit të aplikacioneve me React Native. Më pëlqen të krijoj zgjidhje kreative."
          profileImage={require('../assets/avatar5.png')}
        />

        <Projects 
          Image1={require('../assets/avatar.png')}
          Image2={require('../assets/avatar2.png')}    
        />
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ProfileScreen;