import React from 'react';
import "../Styles/Contact.css"
import Layout from '../Components/Layout/Layout';
import ContactForm from '../Components/UI/ContactForm'
const Contact = () => {
    return (
       
            <Layout>
                <h1>Contactez nous</h1>
            <div className='contact'>
                <div className="form">
        <div className="form-top">
            <form action="Post">
            <ContactForm></ContactForm> 
            <ContactForm></ContactForm>
            </form>
        </div>
        <div className="form-bottom">
            <div className="forget-pasword"> compte </div>
            <div className="inscription-buttom"> connexion </div>
        </div>
                </div>
                </div>
            </Layout>
        
    );
}

export default Contact;
