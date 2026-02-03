import { useState } from "react"
import Dashboard from "./components/Dashboard";


function App() {

  const [productList, setProductList] = useState([
    {
      id: '1',
      name: 'Lipton Pack',
      Price: 950,
      quantity:20,
      threshold: 5,

    }
  ]);

  const totalProducts = ()=>{
    productList.length
  };
  const totalStockValue = ()=>{};
  const totalRevenue = ()=>{};



  return (
    <>
    <Dashboard />
    </>
  )
}

export default App
