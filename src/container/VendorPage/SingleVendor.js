import React, { useState, useEffect } from 'react'
import { Row, Form, Input, Col, Button, message, Spin } from 'antd'
import axios from 'axios'
import { useParams } from 'react-router'

function SingleVendor() {
  const [user, setUser] = useState({
    name: '',
    contact: '',
    pan_number: '',
    address: '',
    contact: '',
    purchase_total: '',
  })
  const [loading, setLoading] = useState(false)

  const { id } = useParams()
  // alert(id)
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    axios
      .get(`http://inventoryguras.herokuapp.com/vendor-detail/${id}`)
      .then((response) => {
        setUser(response.data)
        // console.log(response.data, 'singlevendor')
      })
  }, [])

  const handleSubmit = () => {
    try {
      setLoading(true)
      const response = axios.put(
        `http://inventoryguras.herokuapp.com/vendor-detail/${id}`,
        user,
      )
      if (response) {
        setLoading(false)
        message.success('vendor Added sucessfully')
        // history.push('/vendor')
      }
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
    location.href = '/vendor?q=table'
  }
  // destructing
  const { name, address, pan_number, contact, opening_balance } = user
  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <>
          <Row>
            <Col span={8} offset={1}>
              <Form.Item
                style={{
                  fontSize: '30px',
                  fontWeight: '600',
                }}
                label=" Vendor name"
              >
                <Input
                  size="large"
                  value={name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Enter Vendor name"
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
                  name="address"
                  value={address}
                  onChange={handleChange}
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
                  name="pan_number"
                  value={pan_number}
                  onChange={handleChange}
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
                  value={contact}
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
                  value={opening_balance}
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
        </>
      )}
    </div>
  )
}

export default SingleVendor
