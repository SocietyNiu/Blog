import React from 'react'
import { Button, Form, Input } from 'antd'

export default class Admin extends React.Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyItems: 'center',
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <style global jsx>{`
          body {
            margin: 0;
          }
        `}</style>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          style={{ width: '100vw' }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input password!' }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
