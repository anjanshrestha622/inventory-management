import { Table } from 'antd'
import React from 'react'

const VendorDisplay = [
  {
    title: 'S.N',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 3,
    },
  },
]
function vendorDisplay({ data }) {
  // console.log(data,"vendordiplay")
  return (
    <div>
      <Table
        dataSource={data.map((data) => {
          return {
            ...data,
            key: data.id,
          }
        })}
        columns={VendorDisplay}
      />
    </div>
  )
}

export default vendorDisplay
