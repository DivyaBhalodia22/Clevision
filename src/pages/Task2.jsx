import { useMemo, useState } from "react";
import products from "../data/products";

export default function Task2() {
const [ascending, setAscending] = useState(true);

// Challenge 1

const filteredProducts = products.filter(
(product) => product.inStock && product.price < 10000
);

const groupedProducts = filteredProducts.reduce(
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

const totalValue = filteredProducts.reduce(
(sum, product) => sum + product.price,
0
);

// Challenge 2

const sortedProducts = useMemo(() => {
return [...products]
.filter((product) => product.inStock)
.sort((a, b) =>
ascending
? a.price - b.price
: b.price - a.price
);
}, [ascending]);

return ( <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-lime-50 py-16"> <div className="max-w-7xl mx-auto px-5">

```
    {/* Page Header */}

    <div className="text-center mb-14">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        JavaScript Challenges
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        Challenge 1 & Challenge 2 Solutions
      </p>
    </div>

    {/* Challenge 1 */}

    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12">

      <div className="flex items-center gap-3 mb-8">
        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>

        <h2 className="text-3xl font-bold">
          Challenge 1
        </h2>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-gradient-to-r from-lime-50 to-lime-100 rounded-2xl p-6">
          <h3 className="text-gray-500">
            Filtered Products
          </h3>

          <p className="text-4xl font-bold mt-2">
            {filteredProducts.length}
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
          <h3 className="text-gray-500">
            Categories
          </h3>

          <p className="text-4xl font-bold mt-2">
            {Object.keys(groupedProducts).length}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
          <h3 className="text-gray-500">
            Total Value
          </h3>

          <p className="text-4xl font-bold mt-2">
            ₹{totalValue.toLocaleString("en-IN")}
          </p>
        </div>

      </div>

      {/* JSON Output */}

      <div>
        <h3 className="font-semibold text-lg mb-4">
          Grouped Products
        </h3>

        <pre className="bg-gray-900 text-green-400 p-6 rounded-2xl overflow-auto text-sm">
          {JSON.stringify(groupedProducts, null, 2)}
        </pre>
      </div>

    </div>

    {/* Challenge 2 */}

    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">

        <div>
          <h2 className="text-3xl font-bold">
            Challenge 2
          </h2>

          <p className="text-gray-500 mt-2">
            Dynamic Product Card Grid
          </p>
        </div>

        <button
          onClick={() => setAscending(!ascending)}
          className="
            px-7
            py-3
            rounded-full
            bg-black
            text-white
            font-medium
            shadow-lg
            hover:shadow-2xl
            hover:scale-105
            hover:bg-gray-900
            transition-all
            duration-300
          "
        >
          Sort By Price {ascending ? "↑" : "↓"}
        </button>

      </div>

      {/* Product Grid */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {sortedProducts.map((product) => (
          <div
            key={product.name}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-md
              hover:shadow-2xl
              hover:-translate-y-3
              transition-all
              duration-500
            "
          >

            {/* Hover Glow */}

            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                bg-gradient-to-br
                from-lime-50
                via-transparent
                to-blue-50
              "
            />

            <div className="relative z-10">

              <div className="flex justify-between items-center mb-6">

                <span
                  className="
                    px-4
                    py-1.5
                    rounded-full
                    bg-lime-100
                    text-lime-700
                    text-xs
                    font-semibold
                    capitalize
                  "
                >
                  {product.category}
                </span>

                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-lime-600 transition-colors">
                {product.name}
              </h3>

              <p className="mt-4 text-3xl font-extrabold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <button
                className="
                  mt-6
                  w-full
                  py-3
                  rounded-xl
                  bg-black
                  text-white
                  font-medium
                  opacity-0
                  translate-y-4
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                "
              >
                View Product
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>

  </div>
</div>


);
}
