import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (
        // <React.Fragment> ... </React.Fragment> => <> ... </>
        <>
        <Hero>
            <Banner title="Luxurious Rooms" 
            subtitle="Delux Rooms starting at $100">
                <Link to = '/rooms' className="btn-primary">
                    Our Rooms
                </Link> 
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    )
};

export default Home;
