import React from 'react';
import "../Styles/Contact.css"
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import ContactForm from '../Components/UI/ContactForm'
const Contact = () => {
    return (
       
            <Layout>
                <h1 className='incription-title'>Contactez nous</h1>
            <div className='contact'>
                <div className="form">
        <div className="form-top">
            <form action="Post">
           <input type="text"  placeholder='nom'/>
           <input type="text"  placeholder='prenom'/>
            </form>
        </div>
        <div className="form-bottom">
            <div className="forget-pasword"><Link to="#">Créer un  compte ?</Link> </div>
            <div className="inscription-buttom"><Link to="#">Connexion</Link> </div>
        </div>
                </div>
                </div>
            </Layout>
        
    );
}

export default Contact;
