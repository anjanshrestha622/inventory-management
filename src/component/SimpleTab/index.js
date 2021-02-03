// import React from 'react'
// import { Tabs, Table } from 'antd'
// import { Link } from 'react-router-dom'
// import SimpleForm from '../SimpleForm'

// const { TabPane } = Tabs
// const columns = [
//   {
//     title: 'S.N',
//     dataIndex: 'id',
//     key: 'id',
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     sorter: {
//       compare: (a, b) => a.name > b.name,
//       multiple: 3,
//     },
//   },
//   {
//     title: 'Company Name',
//     dataIndex: 'company_name',
//     key: 'code',
//   },
//   {
//     title: 'Contact',
//     dataIndex: 'contact',
//     key: 'local_name',
//   },

//   {
//     title: 'Company Contact',
//     dataIndex: 'company_contact',
//     key: 'item_category',
//   },
//   {
//     title: 'PAN Number',
//     dataIndex: 'pan_number',
//     key: 'limit',
//   },
//   {
//     title: 'Action',
//     dataIndex: '',
//     key: 'x',
//     render: () => <Link to="/vendor">Edit</Link>,
//   },
// ]

// function SimpleTab({ data, label }) {
//   // const handleChange = (activeKey) => {
//   //   if (activeKey === '1') {
//   //     history.push('/vendor/add')
//   //   }
//   // }
//   return (
//     <div style={{ padding: ' 0px 30px' }}>
//       <div className="card-container">
//         <Tabs  type="card">
//           <TabPane tab=" Add Items" key="1">
//             <SimpleForm label={label} />
//           </TabPane>
//           <TabPane tab="List Items" key="2">
//             <Table dataSource={data} columns={columns} />;
//           </TabPane>
//         </Tabs>
//       </div>
//     </div>
//   )
// }

// export default SimpleTab
