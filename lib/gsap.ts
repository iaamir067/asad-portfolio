'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

let registered = false;

/** Register GSAP plugins once, client-side only. */
export const registerGsap = () => {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  registered = true;
};

registerGsap();

/** Engineered easing — no bounce, mechanical settle. */
export const EASE = {
  out: 'power3.out',
  inOut: 'power2.inOut',
  expo: 'expo.out',
} as const;

export { gsap, ScrollTrigger, SplitText };
