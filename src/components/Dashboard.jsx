import Header from './Header'
import Overview from './Overview'
import ProductTable from './ProductTable'

const Dashboard = () => {
  return (
    <div className='w-full'>
        <Header />
        <Overview />
        <ProductTable />
    </div>
  )
}

export default Dashboard