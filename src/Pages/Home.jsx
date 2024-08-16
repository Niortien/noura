    import React from 'react';
    import "../Styles/Home.css"
    import Layout from '../Components/Layout/Layout';
    import Form from "../Components/UI/Form"
    import { IoPerson,IoAccessibility } from 'react-icons/io5';
    import img1 from "../Assets/Images/WhatsApp Image 2024-08-07 à 18.02.04_c671eef5.jpg";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Comment from '../Components/UI/Comment';
   
    

    const Home = () => {
        useEffect(() => {
            AOS.init();
          }, [])
        return (
            
            <Layout>
                <h1 className='home-open'>

            Mon application de gestion des sinistes
                </h1>
               <div className="first-part">
                <img src={img1} alt="" />
               </div>
               <div className="second-part">
                <h1 data-aos="fade-down-right" data-aos-duration="3000">MaClaimsMentine</h1>
                <div className="trait-vide"></div>
                <p> MaClaimsMentine est  une application de gestion  de sisnitre et offre conçue pour les compagnies  d'assurances opérant  dans l e domaine de l'assurance vie, IARD et d'autres .
                  <br />  Elle permet à l'entrprise de creer et de gérer  des sinistres  offres  du client . <br /> un suivi en temps reel de leur sinistres .
                    <br /> <br />
                    Vous êtes entre de bonnes mains.
                </p>
               </div>
               <div className="third-part">
                <h1 className='offer-open' data-aos="zoom-in" data-aos-duration="7000">
                    Découvrez nos meilleures offres 
                </h1>
                <div className="offer-list">
                    <div className="offer-one">
                        <div className="left">
                            <Link  to='#' className="left-box"  data-aos-duration="3000" data-aos="fade-down-right">Assrance habitation</Link>
                            <Link to='#' className="left-box" data-aos-duration="3000" data-aos="fade-down-right">Nos partenaires</Link>
                        </div>

                        <div className="right">
                            <Link  to='#' className="left-box" data-aos="fade-left" data-aos-duration="3000">Assrance santé</Link>
                            <Link to='#' className="left-box" data-aos="fade-left" data-aos-duration="3000">Rtraite</Link>
                        </div>
                    </div>

                    {/*  deuxième partie des offres */}
                    <div className="offer-one two">
                        <div className="left">
                            <Link  to='#' className="left-box" data-aos-duration="3000" data-aos="fade-down-right">Assurance Auto</Link>
                            <Link to='#' className="left-box" data-aos-duration="3000" data-aos="fade-down-right">Epargne eductaion </Link>
                        </div>

                        <div className="right">
                            <Link  to='#' className="left-box" data-aos="fade-left" data-aos-duration="3000">Assurance voyage</Link>
                            <Link to='#' className="left-box" data-aos="fade-left" data-aos-duration="3000">Elite</Link>
                        </div>
                    </div>
                    
                    
                </div>
                 {/*  le Composant des commentaires */}
                <Comment/>
               </div>
            </Layout>
            
        );
    }

    export default Home;
