import React, { useState } from 'react';

function LogInComponent(props) {

    /**
     * Facebook recommends to use hooks instead of React.Component's state due to productivity issues
     * Check here: https://ru.reactjs.org/docs/hooks-intro.html
     */
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function loginFunction() {
        console.log('Login: ', login);
        console.log('Password: ', password);

        let response = await fetch('/api/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: login,
                password: password  
            })
        });

        if (!response.ok) {
            console.log('Error: ', response);
            return {success: false, error: `${response}`};
        }

        try {
            let data = await response.json();
            console.log('Data: ', data);

            localStorage.setItem('token', data.token);

            return data;
        } catch (ex) {
            console.log('Error: ', ex);
            return {success: false, error: `${ex}`};
        }
    }

    return (
        <>
            <input
                placeholder="Login"
                onChange={event => setLogin(event.target.value)}
            />
            <input
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
            />
            <button onClick={loginFunction}>login</button>
            {localStorage.getItem('token')}
        </>
    );
}

export default LogInComponent;