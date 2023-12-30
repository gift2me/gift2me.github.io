import React from 'react';
import  GiftList from '../components/GiftList'
import gifts from '../store/BridalShowerGifts.json'

function BridalShower() {
  return (
    <div className="BridalShower">
      <GiftList gifts={gifts}/>
    </div>
  );
}

export default BridalShower;