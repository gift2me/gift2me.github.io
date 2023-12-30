import './GiftList.css';

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
    return (
      <div className="gift-list">
        {gifts.map((gift) => (
          <div key={gift.id} className="gift-post">
            <img src={gift.imageUrl} alt={`Post by ${gift.username}`} />
            <div className="caption">{gift.caption}</div>
            <div className="username">Postado por {gift.username}</div>
            <div className="pix"><a href={gift.pixUrl} rel="noreferrer" target="_blank">Enviar esse presente</a></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default GiftList;