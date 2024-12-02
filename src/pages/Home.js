import Wedding from '../assets/Tarjeta Boda.png';
import FraseWedding from '../assets/Frase Boda.png';
import HorarioWedding from '../assets/Horario Boda.png';
import SalonWedding from '../assets/Salon Boda.png';
import DressCodeWedding from '../assets/DressCode Boda.png';
import MusicWedding from '../assets/Musica Boda.png';
import RegalosWedding from '../assets/Regalos Boda.png';
import FotosWedding from '../assets/Fotos Boda.png';
import FinalWedding from '../assets/Final Boda.png';

function Inicio() {
  return (
    <div class="main-container">
      <div class="top-div">
      </div>
      <div class="middle-div">
      <img src={Wedding} alt="Invitacion boda de Estefi y Cristian" width="400"/>
        <audio controls>
        <source src="/Christina-Perri-A-Thousand-Years.mp3" type="audio/mpeg" />
          Tu navegador no soporta el reproductor de audio.
        </audio>
      <img src={FraseWedding} alt="Invitacion boda de Estefi y Cristian" width="400"/>
      <img src={HorarioWedding} alt="Invitacion boda de Estefi y Cristian" width="400"/>
      <img src={SalonWedding} alt="Invitacion boda de Estefi y Cristian" width="400"/>
      <a href='https://maps.app.goo.gl/MwEySygyjPYy24Nt5' target='_blank' rel='noreferrer'><button className='botones'>¿Cómo llegar?</button></a>
      <img src={DressCodeWedding} alt="Invitacion boda de Estefi y Cristian" width="400"/>
      <a href='https://maps.app.goo.gl/MwEySygyjPYy24Nt5' target='_blank' rel='noreferrer'><button className='botones'>Confirmar asistencia aquí</button></a>
      <img src={MusicWedding} alt="Invitacion boda de Estefi y Cristian" width="400"/><a href='https://maps.app.goo.gl/MwEySygyjPYy24Nt5' target='_blank' rel='noreferrer'><button className='botones'>Recomendar</button></a>
      <img src={RegalosWedding} alt="Invitacion boda de Estefi y Cristian" width="400"/>
      <img src={FotosWedding} alt="Invitacion boda de Estefi y Cristian" width="400"/>
      <a href='https://maps.app.goo.gl/MwEySygyjPYy24Nt5' target='_blank' rel='noreferrer'><button className='botones'>Álbum Digital</button></a>
      <img src={FinalWedding} alt="Invitacion boda de Estefi y Cristian" width="400"/>
      </div>
      <div class="bottom-div"></div>
    </div>
  );
}

export default Inicio;
