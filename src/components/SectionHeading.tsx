type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <div className="mb-10 max-w-3xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.24em] ${
          isDark ? 'text-paper/50' : 'text-steel'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight sm:text-5xl ${
          isDark ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 ${
            isDark ? 'text-paper/62' : 'text-ink/62'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
