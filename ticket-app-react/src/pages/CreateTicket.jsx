import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const { Title, Text } = Typography;

export const CreateTicket = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);
  const [ ticket, setTicket ] = useState(null);

  const nuevoTicket = () => {
    socket.emit("solicitar-ticket", null, (ticket) => {
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>
            Presione el boton para el nuevo ticket
          </Title>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large"
            onClick={nuevoTicket}>
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      {
        ticket && (
          <Row style={{ marginTop: 100 }}>
            <Col span={14} offset={6} align="center">
              <Text style={{ fontSize: 50 }} type="danger">Su ticket: </Text>
              <br />
              <Text level={2} style={{ fontSize: 50 }} type="success">{ticket.numero || 0}</Text>
            </Col>
          </Row >
        )
      }
    </>
  );
};
