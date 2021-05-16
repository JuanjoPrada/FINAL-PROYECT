import axios from 'axios'

class AuthService {

    constructor() {
        
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        })
    }

    login = userDetails => this.app.post('/login', userDetails)
    signup = userDetails => this.app.post('/signup', userDetails)
    logout = () => this.app.get('/logout')
    isloggedin = () => this.app.post('/isLoggedin')
    ispartner = () => this.app.post('/isPartner')
    isadmin = () => this.app.post('/isAdmin')
}

export default AuthService