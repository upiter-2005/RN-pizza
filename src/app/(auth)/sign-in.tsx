import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import Button from '@/src/components/Button'
import { supabase } from '@/src/lib/supabase'



const SignIn = () => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    

    const signInWithEmail = async() => {
      setLoading(true)
      const {error} = await supabase.auth.signInWithPassword({
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

      <Button onPress={signInWithEmail} disabled={loading} text={loading ? "Signing in ..." : "Sign in"} />  
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