import React from 'react';
import BannerAnimation from '../assets/hero.json'
import Lottie from 'lottie-react';
const Banner = () => {
    return (
      <>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">

            {/* Banner Animation */}

            <Lottie animationData={BannerAnimation}/>

            <div>
              <h1 className="text-5xl font-bold">Apply Your Job!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Banner;