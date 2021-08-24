import {useState} from 'react'
import './Login.css'
import PropTypes from 'prop-types'
import axios from 'axios'

const Login = ({setToken}) => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const loginUser = async (credentials) => {
        //credentials contains email and passord
        console.log("--credentials: ", credentials)

        try {
            const response = await axios.post("http://localhost:10010/users/login",credentials)
            console.log("response ", response)
            return response.data

        } catch (error) {
            console.log(error)
            return error
        }
       
    }
    const handleSubmit = async(event) => {
        event.preventDefault()
        const user = await loginUser({
            email: username,
            password: password
        })
        console.log("user from api: ", user)
        const token = user.data.token
        setToken(token)
        console.log("token after setToken: ", token)
    }
    return (
        <div className="login">
             <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Username</label>
                    <input type="text" onChange={e => setUserName(e.target.value) }/>
                </div>
                <div>
                    <label> Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value) }/>
                </div>
                <div>
                    <button type="submit">Submit</button> 
                </div>

            </form> 
        </div>
    )

}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default Login