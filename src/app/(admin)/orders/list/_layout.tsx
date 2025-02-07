import { withLayoutContext } from "expo-router"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from "react-native-safe-area-context"

import OrdersScreen from "./index"
import ArchiveScreen from "./archive"

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator)


export default function OrderListNavigator () {
    return (
        <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: 'white'}}> 
            <TopTabs>
                <TopTabs.Screen name='index' options={{title: 'Active'}} />
                <TopTabs.Screen name='archive' options={{title: 'Done'}} />
            </TopTabs>
        </SafeAreaView>
        
    )
}