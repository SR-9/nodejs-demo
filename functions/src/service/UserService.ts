import * as admin from 'firebase-admin';

const db = admin.firestore();


const USERS_COLLECTION = 'users'

export default class UserSevice {

    getUsers = async (page: any, limit: any) => {

        let users: Array<any> = []
        const userRef = await db.collection(USERS_COLLECTION).orderBy('id').startAt(page).limit(limit).get()
        userRef.forEach((user) => users.push(user.data()))

        return users
    }

}

