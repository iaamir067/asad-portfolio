import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal, RevealText } from '@/components/motion/Reveal';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { ACHIEVEMENTS } from '@/constants/achievements';
import { LANGUAGES } from '@/constants/languages';
import { IMAGES } from '@/constants/images';

export default function About() {
  return (
    <section id="about" className="relative z-10 section-pad">
      <div className="grid-shell">
        <SectionHeading
          index="01"
          label="About"
          title="I build mobile products that reach real users."
          description="Two plus years shipping cross-platform apps to the App Store and Play Store for clients across four countries."
          align="between"
        />

        <div className="mt-16 blueprint-grid gap-y-12">
          {/* portrait + facts */}
          <div className="col-span-4 flex flex-col gap-6">
            <Reveal className="relative overflow-hidden border border-line">
              <Image
                src={IMAGES.profile.src}
                alt={IMAGES.profile.alt}
                width={IMAGES.profile.width}
                height={IMAGES.profile.height}
                className="h-auto w-full"
                priority={false}
              />
              <span className="absolute left-3 top-3 label-mono text-paper">
                FIG. 01
              </span>
            </Reveal>

            <Reveal stagger={0.08} className="flex flex-col divide-y divide-line border-y border-line">
              <FactRow k="Based in" v={PERSONAL_INFO.location} />
              <FactRow k="Experience" v={`${PERSONAL_INFO.yearsOfExperience} years`} />
              <FactRow k="Status" v={PERSONAL_INFO.availability} />
              <FactRow
                k="Languages"
                v={LANGUAGES.map((l) => l.name).join(', ')}
              />
            </Reveal>
          </div>

          {/* narrative */}
          <div className="col-span-4 md:col-span-7 md:col-start-6 flex flex-col gap-8">
            <RevealText
              as="p"
              className="text-balance font-serif text-2xl leading-snug text-paper sm:text-3xl"
            >
              {PERSONAL_INFO.heroTagline}
            </RevealText>

            <Reveal stagger={0.12} className="flex flex-col gap-5">
              {PERSONAL_INFO.introParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="max-w-2xl text-pretty text-base leading-relaxed text-paper-dim"
                >
                  {para}
                </p>
              ))}
            </Reveal>

            <Reveal
              stagger={0.1}
              className="mt-2 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2"
            >
              {ACHIEVEMENTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex flex-col gap-3 bg-ink p-6">
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-signal" strokeWidth={1.5} />
                      <span className="label-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-medium leading-tight text-paper">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-paper-dim">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3">
      <span className="label-mono">{k}</span>
      <span className="text-right font-mono text-sm text-paper">{v}</span>
    </div>
  );
}
