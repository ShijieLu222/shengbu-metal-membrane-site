import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { categoryFilters, products, type ProductCategory } from '../data/products';
import { SectionHeading } from './SectionHeading';

export function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId,
  );

  return (
    <section id="products" className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product Gallery"
          title="把工程效果先展示给客户看"
          description="先用可替换的高质量建筑图片建立版式，后续把这里全部换成公司真实案例图，官网就会更有信任感。"
        />

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categoryFilters.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={`shrink-0 border px-4 py-2 text-sm transition ${
                activeCategory === category.value
                  ? 'border-ink bg-ink text-paper'
                  : 'border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32, delay: index * 0.035 }}
              className="group overflow-hidden border border-ink/10 bg-white transition-shadow duration-300 hover:shadow-sharp"
            >
              <button
                type="button"
                onClick={() => setSelectedProductId(product.id)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-ink text-left"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-paper/80 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center bg-paper/92 text-ink opacity-0 transition group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
              <div className="p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                  {product.categoryLabel}
                </div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-ink/62">
                  {product.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/12 px-2.5 py-1 text-xs text-ink/58"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedProduct ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/86 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden bg-paper shadow-sharp"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24 }}
          >
            <button
              type="button"
              onClick={() => setSelectedProductId(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center bg-paper text-ink"
              aria-label="关闭图片"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="max-h-[70vh] w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                {selectedProduct.categoryLabel}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                {selectedProduct.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink/64">
                {selectedProduct.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}
