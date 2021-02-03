import React, { useState } from 'react'
import { Col, Row, Input, Form, Button } from 'antd'
import axios from 'axios'

function CustomerForm() {
  const [customerForm, setCustomerForm] = useState({
    CustomerName: '',
    address: '',
    pan_num: '',
    contact: '',
    opening_balance: '',
  })
  function handleChange(e) {
    const value = e.target.value
    setCustomerForm({
      ...customerForm,
      [e.target.name]: value,
    })
  }
  // console.log(customerForm, 'helohelo')

  const handleSubmit = () => {
    axios
      .post(`http://inventoryguras.herokuapp.com/customer`, customerForm)
      .catch((err) => alert(err))
    console.log('submitted', customerForm)
  }
  return (
    <div>
      <Row>
        <Col span={8} offset={1}>
          <Form.Item
            style={{
              fontSize: '30px',
              fontWeight: '600',
            }}
            label=" Customer name"
          >
            <Input
              size="large"
              onChange={handleChange}
              name="CustomerName"
              placeholder="Enter Customer name"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={1}>
          <Form.Item
            style={{
              fontSize: '30px',
              fontWeight: '600',
              paddingLeft: '30px',
            }}
            label=" ADDRESS "
          >
            <Input
              size="large"
              onChange={handleChange}
              name="address"
              placeholder="Enter Address"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={1}>
          <Form.Item
            style={{
              fontSize: '30px',
              fontWeight: '600',
            }}
            label=" PAN NUM/VAT "
          >
            <Input
              size="large"
              onChange={handleChange}
              name="pan_num"
              placeholder="Enter Pan number"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={1}>
          <Form.Item
            style={{
              fontSize: '30px',
              fontWeight: '600',
            }}
            label=" CONTACT NUM "
          >
            <Input
              size="large"
              onChange={handleChange}
              name="contact"
              placeholder="Enter contact number"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={1}>
          <Form.Item
            style={{
              fontSize: '30px',
              fontWeight: '600',
            }}
            label=" Opening Balance "
          >
            <Input
              size="large"
              onChange={handleChange}
              name="opening_balance"
              placeholder="Enter opening balance"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col offset={4}>
          <Button
            onClick={handleSubmit}
            size="large"
            style={{
              padding: '0px 70px',
              margin: '5px',
              background: 'green',
              color: 'white',
            }}
            htmlType="submit"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CustomerForm
