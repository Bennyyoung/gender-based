import { Layout, Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom' 

const { Header } = Layout

export const Navigation = () => {
 return (
  <>
   <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
     <Menu.Item key="1">
      <Link to="/">
       Home
      </Link>
     </Menu.Item>

     <Menu.Item key="2">
      <Link to="/report">
       Report Incident
      </Link>
     </Menu.Item>

     <Menu.Item key="3">
      <Link to="/contact">
       Contact
      </Link>
     </Menu.Item>
    </Menu>
   </Header>
  </>
 )
}