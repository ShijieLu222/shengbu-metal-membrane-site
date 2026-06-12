import { companyProfile } from '../data/company';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-ink/55 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {companyProfile.name}. All rights
          reserved.
        </p>
        <p>膜结构车棚 · 铁艺楼梯 · 大门栏杆 · 电动移动门</p>
      </div>
    </footer>
  );
}
