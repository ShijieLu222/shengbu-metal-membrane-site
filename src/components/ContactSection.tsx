import { MapPin, MessageCircle, Phone, Ruler } from 'lucide-react';
import { companyProfile } from '../data/company';
import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  const contactItems = [
    { label: '联系电话', value: companyProfile.phone, icon: Phone },
    { label: '微信', value: companyProfile.wechat, icon: MessageCircle },
    { label: '服务区域', value: companyProfile.serviceArea, icon: MapPin },
    { label: '量尺寸费用', value: companyProfile.measuringFee, icon: Ruler },
    { label: '工厂地址', value: companyProfile.factoryAddress, icon: MapPin },
    { label: '门店展厅', value: companyProfile.showroomAddress, icon: MapPin },
  ];

  return (
    <section id="contact" className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <SectionHeading
          eyebrow="Contact"
          title="把尺寸和现场照片发来，先沟通方案"
          description="仅承接江浙沪区域项目。可先发送现场照片、尺寸、安装位置和期望样式，我们根据场地情况沟通膜结构、楼梯、大门、栏杆等定制方案。"
        />

        <div className="border border-ink/10 bg-white p-6">
          <div className="space-y-4">
            {contactItems.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex gap-4 border-b border-ink/8 pb-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-paper">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-ink/50">{label}</div>
                  <div className="mt-1 font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="tel:13341923292"
            className="mt-6 inline-flex w-full items-center justify-center bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-graphite"
          >
            立即咨询
          </a>
        </div>
      </div>
    </section>
  );
}
