import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import Marquee from '@/components/motion/Marquee';
import { TECH_STACK, TECH_CATEGORIES } from '@/constants/tech-stack';
import { TOP_SKILLS } from '@/constants/skills';

export default function TechStack() {
  const grouped = TECH_CATEGORIES.map((category) => ({
    category,
    items: TECH_STACK.filter((t) => t.category === category),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="tech-stack" className="relative z-10 bg-ink section-pad">
      {/* full-bleed marquee */}
      <div className="overflow-hidden border-y border-line py-6">
        <Marquee speed={70}>
          {TOP_SKILLS.map((t) => (
            <span key={t} className="flex items-center">
              <span className="px-8 font-serif text-3xl text-paper sm:text-5xl">{t}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="grid-shell">
        <div className="mt-20">
          <SectionHeading
            index="05"
            label="Stack"
            title="The full inventory."
            description="Everything in regular rotation, grouped by where it sits in the build."
            align="between"
          />
        </div>

        <Reveal stagger={0.05} className="mt-16 border-t border-line font-mono">
          {grouped.map((group, i) => (
            <div
              key={group.category}
              className="grid grid-cols-4 items-baseline gap-4 border-b border-line py-5 md:grid-cols-12"
            >
              <div className="col-span-4 flex items-center gap-3 md:col-span-3">
                <span className="text-xs text-signal">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[11px] uppercase tracking-label text-paper">{group.category}</span>
              </div>
              <ul className="col-span-4 flex flex-wrap gap-x-5 gap-y-2 md:col-span-9">
                {group.items.map((item) => (
                  <li
                    key={item.id}
                    className="text-sm text-paper-dim transition-colors hover:text-signal"
                    data-cursor
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
