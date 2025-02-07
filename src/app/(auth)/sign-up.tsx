import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import Button from '@/src/components/Button'
import {supabase} from "@/src/lib/supabase"



const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    

    const signUpWithEmail = async() => {
      setLoading(true)
      const {error} = await supabase.auth.signUp({
        email,
        password: pass
      })
      if(error){Alert.alert(error.message)}

      setLoading(false)
    }

  return (
    <View style={styles.container}>
       
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="joo@gmail.com" placeholderTextColor="#aaa"  value={email} onChangeText={(e)=>{setEmail(e)}}  />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="password" placeholderTextColor="#aaa"  value={pass} onChangeText={(e)=>{setPass(e)}} secureTextEntry={true} />

      <Button text={loading ? "Creating account..." : "Create account"} disabled={loading} onPress={signUpWithEmail} />  
      <Link href="/(auth)/sign-in" style={{color: 'white', marginHorizontal: 'auto'}}>Log in</Link>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', padding: 10, backgroundColor: "#222"},
    buttonText: {  color: '#fff'    },
    input: {backgroundColor: 'white', padding: 10, borderRadius: 5, marginTop: 5, marginBottom: 20, color: 'gray'},
    label:{color: 'gray', fontSize: 16},
})