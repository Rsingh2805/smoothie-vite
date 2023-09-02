import { keyframes } from "@emotion/react";

export const getSlide = (x: number, y: number, z: number = 0) => {
    return keyframes`
    from {
        opacity: 0;
        transform: translate3d(${x}px, ${y}px, ${z}px);
      }
      
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      
    `
}

export const slideDown = getSlide(0, -50)
export const slideUp = getSlide(0, 50)
export const slideLeft = getSlide(50, 0)
export const slideRight = getSlide(-50, 0)
export const appear = getSlide(0, 0)