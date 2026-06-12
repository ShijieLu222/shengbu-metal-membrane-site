# 产品图片调研记录

本文件记录第一阶段可参考的产品视觉方向。当前代码中的图片为远程占位图，只用于版式验证；正式上线前应替换为公司自有案例图、授权图库图片，或明确可商用的素材。

## 重点图片类型

- 膜结构车棚：白色张拉膜、钢结构立柱、车辆停放场景。
- 电动车车棚：社区/园区电动车停放、充电区、防雨棚、透明顶棚。
- 铁艺楼梯：黑色铁艺扶手、室内楼梯、焊接或锻花细节。
- 大门：庭院铁艺大门、厂区门、别墅门、黑色或深灰金属门体。
- 电动移动门：厂区伸缩门、平移门、门禁出入口。
- 栏杆围栏：阳台栏杆、楼梯栏杆、厂区围栏、护栏。

## 已参考的公开页面

- 山东天硕帽顶式膜结构车棚: https://www.168mjg.com/tingchepeng/32.html
- 山东天硕膜结构自行车棚: https://www.168mjg.com/tingchepeng/33.html
- 临朐荣丰铁艺大门/护栏/电动伸缩门: https://www.lqrongfeng.com/product_article.asp?id=1810
- WilliamArchi Car Parking Canopy: https://www.williamarchi.com/product/car-parking-canopy.html
- BDiR Membrane Parking Shade Article: https://www.bdir.com/es/noticias/las-caracteristicas-basicas-y-ventajas-de-estructura-membrana-sombra-de-estacionamiento
- Pinterest Bicycle Parking Shelter Reference: https://au.pinterest.com/pin/bicycle-parking-design-with-awning--422281211880503/
- Pinterest Wrought Iron Stair Railing Reference: https://www.pinterest.com/cerrajeriaforjametal/pasamanos/
- Alibaba Spiral Wrought Iron Staircase: https://www.alibaba.com/showroom/spiral-wrought-iron-staircase.html
- Alibaba Wrought Iron Step Ladder: https://www.alibaba.com/showroom/wrought-iron-step-ladder.html
- 中国制造网铁艺大门参考: https://3g.made-in-china.com/gongying/rongyao-gz18-oKAELjlxHThO.html

## 当前页面临时图片说明

`src/data/products.ts` 中部分图片来自公开产品页面，仅用于本地设计和版式参考。正式商用上线前，建议替换为以下来源之一：

- 公司自有实拍图。
- 供应商明确授权使用的案例图。
- 可商用图库素材，并保留授权凭证。
- 由自家案例图或授权参考图重新拍摄/制作的图片。

## 替换素材建议

1. 每个品类至少准备 6-12 张真实案例图。
2. 优先横图，比例建议 `4:3` 或 `16:10`，宽度不低于 `1600px`。
3. 拍摄时保留完整结构、立柱、地面固定点和使用环境。
4. 同一个案例可以准备整体图、局部细节图、施工前后对比图。
5. 文件命名建议：`membrane-carport-community-01.jpg`、`wrought-iron-gate-villa-01.jpg`。

## 代码替换位置

- 产品图：`src/data/products.ts`
- 公司介绍图：`src/components/AboutSection.tsx`
- 首屏背景图：`src/components/HeroSection.tsx`
