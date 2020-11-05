//import * as admin from 'firebase-admin'

export default class AuthSevice {


    login = async (payload: any) => {
        if(payload.email === 'test@user.com' && payload.password === '12345') {
            return Promise.reject({ token : 'mg2gK3H7OcPRPnatm5xJzQMfhl73'})
        }
        return Promise.reject(`cannot login`)
     } 

}