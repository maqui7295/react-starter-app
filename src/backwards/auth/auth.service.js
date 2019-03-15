
export default class AuthService {


    // static index(){
    //     return JSON.parse(localStorage.getItem('user'))
    // }

    static show(email){
        const user = this.userExists(email)
        if(user.status)
           return user.data
        return null
    }

    static create(formObject){

        const user = { ...formObject, created: Date()  }

        const userOld = this.userExists(user.email)

        if(userOld.status){
            return false
        }

        localStorage.setItem(user.email, JSON.stringify(user))
        return true

    }

    static update(email){
    //
    }

    static delete(email){
     //
    }

    static createProfile(){

    }

    static userExists(email){

        if(localStorage.getItem(email)){
            return { data: JSON.parse(localStorage.getItem(email)), status: true }
        }
        return {data: null, status: false}
    }

}