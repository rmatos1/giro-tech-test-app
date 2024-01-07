import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { TopBar, DrawerContent } from '../components';
import { Links, StoreProps } from '../types';

import { Login, Clients, Permissions } from '../screens';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#F9F8FA'
    }
}

export const Routes = () => {

    const { isLoggedIn } = useSelector((state: StoreProps) => state.auth);

    return(
        <NavigationContainer theme={lightTheme}>
            
            {
                isLoggedIn ?
                (
                    <Drawer.Navigator
                        screenOptions={{
                            header: () => <TopBar />
                        }}
                        drawerContent={() => <DrawerContent />}
                    >
        
                        <Drawer.Screen name={Links.Clients} component={Clients} />
        
                        <Drawer.Screen name={Links.Permissions} component={Permissions} />
        
                    </Drawer.Navigator>
                ) : (
                    <Stack.Navigator >

                        <Stack.Screen 
                            name={Links.Login} component={Login} options={{ headerShown: false }}
                        />
                        
                    </Stack.Navigator>
                )
            }

        </NavigationContainer>
    )
}