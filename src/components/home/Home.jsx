import AboutUs from '../about/AboutUs';
import Newsletter from '../newsletter/Newsletter';
import Products from '../products/Products';
import Services from '../services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='home-full'>
                    <div className="half">
                        <h1>We Ensure Best Qualties Laptops and Services all over the Country.</h1>
                    </div>
                    <div className="half">
                        <img src="/laptop.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <Services></Services> */}
            <Products></Products>
            <AboutUs></AboutUs>
            <Newsletter></Newsletter>


        </div>
        
    );
};

export default Home;