import ProductItem from "./ProductItem";

function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-slate-400 text-bold text-2xl font-semibold mb-4 text-center">Product List</h2>

      {products.length === 0 ? (
        <p className="text-slate-400 text-bold">No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
