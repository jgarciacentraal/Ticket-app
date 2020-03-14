class Auth {
    constructor() {
        this.authenticated = false
    }
    login(data, cb) {
        localStorage.setItem('user-data', JSON.stringify(data.email))
        localStorage.setItem('token', data.token)
        this.authenticated = true
        cb()
    }
    isAuthenticated(){
        if(localStorage.getItem('token')){
            this.authenticated = true
        }
        return this.authenticated
    }
}

export default new Auth()