import orders from '@/assets/data/orders';
import OrderItemListItem from '@/src/components/OrderItemListItem';
import OrderListItem from '@/src/components/OrderListItem';
import Colors from '@/src/constants/Colors';
import { OrderStatusList } from '@/src/types';
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
                ListFooterComponent={()=> <>
                    <Text style={{ fontWeight: 'bold' }}>Status</Text>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                      {OrderStatusList.map((status) => (
                        <Pressable
                          key={status}
                          onPress={() => console.warn('Update status')}
                          style={{
                            borderColor: Colors.light.tint,
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 5,
                            marginVertical: 10,
                            backgroundColor:
                              order.status === status
                                ? Colors.light.tint
                                : 'transparent',
                          }}
                        >
                          <Text
                            style={{
                              color:
                                order.status === status ? 'white' : Colors.light.tint,
                            }}
                          >
                            {status}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  </>
                  }
            />
        </View>
       
    )
}