import { Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
const columns = [
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
      compare: (a, b) => a.name > b.name,
      multiple: 3,
    },
  },
  {
    title: 'Company Name',
    dataIndex: 'company_name',
    key: 'code',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'local_name',
  },

  {
    title: 'Company Contact',
    dataIndex: 'company_contact',
    key: 'item_category',
  },
  {
    title: 'PAN Number',
    dataIndex: 'pan_number',
    key: 'limit',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    // eslint-disable-next-line react/display-name
    render: (data) => <Link to={`/single-item/${data.id}`}>Edit</Link>,
  },
]
// eslint-disable-next-line react/prop-types
function CustomerListTable({ customerData }) {
  return (
    <div>
      <Table
        // eslint-disable-next-line react/prop-types
        dataSource={customerData.map((data) => {
          return {
            ...data,
            key: data.id,
          }
        })}
        columns={columns}
      />
    </div>
  )
}

export default CustomerListTable
