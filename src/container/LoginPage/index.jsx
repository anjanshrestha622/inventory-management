import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Col, Row } from 'antd'
import { Redirect } from 'react-router-dom'
import HelloImg from '../../assets/Images/hello.png'
import './style.scss'

function LoginPage() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  }

  const onFinish = () => {
    localStorage.setItem(
      'ims-session',
      'sdajshdajdhjahsdjahshdajsdhajdhjashdjdhajshd',
    )
    setlogin(true)
  }
  const [login, setlogin] = useState(false)
  useEffect(() => {
    const isLogin = () => localStorage.getItem('ims-session') || null
    setlogin(isLogin)
  }, [])

  if (login) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <Row style={{ background: 'gray' }}>
        <Col
          style={{
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
          }}
          xs={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <img src={HelloImg} height="75%" alt="no img" />
        </Col>

        <Col
          style={{
            background: 'gray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          xs={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
        >
          <div className="form-section">
            <h1 style={{ textAlign: 'center', padding: ' 30px 40px' }}>
              WELCOME TO LOGIN PAGE
            </h1>
            <Form
              {...layout}
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage
