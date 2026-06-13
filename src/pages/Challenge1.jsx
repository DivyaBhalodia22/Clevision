import products from "../data/products";

export default function Challenge1() {
  const filteredProducts = products.filter(
    (product) =>
      product.inStock &&
      product.price < 10000
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

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-5">

        <h1 className="text-4xl font-bold mb-8">
          Challenge 1
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Grouped Products
          </h2>

          <pre className="bg-gray-100 p-5 rounded-xl overflow-auto">
            {JSON.stringify(
              groupedProducts,
              null,
              2
            )}
          </pre>

          <div className="mt-6 text-xl font-bold">
            Total Value:
            ₹{totalValue.toLocaleString("en-IN")}
          </div>
        </div>

      </div>
    </div>
  );
}