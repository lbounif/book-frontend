import {useState} from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Preferences from '../components/Preferences/Preferences'
import Login from '../components/Login/Login'
import useToken from '../components/Login/useToken'
import App from '../App'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const AppRouter = () => {

    // const { token, setToken } = useToken();

    function setToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
    }
    
    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }

    const token = getToken()

    // const token = getToken()
    console.log("---token is: ", token)

    //if no token go to Login component to login
    // console.log("token: ", token)
    if(!token) {
        console.log("no token")
        return <Login setToken={setToken}/>
    }

    return (
        <div className="wrapper">
            <h1> Auth App example</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences/>
                    </Route>
                    <Route path="/">
                        <App/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter