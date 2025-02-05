import products from "@/assets/data/products"
import Button from "@/src/components/Button"
import { useCart } from "@/src/providers/CartProvider"
import { PizzaSize } from "@/src/types"
import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import {Text, Image, StyleSheet, Pressable, View} from "react-native"


const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

export default function ProductDetailScreen () {
    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M')
    const {addItem} = useCart()
    const { id } = useLocalSearchParams()
    const router = useRouter()

    const product = products.find(product => product.id.toString() === id)

    const addToCard = () => {
        if(!product) return
        addItem(product, selectedSize)
        router.push('/cart')
    }

    if(!product){
        return <Text>Product not found</Text>
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product?.name }} />
            <Image source={{uri: product.image}} style={styles.image} resizeMode="contain" />
            <Text style={styles.price}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
  
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: 'white', flex: 1},
    image: {width: "100%", aspectRatio: 1},
    price: {fontSize: 18, fontWeight: 'bold', },
    sizes: {flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10},
    size: {backgroundColor: 'gainsboro', width: 50, aspectRatio: 1, borderRadius: 25, alignItems: 'center', justifyContent: 'center'},
    sizeText: {fontSize: 20, fontWeight: '500'}
})