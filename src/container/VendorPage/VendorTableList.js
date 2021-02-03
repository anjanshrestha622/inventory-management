/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
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
    render: () => <Link to="/vendor">Edit</Link>,
  },
]
function VendorTableList({ data }) {
  return (
    <div>
      <Table
        dataSource={data.map((data) => {
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

export default VendorTableList
