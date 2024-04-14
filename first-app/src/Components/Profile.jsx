import React from 'react';
import classes from './Profile.module.css';

// let classes ={
//   'Content': 'Profile_Content__tD0i1',
//   'Posts': 'Profile_Posts__d6t3x',
//   'item': 'Profile_item__\+9rQN',
// }

const Profile = () => {
    return(
      <div className='{classes.Content}'>
        <div>
         <img src="https://static.vecteezy.com/system/resources/thumbnails/012/979/480/small/black-and-blue-abstract-banner-with-polygonal-pattern-template-for-your-header-and-presentation-modern-background-vector.jpg"></img>
        </div>
        <div>
          ava + descroption
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className='{classes.Posts}'>
           <div className='{classes.item}'>
             Post 1
           </div>
           <div className='{classes.item}'>
             Post 2
           </div>
           <div className='{classes.item}'>
             Post 3
           </div>
           <div className='{classes.item}'>
             Post 4
           </div>
          </div>
        </div>
      </div>
    );
  }

export default Profile;