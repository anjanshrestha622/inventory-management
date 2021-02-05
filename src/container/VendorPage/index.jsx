import React, { useEffect, useState } from 'react'
import { Typography, message, Spin, Tabs } from 'antd'
import axios from 'axios'
import VendorForm from './vendorForm'
import VendorTableList from './VendorTableList'
const { Title } = Typography

const { TabPane } = Tabs
function VendorPage() {
  const [vendorData, setVendorData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      axios.get('http://inventoryguras.herokuapp.com/').then((repos) => {
        setVendorData(repos.data)
        setLoading(false)
        // console.log(vendorData,'vendor')
      })
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
  }, [])
  return (
    <div>
      <Title level={2} style={{ color: 'gray', padding: '  5px 30px' }}>
        Vendor Details
      </Title>
      <div className="card-container" style={{ padding: ' 10px 40px' }}>
        <Tabs type="card">
          <TabPane tab="Vendor Add" key="1">
            <VendorForm />
          </TabPane>
          <TabPane tab=" Vendor List" key="2">
            {loading ? <Spin /> : <VendorTableList data={vendorData} />}
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default VendorPage
