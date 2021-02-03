import React from 'react'
import { Col, Row, Input, Form, Button } from 'antd'
function vendorForm() {
  return (
    <div>
      <Row>
        <Col span={8} offset={1}>
          <Form.Item
            style={{
              fontSize: '30px',
              fontWeight: '600',
            }}
            label=" Vendor Name"
          >
            <Input size="large" placeholder="Enter vendor name" />
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
            <Input size="large" placeholder="Enter Address" />
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
            <Input size="large" placeholder="Enter Pan number" />
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
            <Input size="large" placeholder="Enter contact number" />
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
            <Input size="large" placeholder="Enter opening balance" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col offset={4}>
          <Button
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

export default vendorForm
