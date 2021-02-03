import React, { useEffect, useState } from 'react'
// import SimpleTab from '../../component/SimpleTab'
import { Typography, Tabs, Spin } from 'antd'
import axios from 'axios'
import CustomerForm from './CustomerForm'
// import CustomerDisplay from './CustomerDisplay'
import CustomerListTable from './CustomerListTable'

const { Title } = Typography
const { TabPane } = Tabs

function CustomerPage() {
  const [customerData, SetcustomerData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      axios.get('http://inventoryguras.herokuapp.com/customer').then((res) => {
        SetcustomerData(res.data)
        // console.log(res.data, "customer")
      })
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
  })
  return (
    <div>
      <Title level={2} style={{ color: 'gray', padding: '  5px 30px' }}>
        Customer Details
      </Title>
      <div className="card-container" style={{ padding: ' 10px 40px' }}>
        <Tabs type="card">
          <TabPane tab="Customer Add" key="1">
            <CustomerForm />
          </TabPane>
          <TabPane tab=" Customer List" key="2">
            {loading ? (
              <Spin />
            ) : (
              <CustomerListTable customerData={customerData} />
            )}
          </TabPane>
          {/* <TabPane tab=" Customer Display" key="3">
            {loading ? <Spin /> : <CustomerDisplay data={customerData} />}
          </TabPane> */}
        </Tabs>
      </div>
      {/* <SimpleTab label={"customer name"} data={customerData} /> */}
    </div>
  )
}

export default CustomerPage
