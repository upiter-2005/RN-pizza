import orders from '@/assets/data/orders';
import OrderItemListItem from '@/src/components/OrderItemListItem';
import OrderListItem from '@/src/components/OrderListItem';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';

export default function OrderDetailsScreen () {

    const {id} = useLocalSearchParams()

    const order = orders.find((order) => order.id.toString() === id)

    if(!order){
        return <Text>Not found</Text>
    }

    return (
        <View style={{padding: 10, gap: 10, flex: 1}}>
            <Stack.Screen options={{title: `Order #${id}`}} />
            <Text>Order details: {order.id}</Text>
            <OrderListItem order={order} />
            <FlatList
                data={order.order_items}
                renderItem={({item}) => <OrderItemListItem item={item}/>}
                contentContainerStyle={{gap: 10}}
                ListHeaderComponent={() =>  <Text>Order details: {order.id}</Text>}
            />
        </View>
       
    )
}