import AsyncStorage from "@react-native-community/async-storage"

// Local constants
const USER_ID = "user_id"
const EMAIL_MARKED = "email_marked"

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

export const getLocalUserId = async (): Promise<string> => {
    const localUserId: string | null = await AsyncStorage.getItem(USER_ID)
    return localUserId === null ? generateNewUserId() : localUserId
}

export const doesLocalUserIDExist = async () => {
    const localUserId: string | null = await AsyncStorage.getItem(USER_ID)
    return localUserId !== null
}

export const markEmailAsCreated = async () => {
    const marked = "true"

    try {
        await AsyncStorage.setItem(EMAIL_MARKED, marked)
    } catch (e) {
        console.error(e)
    }
}

export const getEmailMarked = async () => {
    return await AsyncStorage.getItem(EMAIL_MARKED)
}
