import style from './App.module.css';
import ControlledCarousel from './components/carousel/Carousel';
import Productdescription from './components/productdescription/Productdescription';
import Productimg from './components/productimg/Productimg';
import Gallery from './components/gallery/Gallery';
import InputEmail from './components/inputemail/InputEmail';
import Footer from './components/footer/Footer';
import umbrellasbg from './assets/umbrellasbg.jpg';
import umbrellaimg from './assets/umbrellaimg.png';
import pufimg from './assets/pufimg.png';
import pufbg from './assets/pufbg.jpg';
import bagimg from './assets/bagimg.png';
import bagsbg from './assets/bagsbg.jpg';
import napimg from './assets/napimg.png';
import napbg from './assets/napbg.jpg';

function App() {
  return (
    <div className={style.main}>
      <ControlledCarousel/>      
        <div className={style.containers}>
          <Productimg img={umbrellasbg} button/>
          <Productdescription img={umbrellaimg} title="Pufi RAIN" description="Descripcion del producto. Este es un texto simulado." buttontitle="> VER MAS"/>          
        </div>
        <div className={style.containers}>
          <Productdescription img={pufimg} title="Pufi PUFF" description="Descripcion del producto. Este es un texto simulado." buttontitle="> VER MAS"/>          
          <Productimg img={pufbg}/>
        </div>
        <div className={style.containers}>
          <Productimg img={bagsbg}/>
          <Productdescription img={bagimg} title="Pufi CART" description="Descripcion del producto. Este es un texto simulado." buttontitle="> VER MAS"/>          
        </div>
        <div className={style.containers}>
          <Productdescription img={napimg} title="Pufi NAP" description="Descripcion del producto. Este es un texto simulado." buttontitle="> MAS INFO"/>          
          <Productimg img={napbg}/>
      </div>
        <Gallery/>
          <InputEmail/>
            <Footer/>
    </div>
  );
}

export default App;
