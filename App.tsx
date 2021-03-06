import {StatusBar} from 'expo-status-bar'
import React, {useEffect} from 'react'
import {TouchableOpacity} from 'react-native'
import {Main} from './src/screens/main/main'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {hideLoginModal, showLoginModal} from './src/features/login-modal/models/models'
import {LocalStorage} from './src/lib/local-storage'
import {$isAuth, setIsAuth} from './src/models/models'
import {useStore} from 'effector-react'
import {hideCreateTaskModal, showCreateTaskModal} from './src/features/create-task-modal/models/models'
import {Create} from './src/ui/atoms/icons/create'
import {LogOut} from './src/ui/atoms/icons/log-out'
import {Profile} from './src/ui/atoms/icons/pofile'
import {hideEditTaskModal} from "./src/features/edit-task-modal/models/models";

const Stack = createStackNavigator()


export default function App() {
    const isAuth = useStore($isAuth)

    const initData = async () => {
        const token = await LocalStorage.get('token')
        if (token) {
            setIsAuth(true)
        }
    }

    const onPressLogin = () => {
        if (isAuth) {
            setIsAuth(false)
            LocalStorage.removeItem('token')
        } else {
            hideEditTaskModal()
            hideCreateTaskModal()
            showLoginModal()
        }
    }
    const onPressCreateTask = () => {
        hideLoginModal()
        hideEditTaskModal()
        showCreateTaskModal()
    }

    useEffect(()=>{
        initData()
    }, [])


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerLeft: ()=><TouchableOpacity onPress={onPressCreateTask} style={{padding: 10}}><Create/></TouchableOpacity>,
                        headerRight: ()=>
                            <TouchableOpacity style={{padding: 10}} onPress={onPressLogin}>
                                {isAuth ? <LogOut/> : <Profile/>}
                            </TouchableOpacity>,
                    }}
                    name="ToDo" component={Main} />
            </Stack.Navigator>
            <StatusBar style="dark" />
        </NavigationContainer>
    )
}

