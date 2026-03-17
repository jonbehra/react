import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

class UsersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();
    this.setState({ posts: jsonData });
  }

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => this.props.navigation.navigate('Menu')}
        >
          <Text style={styles.backBtnText}>Go Back</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Users Screen</Text>

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.id}>ID: {item.id}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.company}>{item.company.name}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
            
          )}

        />
        
      </View>
      
    );
  }
}

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  id: {
    fontSize: 12,
    color: "#999",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  company: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  backBtn: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 96,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 10,
    marginHorizontal: 700,
    position: 'center'
  },
  backBtnText: {
    color: '#333',
    fontWeight: 'bold',
  },
});