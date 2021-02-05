/* eslint-disable react/prop-types */
import React from 'react'
// import { Link } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'S.N',
    dataIndex: 'id',
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
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
    key: 'action',
    // eslint-disable-next-line react/display-name
    render: (data) => (
      <>
        <Link to={`/single-vendor/${data.id}`}>
          <Button style={{ width: '80px' }} icon={<EditOutlined />}>
            Edit
          </Button>
        </Link>
        <Button style={{ margin: ' 5px 5px' }} icon={<DeleteOutlined />}>
          Delete
        </Button>
      </>
    ),
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
