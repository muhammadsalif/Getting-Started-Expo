import React from 'react'
import { View, Button, Linking, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
        <Text style={styles.instructions}>
          To share a photo from your phone with a friend, just press the button below!
        </Text>

        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={{ backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 20, color: '#fff', padding: 10 }}>Pick a photo</Text>
        </TouchableOpacity>

        <Text style={{ color: 'blue' }}
          onPress={() => Linking.openURL('http://google.com')}>
          Google
        </Text>

        <Text style={styles.instructions}>
          Already have an account?
        </Text>
        <Button
          title="login here"
          onPress={() => navigation.navigate("login")}
        ></Button>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});