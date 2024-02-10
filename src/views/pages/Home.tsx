import React from 'react';
import './Home.css';
//import { Link } from 'react-router-dom';
import ClipboardButton from '../../components/ClipBoardButton';
import pix from '../../assets/pix_samanta.png';
function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1>Bem vindos</h1>
        <p>Nós temos um lar cheio de amor, carinho e bens materiais. </p>
        <br></br>
        <p>Optamos por não fazer lista de presentes convencional, já que estamos terminando de mobiliar nossa casa. Caso queira nos presentear, sugerimos o pix para que possamos pagar nosso novo lar ou quem sabe uma viagem para a lua de mel, porém sinta-se à vontade para presentear da forma que preferir ☺️</p>
        <br></br>
        {/* <div className='switch'>
          <div>
            <Link to="/bridal-shower"><button className='button'>Chá da Samanta</button></Link>
          </div>
          <div>
            <Link  to="/marriage">
              <button className='button' >Casamento ♥ Samanta e Gabriel</button>
            </Link>
          </div>
        </div> */}        
      </div>
      <img src={pix} alt="Casal de noivos" className='imgPix' />
      <br></br>
      <div >
        <ClipboardButton text='00020126630014BR.GOV.BCB.PIX0111080266039820226Obrigada por contribuir S25204000053039865802BR5923Samanta Santinoni Souza6009SAO PAULO62140510FNuzrHLjS06304099E' /> 
      </div>
      <br></br>
      <p>Obrigado pelo carinho!</p>
  </div>
  );
}

export default Home;
