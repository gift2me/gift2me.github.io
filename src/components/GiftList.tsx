import './GiftList.css';
import generateImageUrlByCaption from '../utils/ImgGenerator';
interface Gift {
  id: number;
  username: string;
  imageUrl: string;
  caption: string;
  pixUrl: string;
}

interface GiftListProps {
  gifts: Gift[];
}
  
const GiftList: React.FC<GiftListProps> = ({ gifts }) => {
  const handlePixClick = (pixUrl: string) => {
    window.open(pixUrl, '_blank', 'noopener noreferrer');
  };
  return (
    <div className="gift-list">
      {gifts.map((gift) => (
        <div key={gift.id} className="gift-post">
          <img src={generateImageUrlByCaption(gift.id.toString(), gift.caption)} alt={`Post by ${gift.username}`} />
          <div className="caption">{gift.caption}</div>
          <div className="username">Postado por {gift.username}</div>
          < button className="pix" onClick={() => handlePixClick(gift.pixUrl)}>Presentear</button>
        </div>
      ))}
    </div>
  );
};

export default GiftList;