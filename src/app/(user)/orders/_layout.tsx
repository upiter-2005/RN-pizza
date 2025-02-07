import Colors from "@/src/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function OrderStack (){
    return (
        <Stack>
            <Stack.Screen name="index" options={{title: 'Orders'}} />
        </Stack>
    )
}