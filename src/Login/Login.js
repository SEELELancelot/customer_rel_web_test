import React from 'react';
import {Button, Form, Input} from "antd";
import "./Login.css"

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


function Login() {

    return (

        <div className={"wrapper_login_page"}>
            <div className={"LoginPage"}>
                <div className={"wrap_login_content"}>

                    <div className={"LoginContent"}>
                        <h1>客戶關係管理系統</h1>
                        <h2 className={"login_text"}>登入</h2>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}

                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                wrapperCol={{
                                    offset: 2
                                }}
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                wrapperCol={{
                                    offset: 2
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>


                            <Form.Item
                                wrapperCol={{
                                    offset: 8,

                                }}
                            >
                                <Button type="primary" htmlType="submit" className={"submit_button"}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;