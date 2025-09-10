
import DashboardLayout from '../layouts/DashboardLayout'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <DashboardLayout activeMenu={'dashboard'}>
      Home
      <Link to={'/expense'} >Expense</Link>
      <Link to={'/income'} >Income</Link>
    </DashboardLayout>
  )
}

export default Dashboard