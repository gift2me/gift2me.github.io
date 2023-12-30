import React from 'react';
import  GiftList from '../components/GiftList'
import gifts from '../store/MarriageGifts.json'

function Marriage() {
  return (
    <div className="Marriage">
      <GiftList gifts={gifts}/>
    </div>
  );
}

export default Marriage;