import { useState } from "react"
import Header from './components/Header'
import Overview from './components/Overview'
import ProductTable from './components/ProductTable'
import AddProductForm from './components/AddProductForm';
import CheckoutForm from "./components/CheckoutForm";


function App() {

  const [showProdForm, setShowProdForm] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [selectedProductForCheckout, setSelectedProductForCheckout] = useState(null);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [productList, setProductList] = useState([
  {
    id: '1',
    name: 'Lipton Pack',
    price: 950,
    quantity: 40,
    threshold: 5,
  },
  {
    id: '2',
    name: 'Rice',
    price: 10000,
    quantity: 4,
    threshold: 5,
  },
  {
    id: '3',
    name: 'Indomie Noodles (Carton)',
    price: 7500,
    quantity: 25,
    threshold: 10,
  },
  {
    id: '4',
    name: 'Golden Morn',
    price: 3200,
    quantity: 18,
    threshold: 5,
  },
  {
    id: '5',
    name: 'Peak Milk (Tin)',
    price: 1200,
    quantity: 60,
    threshold: 15,
  },
  {
    id: '6',
    name: 'Sugar (1kg)',
    price: 1800,
    quantity: 12,
    threshold: 5,
  },
  {
    id: '7',
    name: 'Vegetable Oil (5L)',
    price: 8500,
    quantity: 9,
    threshold: 3,
  },
]);

  const totalStockValue = () => {
    let productPriceSum = 0;
    for (let i = 0; i < productList.length; i++) {
      productPriceSum = productPriceSum + (productList[i].price * productList[i].quantity);
    }
    return productPriceSum;
  };
  const totalProducts = () => productList.length;
  // const totalRevenue = () => {};

  const openCheckoutForProduct = (product) => {
    setSelectedProductForCheckout(product);
    setShowCheckoutForm(true)
  }



  return (
    <div className='w-full'>
      <Header />
      <Overview
        totalProd={totalProducts()}
        totalStockVal={totalStockValue()}
        totalRevenue={totalRevenue}
        setShowProdForm={setShowProdForm}
        setShowCheckoutForm={setShowCheckoutForm}
        setSelectedProductForCheckout={setSelectedProductForCheckout}
      />
      <ProductTable
        prod={productList}
        onCheckout={openCheckoutForProduct}
      />

      {showProdForm && (
        <AddProductForm
          setShowProdForm={setShowProdForm}
          setProductList={setProductList} />
      )}

      {showCheckoutForm && (
        <CheckoutForm
          isOpen={showCheckoutForm}
          onClose={() => setShowCheckoutForm(false)}
          preSelectedProduct={selectedProductForCheckout}
          prod={productList}
          setProductList={setProductList}
          setTotalRevenue={setTotalRevenue}
          onCheckout={openCheckoutForProduct}
        />
      )}
    </div>
  )
}

export default App
