import style from './App.module.css';
import ControlledCarousel from './components/carousel/Carousel';
import Productdescription from './components/productdescription/Productdescription';
import Productimg from './components/productimg/Productimg';
import umbrellasbg from './assets/umbrellasbg.jpg'
import umbrellaimg from './assets/umbrellaimg.png';
import pufimg from './assets/pufimg.png'
import pufbg from './assets/pufbg.jpg'

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
          <Productimg img={umbrellasbg}/>
          <Productdescription img={umbrellaimg} title="Pufi RAIN" description="Descripcion del producto. Este es un texto simulado." buttontitle="> VER MAS"/>          
        </div>
        <div className={style.containers}>
          <Productdescription img={pufimg} title="Pufi PUFF" description="Descripcion del producto. Este es un texto simulado." buttontitle="> MAS INFO"/>          
          <Productimg img={pufbg}/>
        </div>
    </div>
  );
}

export default App;
