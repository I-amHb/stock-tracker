import { useState } from "react"
import Header from './components/Header'
import Overview from './components/Overview'
import ProductTable from './components/ProductTable'
import AddProductForm from './components/AddProductForm';


function App() {
  
  const [showProdForm, setShowProdForm] = useState(false);
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
  console.log(totalStockValue());
  const totalProducts = () => productList.length;
  console.log(totalProducts());


  // const totalRevenue = () => { };



  return (
    <div className='w-full'>
      <Header />
      <Overview
        totalProd={totalProducts()}
        totalStockVal={totalStockValue()}
        setShowProdForm={setShowProdForm}
      />
      <ProductTable
        prod={productList}
      />

      {showProdForm && (
        <AddProductForm
        setShowProdForm={setShowProdForm}/>
      )}
    </div>
  )
}

export default App
