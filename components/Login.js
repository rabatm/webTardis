import React from 'react';
import { StyleSheet, Text, TextInput, View,Button,Alert } from 'react-native';
import ImageTardis from './ImageTardis';


export default function Login(props) {
  const [mail, onChangeMail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  
  const verifEmail = () => 
  {
    
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((mail) && (password)) {
      if (!mail.match(mailformat)) Alert.alert('bad maill !!! ')
      else props.login()
    }
    else 
    {
      if (!(mail)) Alert.alert('empty maill !!! ')
      else Alert.alert('No password.. !!! ' )
    }
  }

  return (
    <View style={styles.container}>
      <ImageTardis />
      <Text style={styles.titleText}>
        Login : 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeMail}
        placeholder="mail@monmail.com"
        autoComplete='email'
        value={mail}
        />
      <Text style={styles.titleText}>
        Mot de passe : 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        placeholder="PASSWORD"
        secureTextEntry={true}
        value={password}
        />
      <Button
        title="Login"
        onPress={() => verifEmail()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  input: {
    height: 40,
    width:'80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
