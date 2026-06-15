import { motion } from 'framer-motion';
import { advantages } from '../data/company';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="做看得见细节的定制工程"
            description="官网文案先采用稳健表达，后续可以补充公司成立时间、施工区域、资质证书、真实工地照片和客户案例。"
          />
          <motion.div
            className="aspect-[4/5] overflow-hidden bg-ink"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
              alt="钢结构施工现场"
              className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </motion.div>
        </div>

        <div className="grid content-end gap-4 sm:grid-cols-2">
          {advantages.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              className="border border-ink/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:bg-paper"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Icon className="h-7 w-7 text-ink" />
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/62">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
