import React from 'react';
import "../../Styles/commentdetails.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
const CommentDetails = ({commentPath, commentNom, Poste, commentaire,}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
       <div className="">

<div className='commentdetails' data-aos="zoom-in" data-aos-duration="3000">
            <div className="comment-left" >
                <img src={commentPath} alt="" />
            </div>
            <div   className="comment-right"   >
                <div className="comment-right-name"><h2>{commentNom}</h2></div>
                <div className="comment-right-comment"><p>{commentaire}</p></div>
            </div>
        </div>
       </div>
    );
}

export default CommentDetails;
