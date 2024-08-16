import React from 'react';
import CommentData from '../../Assets/Images/Data/Comments';
import CommentDetails from './CommentDetails';

import {Link} from "react-router-dom"
const Comment = () => {
    return (
        <div className='content-comment'>
            <h1 className='comment-title'>Avis des utilisateurs</h1>
            <div className='comment-container'>
            {CommentData.map((item) => (
                <CommentDetails commentPath={item.Imgpath} commentNom={item.Nom} Poste={item.Poste}  commentaire={item.Commentaire} />
      ))}
       <div className='comment-bottom' >
                <Link className='comment-option' to="#" >plus d'option</Link>
            </div>
            </div>
           
        </div>
    );
}

export default Comment;
