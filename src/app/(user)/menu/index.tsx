import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '@assets/data/products'
import ProductListItem from '@/src/components/ProductListItem';
import { Stack } from 'expo-router';

const product = products[0]

export default function MenuScreen() {
  return (
    <View>
      <Stack.Screen options={{headerShown: true }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap: 10, padding: 10}}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
     
 
  );
}

const styles = StyleSheet.create({
  
});
