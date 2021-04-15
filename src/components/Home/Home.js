import React from 'react';
import Contact from './Contact';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
       <main>
           <Navbar />
           <Header />
           <Features />
           <Services />
           <Testimonials />
           <Contact />
           <Footer />
       </main>
    );
};

export default Home;