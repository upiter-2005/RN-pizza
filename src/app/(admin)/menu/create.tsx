import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button'
import { defaultPizzaImage } from '@/src/constants/Images';
import Colors from '@/src/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateProductScreen = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('')
    const [errors, setErrors] = useState('')
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

    const {id} = useLocalSearchParams()
    const isUpdating = !!id


    const resetFifeld =() => {
        setName('')
        setPrice('')
     
    }
    const validateInput = () => {
        setErrors('')
        if(!name){
            setErrors("Name is requared")
            return false
        } 
        if(!price){
            setErrors("Price is requared")
            return false
        } 
        if(isNaN(parseFloat(price))){
            setErrors("Price is requared")
            return false
        } 
        return true
    }
    const onCreate = () =>{
        if(!validateInput()){
            return
        }
        // Save database
        resetFifeld()
    }
    const onUpdateCreate = () =>{
        if(!validateInput()){
            return
        }
        // Save database
        resetFifeld()
        console.log("updating product")
    }

    const onSubmit = () => {
        if(isUpdating){
            onUpdateCreate()
        }else{
            onCreate()
        }
    }
    const onDelete = () => {
     console.log("deleted")
    }
    const confirmDelete = () => {
        Alert.alert('Confirm', 'Are you shure you want to delete product?', [
            {text: 'Cancel'},
            {text: 'Delete', style: 'destructive', onPress: onDelete}
        ])
    }

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [4,3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri)
        } else {
          alert('You did not select any image.');
        }
      }

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title: isUpdating ? 'Update product' : "Edit pizza"}} />
        <Image source={{uri: selectedImage || defaultPizzaImage }} style={styles.image} resizeMode='cover'/>
        <Text style={styles.imageButton} onPress={pickImageAsync}>Upload image</Text>


        <Text style={styles.label}>Name</Text> 
        <TextInput placeholder='Name' style={styles.input} value={name} onChangeText={e=> setName(e)} />

        <Text style={styles.label}>Price ($)</Text>
        <TextInput placeholder='9.99' style={styles.input} keyboardType='numeric' value={price} onChangeText={e=> setPrice(e)} />

        <Text style={{color: 'red'}}>{errors}</Text>
        <Button text={isUpdating ? "update" : "create"} onPress={onSubmit} />
        {isUpdating && <Text onPress={confirmDelete} style={styles.imageButton}>Delete</Text>}
    </View>
  )
}

export default CreateProductScreen

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: 'center', padding: 10},
    input: {backgroundColor: 'white', padding: 10, borderRadius: 5, marginTop: 5, marginBottom: 20},
    label:{color: 'gray', fontSize: 16},
    image: {width: '50%', aspectRatio: 1, marginHorizontal: 'auto'},
    imageButton:{alignSelf: 'center', fontWeight: 'bold', color: Colors.light.tint }
})