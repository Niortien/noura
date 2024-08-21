import React from 'react';
import Layout from '../Components/Layout/Layout';
import "../Styles/Contactf.css"
const Contactf = () => {
    return (
        <div>
           <Layout>
            <div className="contact-content">
            <div className="contact-element">
                <h1>CONTACTEZ-NOUS</h1>
                <div className="contact-info">
                J'ai eu le privilège de conseiller des couples pendant plus de trente ans, et pendant ce temps j'ai vu 
ma part de luttes conjugales. Mais ce que j'ai aussi vu, maintes et maintes fois, c'est le pouvoir de 
Dieu de transformer les relations. Lorsque deux personnes s'engagent l'une envers l'autre - et 
particulièrement lorsqu'elles s'engagent à se communiquer l'amour à travers les cinq langages 
d'amour - un changement positif se produit.
                </div>
                <div className="formu">
                    <textarea name=""   cols={50}  rows={10} id=""></textarea>
                    <div className="send-contact">Envoyer </div>
                </div>
            </div>
            </div>
           </Layout>
        </div>
    );
}

export default Contactf;
