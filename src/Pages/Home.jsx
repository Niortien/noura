    import React from 'react';
    import "../Styles/Home.css"
    import Layout from '../Components/Layout/Layout';
    import Form from "../Components/UI/Form"
    import { IoPerson,IoAccessibility } from 'react-icons/io5';
    import img1 from "../Assets/Images/pointb.png"
    import img2 from "../Assets/Images/illustrations.png"
    

    const Home = () => {
        return (
            
            <Layout>
                <div className="part-top">
                <div className="part-left">
                    <div className="part-left-top">
                        <h1>MaClaimsmentine</h1>
                    </div>
                    <div className="part-left-middle">
                        <h2>Mon application pour la <br /> gestion </h2>
                    </div>
                </div>
                <div className="part-right">
                    <div className="part-right-top">
                        <img src={img1} alt="" />
                    </div>
                    <div className="part-right-bottom">
                    <img src={img2} alt="" />
                    </div>
                </div>
                </div>
                <div className="part-top"></div>
                <div className="part-top"></div>
            </Layout>
            
        );
    }

    export default Home;
