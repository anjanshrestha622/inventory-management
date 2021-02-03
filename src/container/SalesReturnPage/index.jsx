import React, { useEffect, useState, useRef } from 'react'
import { Typography } from 'antd'
import { useReactToPrint } from 'react-to-print'
import axios from 'axios'
import { Input, Tabs, Row, Col, Form, Table, Select } from 'antd'

const { TabPane } = Tabs
const { Title } = Typography
const columns = [
  {
    title: 'S.N',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Item Name',
    dataIndex: 'item_name',
    key: 'name',
  },
  {
    title: 'Goodown/rack',
    dataIndex: 'Goodown',
    key: 'code',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'local_name',
  },

  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'iunit',
    sorter: {
      compare: (a, b) => a.item_price - b.item_price,
    },
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    key: 'limit',
  },
  {
    title: ' Total',
    dataIndex: 'total',
    key: 'price',
  },
]

const purchaseListTable = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'name',
  },
  {
    title: 'Vendor Name',
    dataIndex: 'name',
    key: 'age',
  },
  {
    title: 'Voucher type(Purchase)',
    dataIndex: 'voucher_type',
    key: 'address',
  },
  {
    title: 'Voucher no',
    dataIndex: 'voucher_type',
    key: 'address',
  },
  {
    title: 'Bill no ',
    dataIndex: 'voucher_type',
    key: 'address',
  },
  {
    title: 'Total',
    dataIndex: 'voucher_type',
    key: 'address',
  },
]

function SalesPage() {
  const [itemData, setItemData] = useState([])
  const [loading, setLoading] = useState(false)
  const Purchase_bill = useRef()

  const handlePrint = useReactToPrint({
    content: () => Purchase_bill.current,
  })

  useEffect(() => {
    const source = axios.CancelToken.source()

    try {
      setLoading(true)
      axios.get('http://inventoryguras.herokuapp.com/item/').then((repos) => {
        setItemData(repos.data)
        // console.log(repos.data,'helo')
      })
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
    return () => {
      source.cancel()
    }
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title level={2} style={{ color: 'gray', padding: '  5px 30px' }}>
          Sales Details
        </Title>
        <button
          onClick={handlePrint}
          style={{
            background: 'green',
            color: 'white',
            height: '40px',
            margin: '5px 15px',
          }}
        >
          Generate Report
        </button>
      </div>
      <div
        ref={Purchase_bill}
        style={{ padding: '0px 30px' }}
        className="card-container"
      >
        <Tabs type="card">
          <TabPane tab="Sales Voucher" key="1">
            <Row>
              <Col span={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                    paddingLeft: '60px',
                  }}
                  label=" Date"
                >
                  <Input size="large" placeholder="Enter Date" />
                </Form.Item>
              </Col>
              <Col span={8} offset={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                  }}
                  label="Voucher no"
                >
                  <Input size="large" placeholder="Enter Voucher no" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                  }}
                  label=" Voucher Type"
                >
                  <Input
                    size="large"
                    value={'Sales Return'}
                    placeholder="Sales and Sales Return"
                  />
                </Form.Item>
              </Col>
              <Col span={8} offset={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                    paddingLeft: '35px',
                  }}
                  label="Bill no"
                >
                  <Input size="large" placeholder="Enter Voucher no" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                    paddingLeft: '20px',
                  }}
                  label="Sales Name"
                >
                  <Input size="large" placeholder="Enter Sales name" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                    paddingLeft: '40px',
                  }}
                  label="Contact"
                >
                  <Input size="large" placeholder="Enter Contact" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                    paddingLeft: '40px',
                  }}
                  label="Address"
                >
                  <Select size="large">
                    <Select.Option value="1">Kathmandu</Select.Option>
                    <Select.Option value="2">Bhaktpur</Select.Option>
                    <Select.Option value="3">Lalitpur</Select.Option>
                    <Select.Option value="4">Kritipur</Select.Option>
                    <Select.Option value="4">Biratnagar</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ width: '100%', background: 'white' }}>
              {loading && (
                <Table
                  style={{ width: '100%' }}
                  dataSource={itemData}
                  columns={columns}
                />
              )}
              <Col span={12} offset={10}>
                <p>Total</p>
              </Col>
              <Col span={12} offset={10}>
                <p>Discount</p>
              </Col>
              <Col span={14} offset={10}>
                <p>Total after discount</p>
              </Col>
              <Col span={10} offset={8}>
                <p>Vat amount(auto calculate 13% of total after discount)</p>
              </Col>
              <Col span={12} offset={10}>
                <p>Grand Total</p>
              </Col>
              <Col span={12} offset={10}>
                <p>Remarks</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Sales Return List" key="2">
            <Table columns={purchaseListTable} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default SalesPage
