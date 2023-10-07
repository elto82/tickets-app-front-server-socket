import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { useState } from 'react';
import { getUsersStorage } from '../helpers/getUsersStorage';

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};

export const Enter = () => {
  const navigate = useNavigate();
  const [ user ] = useState(getUsersStorage());
  useHideMenu(false);


  const onFinish = ({ agente, escritorio }) => {
    localStorage.setItem("agente", agente);
    localStorage.setItem("escritorio", escritorio);

    navigate('/desktop');
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  if (user.agente && user.escritorio) {
    navigate('/desktop');
  }

  return (
    <>
      <Title level={2} style={{ textAlign: 'center' }}>Ingresar al sistema</Title>
      <hr />
      <Text type="secondary" style={{ textAlign: 'end' }}
      >Ingrese su nombre y escritorio para ingresar al sistema</Text>
      <Divider />

      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[ { required: true, message: 'Por favor ingrese su nombre' } ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[ { required: true, message: 'Por favor ingrese su escritorio' } ]}
        >
          <InputNumber min={1} max={100} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape='round'>
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>

    </>

  );
};

