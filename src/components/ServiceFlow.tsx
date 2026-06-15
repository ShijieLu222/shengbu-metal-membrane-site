import { motion } from 'framer-motion';
import { serviceSteps } from '../data/company';
import { SectionHeading } from './SectionHeading';

export function ServiceFlow() {
  return (
    <section id="process" className="bg-ink px-4 py-20 text-paper sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="从需求到安装，流程清楚更放心"
          description="客户最关心的是沟通效率、报价透明、施工质量和售后响应，流程区用来降低咨询门槛。"
          tone="dark"
        />

        <div className="grid gap-px overflow-hidden border border-paper/12 bg-paper/12 md:grid-cols-7">
          {serviceSteps.map((step, index) => (
            <motion.div
              key={step}
              className="group bg-ink p-5 transition duration-300 hover:bg-paper hover:text-ink"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.36, delay: index * 0.045 }}
            >
              <div className="text-sm text-paper/45">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="mt-10 text-lg font-semibold">{step}</div>
              <div className="mt-5 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
