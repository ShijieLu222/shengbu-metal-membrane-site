import { ArrowRight, Ruler, Shield, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyProfile } from '../data/company';

const metrics = [
  { value: '7+', label: '主营品类' },
  { value: '1站式', label: '测量设计安装' },
  { value: '本地化', label: '快速沟通施工' },
];

const featureIcons = [
  { label: '定制测量', icon: Ruler },
  { label: '结构稳固', icon: Shield },
  { label: '安装维护', icon: Wrench },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-ink text-paper">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 grayscale"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/35" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl pt-12"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-paper/70">
            {companyProfile.slogan}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-8xl">
            {companyProfile.name}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-paper/76 sm:text-lg">
            {companyProfile.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              查看产品案例
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition hover:border-paper hover:bg-paper/10"
            >
              联系上门测量
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4 border-t border-paper/20 pt-6 md:grid-cols-[1.2fr_1fr]">
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-semibold">{metric.value}</div>
                <div className="mt-1 text-xs text-paper/60">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {featureIcons.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 border border-paper/20 px-3 py-2 text-xs text-paper/72"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
