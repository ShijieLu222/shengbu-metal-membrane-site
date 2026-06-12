import { Menu, Phone } from 'lucide-react';
import { companyProfile } from '../data/company';

const navItems = [
  { label: '产品案例', href: '#products' },
  { label: '公司介绍', href: '#about' },
  { label: '服务流程', href: '#process' },
  { label: '联系方式', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/88 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="返回首页">
          <span className="grid h-9 w-9 place-items-center bg-ink text-sm font-semibold text-paper">
            胜
          </span>
          <span className="text-sm font-semibold tracking-wide">
            {companyProfile.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/70 transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-graphite md:flex"
        >
          <Phone className="h-4 w-4" />
          预约测量
        </a>

        <button
          className="grid h-10 w-10 place-items-center border border-ink/15 md:hidden"
          aria-label="打开导航"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
