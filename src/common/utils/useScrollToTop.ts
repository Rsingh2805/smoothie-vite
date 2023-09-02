import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
  // Get the current scroll position of the page
  let currentPosition = window.scrollY;

  // Calculate the distance to scroll to the top
  const scrollStep = -currentPosition / 50; // You can adjust the step value for the desired smoothness

  // Define the animateScroll function
  const animateScroll = () => {
    // Update the scroll position by the scroll step
    currentPosition += scrollStep;

    // Scroll to the new position
    window.scrollTo(0, currentPosition);

    // Request the next frame if the scroll position is not yet at the top
    if (currentPosition > 0) {
      requestAnimationFrame(animateScroll);
    }
  };

  // Start the animation
  animateScroll();
};


const useScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      scrollToTop();
    }, [pathname]);
  }
  
  export default useScrollToTop;
  