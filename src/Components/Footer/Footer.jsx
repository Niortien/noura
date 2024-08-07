import React from 'react';
import "../../Styles/Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer'>


{/* le footer est composé de 4  colonnes */}
            {/*la première colonne du footer */}

            <div className="footer-elements">
                <div className="footer-element-up">Lien utiles</div>
                <div className="footer-element-down">
                    <Link to="#">Lien 1</Link>
                    <Link to="#">Lien 2</Link>
                    <Link to="#"> Lien 3</Link>
                </div>
            </div>


{/* la  deuxième colonne du footer */}
            <div className="footer-elements">
            <div className="footer-element-up">Lien utiles</div>
                <div className="footer-element-down">
                    <Link to="#">Lien 1</Link>
                    <Link to="#">Lien 2</Link>
                    <Link to="#"> Lien 3</Link>
                    <Link to="#"> Lien 3 jygjbgg</Link>
                    <Link to="#"> Lien 3</Link>
                </div>
            </div>

{/* la troisième colonne du footer */}

            <div className="footer-elements alone ">
            <Link to="#"> Lien unique </Link>
            </div>

{/* la  quatrième colonne du footer */}

            <div className="footer-elements socia">

            <div className="footer-element-up ">Lien utiles</div>
                <div className="footer-element-down social-media">
                   
                <div className="social-media-box"><Link to ="#"></Link></div>

               
                </div>

            </div>
        </div>
    );
}

export default Footer;
