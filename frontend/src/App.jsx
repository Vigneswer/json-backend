import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import PrismaticBurst from './components/PrismaticBurst';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const loadProducts = () => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = (product) => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => loadProducts());
  };

  const updateProduct = (id, updatedProduct) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedProduct)
    }).then(() => {
      setEditingProduct(null);
      loadProducts();
    });
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    }).then(() => loadProducts());
  };

  return (
    <div className="min-h-screen  text-white relative">
      <div className="min-h-screen   text-white fixed inset-0" style={{ width: '100%', height: '100vh' }}>
  <PrismaticBurst
    animationType="rotate3d"
    intensity={2}
    speed={0.5}
    distort={1.0}
    paused={false}
    offset={{ x: 0, y: 0 }}
    hoverDampness={0.25}
    rayCount={24}
    mixBlendMode="lighten"
    colors={['#ff007a', '#4d3dff', '#ffffff']}
  />
</div>
     <div className="relative p-10" >
        <h1 className="text-3xl text-purple-400 font-bold mb-6 text-center">Product Management</h1>
  
        <ProductForm
          addProduct={addProduct}
          editingProduct={editingProduct}
          updateProduct={updateProduct}
        />
  
        <ProductList
          products={products}
          onEdit={setEditingProduct}
          onDelete={deleteProduct}
        />
     </div>
    </div>
  );
}

export default App;
