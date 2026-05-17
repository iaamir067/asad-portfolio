import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import { buildMetadata } from '@/lib/seo';
import { PAGE_METADATA } from '@/constants/seo';

const Achievements = dynamic(() => import('@/components/sections/Achievements'));
const TechStack = dynamic(() => import('@/components/sections/TechStack'));
const Education = dynamic(() => import('@/components/sections/Education'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Certifications = dynamic(() => import('@/components/sections/Certifications'));
const Blog = dynamic(() => import('@/components/sections/Blog'));
const Resume = dynamic(() => import('@/components/sections/Resume'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

export const metadata: Metadata = buildMetadata({
  description: PAGE_METADATA.home.description,
  path: PAGE_METADATA.home.path,
});

export default function HomePage() {
  return (
    <main id="main-content" className="w-full">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <TechStack />
      <Education />
      <Resume />
      <Testimonials />
      <Certifications />
      <Blog />
      <Contact />
    </main>
  );
}
