import React, { useState} from 'react';
import fondoMarvel from './Assets/Img/fondoMarvel.jpg'
import MarvelLogo from './Assets/Img/MarvelLogo.png'
import './Assets/styles.css'
 



const Home = () => {

    const [logo, setlogo] = useState(false);

    const handleHome = ()=>{
        setlogo(!logo)
    }

    return(
        <div>
             <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
           <img src={fondoMarvel} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
           {logo === false ?
            <div className='textHome' >
            <div className='textHome-Father' onClick={handleHome}>
           
            <h2 className='textHomeLine' >Bienvenido al <a className='hrefStyle' href='https://enmedio.com'>challenge-enmedio</a>, desarrollado por <a className='hrefStyle' href='https://sktvera.github.io/Project-Portfolio/'>JULIAN VERA!</a></h2>
             <p className='textHomeLine'>Esta aplicacion frontend esta desarrollada en <a className='hrefStyle' href='https://vitejs.dev'>Vite-React</a> la cual consume el api de marvel <a className='hrefStyle' href='https://developer.marvel.com/'>https://developer.marvel.com/</a> y se apoya de libreraias como <a className='hrefStyle' href='https://mui.com'>material ui</a> y estilos css.</p>
           
            </div>
             </div>
        :
        
            <div className='logo-Father'>
                <div className='logo' onClick={handleHome} >
            <img src={MarvelLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
            </div>
            </div>
        
        }
      
        </div>
    )

}

export default Home