import React, { useEffect, useState, useRef } from 'react'
import { Typography } from 'antd'
import axios, { post } from 'axios'
import { useReactToPrint } from 'react-to-print'
import { Input, Tabs, Row, Col, Form, Table, Select } from 'antd'

const { TabPane } = Tabs
const { Title } = Typography

const PurchaseVoucherColumns = [
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
    dataIndex: 'rack_number',
    key: 'code',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'local_name',
  },

  {
    title: 'Unit',
    dataIndex: 'price',
    key: 'iunit',
    sorter: {
      compare: (a, b) => a.item_price - b.item_price,
    },
  },
  {
    title: 'Rate',
    dataIndex: 'price',
    key: 'limit',
  },
  {
    title: ' Total',
    dataIndex: 'total_price',
    key: 'total_price',
  },
]

const purchaseListTable = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Vendor Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Voucher type(Purchase)',
    dataIndex: '',
    key: 'x',
    render: () => <p>Purchase</p>,
  },

  {
    title: 'Voucher no',
    dataIndex: 'voucher_type',
    key: 'voucher_type',
  },
  {
    title: 'Bill no ',
    dataIndex: 'bill_number',
    key: 'bill_number',
  },
  {
    title: 'Total',
    dataIndex: 'total_price',
    key: 'total_price',
  },
]
const handleSubmitBill = (e) => {
  let files = e.target.files
  console.warn(files, 'bil')
  let reader = new FileReader()
  reader.readAsDataURL(files[0])
  reader.onload = (e) => {
    // console.warn(e.target.result,'dataimg')
    const bill_data = { bill_file: e.target.result }
    const url = 'http://inventoryguras.herokuapp.com/item'
    return post(url, bill_data).then((response) =>
      console.log(response, 'final'),
    )
  }
}

function PurchasePage() {
  const [purchaseVoucher, setPurchaseVoucher] = useState([])
  const [purchaseList, setPurchaseList] = useState([])
  const [calculationRow, setcalculationRow] = useState({
    total: '1000',
    Discount: '20',
    Total_After_Discount: '10',
    Vat_amount: '',
    Grand_total: '',
  })

  const Purchase_bill = useRef()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      axios
        .get('http://inventoryguras.herokuapp.com/purchase/')
        .then((repos) => {
          console.log(repos.data, 'hello')
          setPurchaseVoucher(
            repos.data.map((purchaseVoucherData) => {
              return {
                id: purchaseVoucherData.id,
                price: purchaseVoucherData.price,
                item_name: purchaseVoucherData.item.item_name,
                rack_number: purchaseVoucherData.rack_number.rack_number,
                quantity: purchaseVoucherData.quantity,
                total_price: purchaseVoucherData.total_price,
              }
            }, calculationRow),
          )
          setPurchaseList(
            repos.data.map((list) => {
              return {
                name: list.vendor_detail.name,
                bill_number: list.bill_number,
                date: list.date,
              }
            }),
          )
        })
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
  }, [])
  const handlePrint = useReactToPrint({
    content: () => Purchase_bill.current,
  })
  const total = () => {
    return (
      <div style={{ display: 'flex' }}>
        <p>Total:1000</p>
        <p>discount:200</p>
        <p>vat:20</p>
      </div>
    )
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title level={2} style={{ color: 'gray', padding: '  5px 30px' }}>
          Purchase Details
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
        style={{ padding: '0px 30px' }}
        className="card-container"
        ref={Purchase_bill}
      >
        <Tabs type="card">
          <TabPane className="Purchase_bill" tab="Purchase Voucher" key="1">
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
                    placeholder="Purchase and Purchase Return"
                    value={' Purchase Return'}
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
                  }}
                  label="Vendor Name"
                >
                  <Input size="large" placeholder="Enter Vendor name" />
                </Form.Item>
              </Col>
              <Col span={8} offset={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                    paddingLeft: '17px',
                  }}
                  label="PAN Num"
                >
                  <Input size="large" placeholder="Enter PAN Num" />
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
              <Col span={8} offset={8}>
                <Form.Item
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                  }}
                  label=" Upload Bill "
                >
                  <Input
                    type="file"
                    name="bill_file"
                    onChange={handleSubmitBill}
                    size="large"
                    placeholder="Enter Bill"
                  />
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
                  placeholder="Select Adress"
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
                  dataSource={purchaseVoucher}
                  columns={PurchaseVoucherColumns}
                  footer={total}
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
          <TabPane tab="Purchase Return List" key="2">
            <Table dataSource={purchaseList} columns={purchaseListTable} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default PurchasePage
