function ProductItem({ product, onEdit, onDelete }) {
  return (
    <div className="bg-gray-900/40 p-5 rounded-lg shadow-lg">
      <h3 className="text-purple-400 font-bold text-xl text-center">{product.name}</h3>
      
     <div className="flex justify-evenly">
        <p className="text-purple-300 font-bold text-center">Category: {product.category}</p>
          <p className="text-purple-300 font-bold text-center">Price: ₹{product.price}</p>
          <p className="text-purple-300 font-bold text-center">Stock: {product.stock}</p>
     </div>

      {product.image && (
        <img
          src={product.image}
          alt="product"
          className="w-full h-40 object-cover rounded mt-3"
        />
      )}

      <div className="flex justify-between gap-3 mt-4">
        <button
          onClick={() => onEdit(product)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1 rounded "
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
