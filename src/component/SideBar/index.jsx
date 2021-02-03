import React, { useState } from 'react'
import { Menu, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import {
  EnterOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  RetweetOutlined,
  SolutionOutlined,
  UpOutlined,
  FrownOutlined,
  ContactsOutlined,
  IdcardOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Title } = Typography

function SideBar() {
  const [toggle, setToggle] = useState(false)

  const toggleCollapsed = () => {
    setToggle(true)
  }

  return (
    <>
      <div className="logo" style={{ width: 256 }} />
      <Title level={3} style={{ color: 'white', padding: '0px 30px' }}>
        Inventory Manager
      </Title>
      <Menu
        defaultOpenKeys={['sub1']}
        inlineCollapsed={toggle}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['13']}
      >
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {toggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}

        <Menu.Item key="1" icon={<SettingOutlined />}>
          <Link to="/">DashBoard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          <Link to="/item">Item</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ContactsOutlined />}>
          <Link to="/vendor">Vendor</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to="/customer">Customer</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<IdcardOutlined />}>
          <Link to="/purchase">Purchase</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<FrownOutlined />}>
          <Link to="/loss-damage">Loss & damage</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<UpOutlined />}>
          <Link to="/sales">Sales</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<DownOutlined />}>
          <Link to="/sales-return">Sales Return</Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<EnterOutlined />}>
          <Link to="/purchase-return">Purchase Return</Link>
        </Menu.Item>
        <Menu.Item key="11" icon={<RetweetOutlined />}>
          <Link to="/stock">Stock </Link>
        </Menu.Item>
        <Menu.Item key="12" icon={<SolutionOutlined />}>
          <Link to="/rack">Rack</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export { SideBar }
