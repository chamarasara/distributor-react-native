import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';
import Logo from 'assets/images/lifeguard-logo.jpg';
import { MaterialColors, FontWeights, FontSizes } from '@app/theme';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
 
  
  loginFormSubmit=()=>{
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>

          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Lifeguard Distributor</Text>
            <TextInput     
              style={{ height: 40 }}
              label='Username'
              placeholder="Username"
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Password"
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry={true}
              value={this.state.password}
            />
            <Button
              title="Login"
              color="#02753c"
              onPress={this.loginFormSubmit.bind(this)}
            />
          </View>
        </View>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    marginLeft: 10,
  },
  logo: {
    height: 64,
    width: 64,
    alignItems: 'center',
  },
  heading: {
    ...FontWeights.Light,
    ...FontSizes.SubHeading,
  },
  body: {
    ...FontWeights.Light,
    color: MaterialColors.grey[500],
    ...FontSizes.Body,
  },
  item: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    marginTop: 10,
  },
});

