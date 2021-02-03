import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import './style.scss'

const { Search } = Input

function Header() {
  const handleLogOut = () => {
    localStorage.removeItem('ims-session')
    window.location.replace('/login')
  }
  return (
    <>
      <div className="signInIcon">
        <Search
          className="signInIcon-Search"
          placeholder="input search text"
          enterButton="Search"
          size="large"
        />
        <div>
          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 45,
              xl: 45,
            }}
            icon={<UserOutlined />}
          />
          <button onClick={handleLogOut}>logout</button>
        </div>
      </div>
    </>
  )
}

export { Header }
