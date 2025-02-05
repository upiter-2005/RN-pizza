import { View, Text, Platform, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'
import { useCart} from '@/src/providers/CartProvider'
import CartListItem from '../components/CartListItem'
import Button from '../components/Button'

const CartScreen = () => {

    const {items} = useCart()

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({item}) => <CartListItem key={item.product_id} cartItem={item} />}
                contentContainerStyle={{padding: 10, gap: 10}}
            />
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            <Button text="checkout" />
        </View>
    )
}

export default CartScreen