import { useMemo, useState } from "react";
import products from "../data/products";

export default function Task2() {
  const [ascending, setAscending] =
    useState(true);

  /* Challenge 1 */

  const filteredProducts = products.filter(
    (product) =>
      product.inStock &&
      product.price < 10000
  );

  const groupedProducts =
    filteredProducts.reduce(
      (acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }

        acc[product.category].push({
          name: product.name,
          price: product.price,
        });

        return acc;
      },
      {}
    );

  const totalValue =
    filteredProducts.reduce(
      (sum, product) =>
        sum + product.price,
      0
    );

  /* Challenge 2 */

  const sortedProducts = useMemo(() => {
    return [...products]
      .filter((product) => product.inStock)
      .sort((a, b) =>
        ascending
          ? a.price - b.price
          : b.price - a.price
      );
  }, [ascending]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-5">

        {/* PAGE TITLE */}

        <h1 className="text-5xl font-bold text-center mb-12">
          JavaScript Challenges
        </h1>

        {/* CHALLENGE 1 */}

        <div className="bg-white rounded-3xl p-8 shadow mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Challenge 1
          </h2>

          <p className="mb-4 text-gray-600">
            Filter, Group & Calculate Total
          </p>

          <pre className="bg-gray-100 p-5 rounded-xl overflow-auto">
            {JSON.stringify(
              groupedProducts,
              null,
              2
            )}
          </pre>

          <div className="mt-5 text-xl font-bold">
            Total Value :
            ₹
            {totalValue.toLocaleString(
              "en-IN"
            )}
          </div>

        </div>

        {/* CHALLENGE 2 */}

        <div className="bg-white rounded-3xl p-8 shadow">

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

            <h2 className="text-3xl font-bold">
              Challenge 2
            </h2>

            <button
              onClick={() =>
                setAscending(
                  !ascending
                )
              }
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
            >
              Sort By Price
              {" "}
              {ascending
                ? "↑"
                : "↓"}
            </button>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {sortedProducts.map(
              (product) => (
                <div
                  key={product.name}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-lime-100 text-lime-700 text-sm capitalize">
                    {product.category}
                  </span>

                  <h3 className="text-xl font-semibold mt-4">
                    {product.name}
                  </h3>

                  <p className="text-2xl font-bold mt-2">
                    ₹
                    {product.price.toLocaleString(
                      "en-IN"
                    )}
                  </p>
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </div>
  );
}