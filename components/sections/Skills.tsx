import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { SKILLS } from '@/constants/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 bg-ink section-pad">
      <div className="grid-shell">
        <SectionHeading
          index="03"
          label="Capabilities"
          title="The toolkit, with the honest depth."
          description="Eight areas I work in daily. Levels reflect production use, not coursework."
          align="between"
        />

        <Reveal
          stagger={0.06}
          className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2"
        >
          {SKILLS.map((group, i) => {
            const Icon = group.icon;
            return (
              <div key={group.id} className="flex flex-col gap-5 bg-ink p-7">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-signal" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl font-medium text-paper">
                      {group.category}
                    </h3>
                  </div>
                  <span className="label-mono">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-paper-dim">
                  {group.description}
                </p>

                <ul className="flex flex-col gap-3 pt-1">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-paper">{skill.name}</span>
                        <span className="font-mono text-xs text-paper-faint">
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="h-px w-full bg-line-strong">
                        <div
                          className="h-px bg-signal"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
