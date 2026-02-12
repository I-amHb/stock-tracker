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
          setProductList={setProductList}
          setTotalRevenue={setTotalRevenue}
        />
      )}
    </div>
  )
}

export default App
