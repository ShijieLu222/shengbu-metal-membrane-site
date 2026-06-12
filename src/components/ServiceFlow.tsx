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
        />

        <div className="grid gap-px overflow-hidden border border-paper/12 bg-paper/12 md:grid-cols-7">
          {serviceSteps.map((step, index) => (
            <div key={step} className="bg-ink p-5">
              <div className="text-sm text-paper/45">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="mt-10 text-lg font-semibold">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
