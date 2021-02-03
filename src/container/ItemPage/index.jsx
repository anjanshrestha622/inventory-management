import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Row,
  Col,
  Tabs,
  Table,
  message,
  Spin,
  Button,
  Typography,
} from 'antd'
import './style.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import SubmitButton from '../../component/SubmitButton';

const { Title } = Typography
const { TabPane } = Tabs
const columns = [
  {
    title: 'S.N',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'item_name',
    key: 'name',
    sorter: {
      compare: (a, b) => a.item_name - b.item_name,
    },
  },
  {
    title: 'Item Code',
    dataIndex: 'item_code',
    key: 'code',
  },
  {
    title: 'Local Name',
    dataIndex: 'local_name',
    key: 'local_name',
  },

  {
    title: 'Item Catergory',
    dataIndex: 'item_code',
    key: 'item_category',
  },
  {
    title: 'Item Limit',
    dataIndex: 'item_limit',
    key: 'limit',
  },
  {
    title: 'Item Price',
    dataIndex: 'item_price',
    key: 'price',
    sorter: {
      compare: (a, b) => a.item_price - b.item_price,
    },
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <Link to="/single-item">Edit</Link>,
  },
]

function ItemPage() {
  const [itemData, setItemData] = useState([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    local_name: '',
    item_name: '',
    item_code: '',
    item_category: '',
    item_limit: '',
    item_price: '',
  })

  function handleChange(e) {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  useEffect(() => {
    const source = axios.CancelToken.source()

    try {
      setLoading(true)
      axios.get('http://inventoryguras.herokuapp.com/item/').then((repos) => {
        setItemData(repos.data)
        setLoading(false)
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

  // const submit = (e) => {
  //   let item_name = e.target.value;
  //   let local_name = e.target.value;
  //   let item_code = e.target.value;
  //   let item_category = e.target.value;
  //   let item_limit = e.target.value;
  //   let item_price = e.target.value;

  //   let itemData = {
  //     local_name,
  //     item_name,
  //     item_code,
  //     item_price,
  //     item_category,
  //     item_limit,
  //   };
  //   console.log(e, 'submited data');
  //   handleSubmit(itemData);
  // };

  const handleSubmit = () => {
    // console.log(formData, "submitted")
    axios
      .post(`http://inventoryguras.herokuapp.com/item/`, formData)
      .catch((err) => alert(err))
  }
  return (
    <div>
      <Row style={{ padding: '0px 50px' }}>
        <Title level={2} style={{ color: 'gray', paddingTop: '10px' }}>
          Items Details
        </Title>
        <Tabs className="Item-tab" type="card" defaultActiveKey="1">
          <TabPane tab="Add Items" key="1">
            <Form
              onFinish={handleSubmit}
              style={{ width: '100%' }}
              className="login-form "
              layout="inline"
              initialValues={{ remember: true }}
            >
              <Col lg={{ span: 10 }}>
                <Form.Item
                  rules={[
                    { required: true, message: 'Please input your Item Name!' },
                  ]}
                >
                  <Input
                    onChange={handleChange}
                    value={formData.item_name}
                    name="item_name"
                    className="from-input"
                    placeholder="Item Name"
                  />
                </Form.Item>
              </Col>
              <Col lg={{ span: 10 }}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Local Name!',
                    },
                  ]}
                >
                  <Input
                    className="from-input"
                    onChange={handleChange}
                    value={formData.local_name}
                    name="local_name"
                    placeholder="Local Name"
                  />
                </Form.Item>
              </Col>
              <Col lg={{ span: 10 }}>
                <Form.Item
                  rules={[
                    { required: true, message: 'Please input your Item Code!' },
                  ]}
                >
                  <Input
                    className="from-input"
                    onChange={handleChange}
                    value={formData.local_code}
                    name="item_code"
                    placeholder="Item Code"
                  />
                </Form.Item>
              </Col>
              <Col lg={{ span: 10 }}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Item Category!',
                    },
                  ]}
                >
                  <Input
                    onChange={handleChange}
                    className="from-input"
                    value={formData.item_category}
                    name="item_category"
                    placeholder="Item category"
                  />
                </Form.Item>
              </Col>
              <Col lg={{ span: 10 }}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Item Limit!',
                    },
                  ]}
                >
                  <Input
                    className="from-input"
                    onChange={handleChange}
                    value={formData.item_limit}
                    placeholder="Item Limit"
                    name="item_limit"
                  />
                </Form.Item>
              </Col>
              <Col lg={{ span: 10 }}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Item price!',
                    },
                  ]}
                >
                  <Input
                    className="from-input"
                    onChange={handleChange}
                    value={formData.item_price}
                    placeholder="Item price"
                    name="item_price"
                  />
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }}>
                <Button
                  htmlType="submit"
                  size={'large'}
                  style={{
                    padding: '5px',
                    margin: '0px 20px',
                    background: 'green',
                    color: 'whitesmoke',
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Form>
            {/* <SubmitButton /> */}
          </TabPane>
          <TabPane tab="List Items" key="2">
            {loading ? (
              <Table
                columns={columns}
                dataSource={itemData.map((data) => {
                  return {
                    ...data,
                    key: data.id,
                  }
                })}
                expandable={{
                  // eslint-disable-next-line react/display-name
                  expandedRowRender: (key) => (
                    <>
                      <p style={{ margin: 0 }}>{key.item_name}</p>
                      {/* <p style={{ margin: 0 }}>
                      {key.id}
                    </p> */}
                    </>
                  ),
                }}
              />
            ) : (
              <Spin />
            )}
          </TabPane>
        </Tabs>
      </Row>
    </div>
  )
}

export default ItemPage
