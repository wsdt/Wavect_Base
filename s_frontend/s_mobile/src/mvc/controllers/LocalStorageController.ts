import AsyncStorage from "@react-native-community/async-storage";

// Local constants
const USER_ID = "user_id"


const generateNewUserId = async (): Promise<string> => {
    const newUserId: string = Math.random()
        .toString(36)
        .substring(7)
    try {
        await AsyncStorage.setItem(USER_ID, newUserId)
    } catch (e) {
        console.error(e)
    }
    return newUserId
}

export const getLocalUserId = async ():Promise<string> => {
        const localUserId: string | null = await AsyncStorage.getItem(USER_ID)
        return localUserId === null ? generateNewUserId() : localUserId
}