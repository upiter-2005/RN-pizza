import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import Button from '@/src/components/Button'



const SignIn = () => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

  return (
    <View style={styles.container}>
       
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="joo@gmail.com" placeholderTextColor="#aaa"  value={email} onChangeText={(e)=>{setEmail(e)}}  />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="password" placeholderTextColor="#aaa"  value={pass} onChangeText={(e)=>{setPass(e)}} secureTextEntry={true} />

      <Button text="Sign in" onPress={()=>{}} />  
      <Link href="/(auth)/sign-up" style={{color: 'white', marginHorizontal: 'auto'}}>Create an account</Link>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', padding: 10, backgroundColor: "#222"},
    buttonText: {  color: '#fff'    },
    input: {backgroundColor: 'white', padding: 10, borderRadius: 5, marginTop: 5, marginBottom: 20, color: 'gray'},
    label:{color: 'gray', fontSize: 16},
})