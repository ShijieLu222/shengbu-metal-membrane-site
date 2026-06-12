export type ProductCategory =
  | 'all'
  | 'membrane'
  | 'ebike'
  | 'stairs'
  | 'gate'
  | 'moving-gate'
  | 'railing';

export type Product = {
  id: number;
  title: string;
  category: Exclude<ProductCategory, 'all'>;
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
};

export const categoryFilters: { label: string; value: ProductCategory }[] = [
  { label: '全部', value: 'all' },
  { label: '膜结构车棚', value: 'membrane' },
  { label: '电动车车棚', value: 'ebike' },
  { label: '楼梯', value: 'stairs' },
  { label: '大门', value: 'gate' },
  { label: '电动移动门', value: 'moving-gate' },
  { label: '栏杆围栏', value: 'railing' },
];

export const products: Product[] = [
  {
    id: 1,
    title: '张拉膜结构车棚',
    category: 'membrane',
    categoryLabel: '膜结构车棚',
    description: '适合园区、厂房、社区停车区，造型轻盈，遮阳挡雨。',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    tags: ['钢结构', '停车棚', '定制跨度'],
  },
  {
    id: 2,
    title: '社区电动车充电棚',
    category: 'ebike',
    categoryLabel: '电动车车棚',
    description: '可结合充电位、排水、照明和消防安全间距进行规划。',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85',
    tags: ['充电区', '防雨', '社区工程'],
  },
  {
    id: 3,
    title: '室内铁艺楼梯',
    category: 'stairs',
    categoryLabel: '楼梯',
    description: '适合复式、别墅、商铺空间，线条简洁，结构稳固。',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85',
    tags: ['铁艺', '扶手', '空间定制'],
  },
  {
    id: 4,
    title: '庭院铁艺大门',
    category: 'gate',
    categoryLabel: '大门',
    description: '根据门洞、围墙风格和开合方式定制，兼顾安全和门面效果。',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    tags: ['庭院门', '防锈', '定制花型'],
  },
  {
    id: 5,
    title: '厂区电动移动门',
    category: 'moving-gate',
    categoryLabel: '电动移动门',
    description: '适合工厂、仓库、停车场出入口，可配置电机和门禁系统。',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85',
    tags: ['电机驱动', '出入口', '门禁'],
  },
  {
    id: 6,
    title: '阳台与楼梯栏杆',
    category: 'railing',
    categoryLabel: '栏杆围栏',
    description: '用于阳台、楼梯、露台、厂区围栏，重视安全高度与焊接细节。',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85',
    tags: ['栏杆', '围栏', '焊接'],
  },
];
