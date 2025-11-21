import { useEffect, useState } from "react";

function ProductForm({ addProduct, editingProduct, updateProduct }) {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: ""
  });

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editingProduct
      ? updateProduct(product.id, product)
      : addProduct(product);

    setProduct({ name: "", category: "", price: "", stock: "", image: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-00 p-6 rounded-lg shadow-lg mb-10 max-w-xl mx-auto"
    >
      <h2 className="text-2xl text-slate-400  font-semibold mb-4 text-center">
        {editingProduct ? "Update Product" : "Add Product"}
      </h2>

      <div className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800/20 border border-gray-700 text-white"
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800/20 border border-gray-700 text-white"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800/20 border border-gray-700 text-white"
          required
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800/20 border border-gray-700 text-white"
          required
        />

        <input
          name="image"
          placeholder="Image URL (optional)"
          value={product.image}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800/20 border border-gray-700 text-white"
        />

        <button
          type="submit"
          className="bg-blue-600/30 hover:bg-blue-700/50 transition p-2 rounded font-semibold"
        >
          {editingProduct ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
