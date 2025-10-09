import React from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
    return (
        <div>
            <section class="bg-white py-16 text-center flex flex-col justify-center ">
  <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
    We Build <br/><span class="text-purple-500">Productive</span> Apps
  </h1>
  <p class="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mb-8">
    At <span class="font-semibold">HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
    Our goal is to turn your ideas into digital experiences that truly make an impact.
  </p>

  <div class="flex justify-center gap-4 pb-10">
    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
        alt="Get it on Google Play" 
        class="h-12 hover:scale-105 transition-transform duration-200"
      />
    </a>
    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
        alt="Download on the App Store" 
        class="h-12 hover:scale-105 transition-transform duration-200"
      />
    </a>
  </div>
  <img className='px-12 md:px-40' src={hero} alt="Mobile" />

  <section class="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-16 text-center">
  <h2 class="text-3xl sm:text-4xl font-bold mb-12">
    Trusted By Millions, Built For You
  </h2>

  <div class="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24">

    <div>
      <p class="text-lg font-normal text-white/80 mb-2">Total Downloads</p>
      <h3 class="text-5xl font-extrabold mb-2">29.6M</h3>
      <p class="text-sm font-normal text-white/70">21% More Than Last Month</p>
    </div>

    <div>
      <p class="text-lg font-normal text-white/80 mb-2">Total Reviews</p>
      <h3 class="text-5xl font-extrabold mb-2">906K</h3>
      <p class="text-sm font-normal text-white/70">46% More Than Last Month</p>
    </div>

    <div>
      <p class="text-lg font-normal text-white/80 mb-2">Active Apps</p>
      <h3 class="text-5xl font-extrabold mb-2">132+</h3>
      <p class="text-sm font-normal text-white/70">31 More Will Launch</p>
    </div>
  </div>
</section>

  </section>
        </div>
    );
};

export default Hero;