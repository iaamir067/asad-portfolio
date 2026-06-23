import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import { buildMetadata } from '@/lib/seo';
import { PAGE_METADATA } from '@/constants/seo';

const Skills = dynamic(() => import('@/components/sections/Skills'));
const Experience = dynamic(() => import('@/components/sections/Experience'));
const TechStack = dynamic(() => import('@/components/sections/TechStack'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

export const metadata: Metadata = buildMetadata({
  description: PAGE_METADATA.home.description,
  path: PAGE_METADATA.home.path,
});

export default function HomePage() {
  return (
    <main id="main-content" className="relative z-10 w-full">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  );
}
