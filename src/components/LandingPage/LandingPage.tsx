import './LandingPage.css';
import home from '../../assets/home.webp';
import Brands from './Brands';

const LandingPage = () => {
    return (
        <section id='landing-page'>
            <div className='landing-page_presentation'>
                <div>
                    <p>Cuidados para tu piel</p>
                    <div className='presentation-buttons'>
                        <button className='button-buyNow'>Comprar ahora</button>
                        <button className='button-readMore'>Leer más</button>
                    </div>
                </div>
                <img src={home} alt="" />
            </div>
            <div className='landing-page_brands'>
                {
                    Brands.map((brand, index) => {
                        return (
                            <div key={index}>
                                <a href={brand.link} target='_blank'>
                                    <img src={`../src/assets/brands/${brand.img}.webp`} alt={brand.name} />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default LandingPage;