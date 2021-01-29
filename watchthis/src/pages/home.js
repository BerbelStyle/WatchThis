import { Form } from "../components";
import React, {useState, useContext, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FaceContainer } from "../containers/face";
import { FooterContainer } from "../containers/footer";
import {Background} from "../components";
import * as ROUTES from '../constants/routes';

export function Home() {
    const location = useLocation();
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    /*para el handleNav*/
    const [tab, setTab] = useState('');

    const userdata = location.state.detail
    
    useEffect(() => {
        setEmailAddress(userdata['email']);
        setPassword(userdata['password']);
        setMessage(userdata['message']);
        console.log(userdata)
    }, [location]);

    return(
        <>
            <Background>
                <FaceContainer/>
                <Form>
                    {message && <Form.Error>{message}</Form.Error>}
                    <Form.Title>{emailAddress}</Form.Title>
                    <Form.Title>{password}</Form.Title>   
                    <a href={ROUTES.MOVIES} /*Necesitamos un onClick={handleNav}*/>MOVIES</a>  
                    <a href={ROUTES.SERIES}>SERIES</a>
                    <a href={ROUTES.ANIME}>ANIME</a>      
                </Form>
            </Background>     
            
        </>
    )
};