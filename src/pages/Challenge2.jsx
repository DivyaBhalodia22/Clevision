import { useMemo, useState } from "react";
import products from "../data/products";

export default function Challenge2() {
  const [ascending, setAscending] = useState(true);

  // Challenge 1

  const filteredProducts = products.filter(
    (product) => product.inStock && product.price < 10000
  );

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }

    acc[product.category].push({
      name: product.name,
      price: product.price,
    });

    return acc;
  }, {});

  const totalValue = filteredProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  // Challenge 2

  const inStockProducts = useMemo(() => {
    return [...products]
      .filter((product) => product.inStock)
      .sort((a, b) =>
        ascending
          ? a.price - b.price
          : b.price - a.price
      );
  }, [ascending]);

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-5">

        {/* Challenge 1 */}

        <div className="bg-white rounded-3xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Challenge 1 Result
          </h2>

          <pre className="bg-gray-100 p-5 rounded-xl overflow-auto text-sm">
            {JSON.stringify(groupedProducts, null, 2)}
          </pre>

          <div className="mt-5 text-xl font-semibold">
            Total Value: ₹{totalValue.toLocaleString("en-IN")}
          </div>
        </div>

        {/* Challenge 2 */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <h2 className="text-3xl font-bold">
            Product Cards
          </h2>

          <button
            onClick={() => setAscending(!ascending)}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Sort by Price (
            {ascending ? "Ascending ↑" : "Descending ↓"}
            )
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {inStockProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">

                <span className="px-3 py-1 rounded-full bg-lime-100 text-lime-700 text-xs font-medium capitalize">
                  {product.category}
                </span>

              </div>

              <h3 className="text-xl font-semibold mb-3">
                {product.name}
              </h3>

              <p className="text-2xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}