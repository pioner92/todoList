import AsyncStorage from '@react-native-async-storage/async-storage'

type constant = 'token'

export class LocalStorage {
    static async set(key: constant, value: string) {
        await AsyncStorage.setItem(key, value)
    }

    static async get(key: constant) {
        return await AsyncStorage.getItem(key)
    }

    static async removeItem(key:constant) {
        await AsyncStorage.removeItem(key)
    }
}


