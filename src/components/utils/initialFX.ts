import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

// COMPLETELY DISABLED
export function initialFX() {
  // Force enable scroll and visibility immediately
  document.body.style.overflow = 'auto';
  document.body.style.position = 'relative';
  document.body.style.transform = 'none';
  document.documentElement.style.overflow = 'auto';
  
  // Make sure navbar and social icons are visible
  const header = document.querySelector('.header') as HTMLElement;
  const socialIcons = document.querySelector('.icons-section') as HTMLElement;
  
  if (header) {
    header.style.opacity = '1';
    header.style.visibility = 'visible';
    header.style.display = 'flex';
  }
  
  if (socialIcons) {
    socialIcons.style.opacity = '1';
    socialIcons.style.visibility = 'visible';
    socialIcons.style.display = 'block';
  }
}
