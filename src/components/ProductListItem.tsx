import { StyleSheet,Text, View, Image, Pressable } from 'react-native'

import { Product } from '@/src/types'
import Colors from '@/src/constants/Colors'
import { Link, useSegments } from 'expo-router'


const defaultPizzaImg = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png"
interface IProduct {
    product: Product
}

const ProductListItem = ({product}: IProduct) => {
  const segments = useSegments()
    console.log(product)
    return(
      <Link href={`/${segments[0]}/menu/${product.id}`} asChild>  
        <Pressable style={styles.container}>
          <Image source={{uri: product.image || defaultPizzaImg}} style={styles.image} resizeMode='contain' />
          <Text style={styles.title}> {product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </Pressable>
      </Link>
    )
  }

export default ProductListItem


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
  },
  image: {
    width: '100%',
    aspectRatio: 1
  }, 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.tint
  },
});