'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Apple, Play, ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { PROJECTS, type Project } from '@/constants/projects';
import { getProjectImage } from '@/constants/images';

export default function Projects() {
  const section = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return;
    const trackEl = track.current;
    const pinEl = pin.current;
    if (!trackEl || !pinEl) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const distance = () => trackEl.scrollWidth - window.innerWidth;

      const tween = gsap.to(trackEl, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinEl,
          start: 'top top',
          end: () => '+=' + distance(),
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // per-panel image parallax
      const imgs = gsap.utils.toArray<HTMLElement>('[data-work-img]');
      imgs.forEach((img) => {
        const imageId = img.dataset.imageId;
        const xRange = imageId === 'liquid-canvas' ? 12 : imageId === 'my-uni' ? 3 : imageId === 'language-learning' ? 0 : 8;
        gsap.fromTo(
          img,
          { xPercent: -xRange },
          {
            xPercent: xRange,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('[data-work-panel]'),
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          },
        );
      });

      return () => tween.kill();
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section ref={section} id="work" className="relative bg-ink-deep">
      <div ref={pin} className="lg:h-screen lg:overflow-hidden">
        <div
          ref={track}
          className="flex flex-col lg:h-screen lg:w-max lg:flex-row lg:flex-nowrap lg:will-change-transform"
        >
          {/* intro panel */}
          <div className="flex shrink-0 flex-col justify-center px-5 py-24 sm:px-8 lg:h-screen lg:w-[42vw] lg:px-16 lg:py-0">
            <div className="flex items-center gap-3 text-paper-dim">
              <span className="label-mono text-signal">02</span>
              <span className="h-px w-8 bg-line-strong" />
              <span className="label-mono">Selected Work</span>
            </div>
            <h2 className="mt-6 text-balance font-serif text-5xl font-medium leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              Five builds, shipped end to end.
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-paper-dim">
              Production cross-platform apps across fintech, healthcare, edtech
              and media. Problem, approach, outcome — no filler.
            </p>
            <div className="mt-8 hidden items-center gap-3 font-mono text-xs uppercase tracking-wider text-paper-faint lg:flex">
              Scroll to traverse
              <ArrowRight className="h-4 w-4 text-signal" />
            </div>
          </div>

          {PROJECTS.map((project, i) => (
            <ProjectPanel key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const img = getProjectImage(project.id);
  const imageFigureClass = 'relative aspect-[16/10] overflow-hidden border border-line';
  const imagePositionClass =
    project.id === 'nurse-hiring'
      ? 'object-contain object-center bg-[#edf7fb]'
      : 'object-cover object-center';
  const titleBlockClass =
    project.id === 'fintech-app' ? 'mt-4' : 'mt-1';
  const descriptionClass =
    project.id === 'fintech-app'
      ? 'max-w-xl text-pretty text-[0.95rem] leading-relaxed text-paper-dim sm:text-base'
      : 'max-w-xl text-pretty leading-relaxed text-paper-dim';

  return (
    <article
      data-work-panel
      className="flex shrink-0 flex-col gap-8 border-t border-line px-5 py-20 sm:px-8 lg:h-screen lg:w-[78vw] lg:flex-row lg:items-center lg:gap-16 lg:border-l lg:border-t-0 lg:px-16 lg:py-0"
    >
      <div className="relative lg:w-[52%]">
        <span className="pointer-events-none absolute -top-10 left-0 font-serif text-[clamp(4rem,9vw,9rem)] leading-none text-paper/[0.06] lg:-top-24">
          {String(index + 1).padStart(2, '0')}
        </span>
        <figure
          data-cursor="view"
          data-cursor-label="View"
          className={imageFigureClass}
        >
          <div data-work-img data-image-id={project.id} className="relative h-full w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className={imagePositionClass}
            />
          </div>
          <figcaption className="absolute left-3 top-3 label-mono text-paper">
            {project.industry}
          </figcaption>
        </figure>
      </div>

      <div className="flex flex-col gap-5 lg:w-[48%]">
        <div className="flex items-center gap-3">
          <span className="label-mono text-signal">{project.year}</span>
          <span className="h-px w-6 bg-line-strong" />
          <span className="label-mono">{project.category}</span>
        </div>

        <div>
          <h3 className="font-serif text-3xl font-medium leading-tight text-paper sm:text-4xl lg:text-5xl">
            {project.title}
          </h3>
          <p className={`${titleBlockClass} font-mono text-sm text-paper-dim`}>{project.subtitle}</p>
        </div>

        <p className={descriptionClass}>
          {project.longDescription}
        </p>

        <div>
          <span className="label-mono">Outcomes</span>
          <ul className="mt-3 flex flex-col gap-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-paper">
                <span className="mt-2 h-px w-4 shrink-0 bg-signal" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <li key={tech} className="border border-line px-2.5 py-1 font-mono text-xs text-paper-dim">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          {project.deployment.map((store) => (
            <a
              key={store}
              href={store.includes('Apple') ? project.links.appStore : project.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="link-edge inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-paper-faint"
            >
              {store.includes('Apple') ? (
                <Apple className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Play className="h-4 w-4" strokeWidth={1.5} />
              )}
              {store}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
