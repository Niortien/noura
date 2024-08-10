import React from 'react';
import "../../Styles/Footer.css"
import { Link } from 'react-router-dom';
import Youtube from "../../Assets/Images/Logo-YouTube-rouge.png"
import Facebook from "../../Assets/Images/facebook-logo-facebook-icon-transparent-free-png.webp"
import Instagram from "../../Assets/Images/Instagram_logo_2016.svg.webp"
import Linke from "../../Assets/Images/LinkedIn_logo_initials.png"
import What from "../../Assets/Images/whatsapp-logo-icon-free-png.webp"
const Footer = () => {
    return (
        <div className='Footer'>


{/* le footer est composé de 4  colonnes */}
            {/*la première colonne du footer */}

            <div className="footer-elements">
                <div className="footer-element-up">Lien utiles</div>
                <div className="footer-element-down">
                    <Link to="#">Home</Link>
                    <Link to="#">Sinistre</Link>
                    <Link to="#"> Contact</Link>
                </div>
            </div>


{/* la  deuxième colonne du footer */}
            <div className="footer-elements">
            <div className="footer-element-up">NOS SERVICES </div>
                <div className="footer-element-down">
                    <Link to="#">Auto/Lien 1</Link>
                    <Link to="#">Lien 2</Link>
                    <Link to="#"> Famille/Lien 3</Link>
                    <Link to="#"> Epargne / Patrimoine</Link>
                    <Link to="#"> Lien 3</Link>
                </div>
            </div>

{/* la troisième colonne du footer */}

            <div className="footer-elements alone ">
            <Link to="#"> Agriculture </Link>
            </div>

{/* la  quatrième colonne du footer */}

            <div className="footer-elements socia">

            <div className="footer-element-up ">NOS RESEAUX SOCIAUX</div>
                <div className="footer-element-down social-media">
                   
                   {/* les icones du footer
                    */}
                    {/*  */}
                <div className="social-media-box"><Link to ="#">
                <img src={Instagram} alt="" />
                </Link></div>


                <div className="social-media-box"><Link to ="#">
                <img src={Youtube} alt="" />
                </Link></div>

                <div className="social-media-box"><Link to ="#">
                <img src={Facebook} alt="" />
                </Link></div>


                <div className="social-media-box"><Link to ="#">
                <img src={What} alt="" />
                </Link></div>


                <div className="social-media-box"><Link to ="#">
                <img src={Linke} alt="" />
                </Link></div>

               
                </div>

            </div>
        </div>
    );
}

export default Footer;
