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
  sourceUrl?: string;
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
    title: '帽顶式膜结构停车棚',
    category: 'membrane',
    categoryLabel: '膜结构车棚',
    description: '白色张拉膜配合钢结构立柱，适合园区、厂房、商业停车区。',
    image:
      'https://www.168mjg.com/static/upload/image/20220819/1660874464531924.jpg',
    sourceUrl: 'https://www.168mjg.com/tingchepeng/32.html',
    tags: ['张拉膜', '停车棚', '定制跨度'],
  },
  {
    id: 2,
    title: '膜结构自行车棚',
    category: 'ebike',
    categoryLabel: '电动车车棚',
    description: '适合社区、学校、厂区的自行车和电动车集中停放区域。',
    image:
      'https://www.168mjg.com/static/upload/image/20220819/1660874670242865.jpg',
    sourceUrl: 'https://www.168mjg.com/tingchepeng/33.html',
    tags: ['电动车棚', '防雨', '社区工程'],
  },
  {
    id: 3,
    title: '铁艺旋转楼梯',
    category: 'stairs',
    categoryLabel: '楼梯',
    description: '适合复式、阁楼、商铺空间，节省占地，强调金属线条感。',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85',
    tags: ['旋转楼梯', '铁艺扶手', '空间定制'],
  },
  {
    id: 4,
    title: '室外铁艺直梯',
    category: 'stairs',
    categoryLabel: '楼梯',
    description: '适合外立面、露台、厂房和商铺二层入口，结构稳定耐用。',
    image:
      'https://www.lqrongfeng.com/upfile/images/2026/04/11/17758996886666441.png',
    sourceUrl: 'https://www.lqrongfeng.com/product_article.asp?id=1810',
    tags: ['直梯', '平台', '护栏'],
  },
  {
    id: 5,
    title: '庭院铁艺大门',
    category: 'gate',
    categoryLabel: '大门',
    description: '根据门洞、围墙风格和开合方式定制，兼顾安全和门面效果。',
    image:
      'https://www.lqrongfeng.com/upfile/images/2021/03/16/small4_16158805197690916.jpg',
    sourceUrl: 'https://www.lqrongfeng.com/product_article.asp?id=1810',
    tags: ['庭院门', '防锈', '铁艺花型'],
  },
  {
    id: 6,
    title: '厂区电动伸缩门',
    category: 'moving-gate',
    categoryLabel: '电动移动门',
    description: '适合工厂、仓库、停车场出入口，可配置电机和门禁系统。',
    image:
      'https://www.lqrongfeng.com/upfile/images/2021/03/24/16165750889595259.jpg',
    sourceUrl: 'https://www.lqrongfeng.com/product_article.asp?id=1810',
    tags: ['电机驱动', '厂区出入口', '门禁'],
  },
  {
    id: 7,
    title: '阳台与楼梯栏杆',
    category: 'railing',
    categoryLabel: '栏杆围栏',
    description: '用于阳台、楼梯、露台、厂区围栏，重视安全高度与焊接细节。',
    image:
      'https://www.lqrongfeng.com/upfile/images/2026/04/11/17758998385237257.png',
    sourceUrl: 'https://www.lqrongfeng.com/product_article.asp?id=1810',
    tags: ['栏杆', '围栏', '焊接'],
  },
  {
    id: 8,
    title: '现代铝合金车棚',
    category: 'membrane',
    categoryLabel: '膜结构车棚',
    description: '适合住宅和商铺停车位，线条简洁，可做透明板或膜材顶面。',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    tags: ['雨棚', '车位', '现代风格'],
  },
];
