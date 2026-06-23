import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { EXPERIENCE } from '@/constants/experience';
import { EDUCATION } from '@/constants/education';

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-ink-deep">
      <div className="grid-shell">
        <SectionHeading
          index="04"
          label="Experience"
          title="Three roles, one trajectory."
          description="Intern to mid-level, building cross-platform apps for international teams the whole way."
          align="between"
        />

        <div className="mt-16">
          {EXPERIENCE.map((role, i) => (
            <Reveal key={role.id} className="group border-t border-line">
              <div className="blueprint-grid gap-y-6 py-10">
                {/* meta rail */}
                <div className="col-span-4 md:col-span-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="label-mono text-signal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {role.current && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-signal">
                        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                        Current
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-sm text-paper">
                    {role.startDate} — {role.endDate}
                  </span>
                  <span className="label-mono">{role.duration}</span>
                  <span className="label-mono">
                    {role.location} · {role.type}
                  </span>
                </div>

                {/* detail */}
                <div className="col-span-4 md:col-span-8 md:col-start-5 flex flex-col gap-5">
                  <div>
                    <h3 className="font-serif text-2xl font-medium leading-tight text-paper sm:text-3xl">
                      {role.position}
                    </h3>
                    <p className="mt-1 font-mono text-sm uppercase tracking-wider text-signal">
                      {role.company}
                    </p>
                  </div>

                  <p className="max-w-2xl text-pretty leading-relaxed text-paper-dim">
                    {role.summary}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {role.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-paper-dim"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-signal" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {role.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="border border-line px-2.5 py-1 font-mono text-xs text-paper-faint"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          {/* education, folded in */}
          {EDUCATION.map((edu) => (
            <Reveal key={edu.id} className="border-t border-line">
              <div className="blueprint-grid gap-y-6 py-10">
                <div className="col-span-4 md:col-span-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-signal" strokeWidth={1.5} />
                    <span className="label-mono text-signal">EDU</span>
                  </div>
                  <span className="font-mono text-sm text-paper">{edu.duration}</span>
                  <span className="label-mono">{edu.location}</span>
                </div>
                <div className="col-span-4 md:col-span-8 md:col-start-5 flex flex-col gap-5">
                  <div>
                    <h3 className="font-serif text-2xl font-medium leading-tight text-paper sm:text-3xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 font-mono text-sm uppercase tracking-wider text-signal">
                      {edu.institution}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-paper-dim">
                        <span className="mt-2 h-px w-4 shrink-0 bg-signal" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
