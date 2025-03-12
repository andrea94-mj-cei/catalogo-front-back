import '@/css/LandingPage.css'
import  {NavLink} from "react-router"
//imagenes
import arabicperfum from '@/assets/arabicperfum.png'
import landing1 from '@/assets/landing1.webp'
import landing2 from '@/assets/landing2.webp'
import landing3 from '@/assets/landing3.webp'
import landing4 from '@/assets/landing4.webp'

const LandingPage = () => {
    return ( 
        <>
        <main className='landing-page'>
            <div>
                <img src={landing1} alt="landing-1" className='landing-1'/>
                <img src={landing4} alt="landing-4" className='landing-4'/>
            </div>
            <img src={arabicperfum} alt="arabic-perfum" className='arabic-perfum' />
            <NavLink to="catalogo"><h1 className='landing-text'>Catálogo</h1></NavLink>
            <div>
                <img src={landing2} alt="landing-2" className='landing-2'/>
                <img src={landing3} alt="landing-3" className='landing-3'/>
            </div>

        </main>
        </>
     );
}
 
export default LandingPage;