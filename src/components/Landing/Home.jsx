import React, { useRef, useEffect } from 'react';
import Navbar from '../navebar/Navbar';
import Center from '../center/Center';
import gsap from 'gsap';
import photo1 from '/src/assets/images/center-hero-image.jpg'

function Home({ OpenMenu, setOpenMenu }) {
  const backRef = useRef();

  useEffect(() => {
    // Create a media query for 'lg' screens (1024px and above)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    console.log(mediaQuery)

    const animateBackground = () => {
      gsap.fromTo(
        backRef.current,
        { backgroundSize: '140%' }, 
        { backgroundSize: '100%', duration: 2.5, ease: "power2.out", delay: 1.7 } 
      );
    };

    // Check if the media query matches and run the animation
    if (mediaQuery.matches) {
      animateBackground();
    }

    // Add event listener for media query change
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        animateBackground();
      }
    });

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', () => {});
    };
  }, []);

  return (
    <div
      ref={backRef}
      className={`lg:bg-[#111] w-full h-screen xl:bg-cover bg-cover lg:bg-${photo1} bg-center bg-no-repeat bg-hero-image text-white leading-none relative`}
    >
      <Navbar OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
      <Center />
    </div>
  );
}

export default Home;
