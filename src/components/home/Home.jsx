import AboutUs from '../about/AboutUs';
import FAQ from '../faq/FAQ';
import Newsletter from '../newsletter/Newsletter';
import Products from '../products/Products';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='home-full max-w-7xl  flex flex-col-reverse lg:flex-row py-2'>
                    <div className="half lg:w-1/2">
                        <h1>We Ensure Best Qualties Laptops and Services all over the Country.</h1>
                        <div className='text-center mt-2'>

                            <button className="bg-black outline-none px-6 py-2 mr-4">Explore</button>
                            <button className="border-solid py-1 bg-[#615EFC]">Shop Now</button>
                        </div>

                    </div>
                    <div className="half lg:w-1/2">
                        <img src="/laptop.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <Services></Services> */}
            <Products></Products>
            <AboutUs></AboutUs>
            <FAQ></FAQ>
            <Newsletter></Newsletter>


        </div>

    );
};

export default Home;