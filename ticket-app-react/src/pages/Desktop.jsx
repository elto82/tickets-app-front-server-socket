import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useContext, useState } from "react";
import { getUsersStorage } from "../helpers/getUsersStorage";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";

const { Text, Title } = Typography;

export const Desktop = () => {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const [ ticket, setTicket ] = useState(null);
  const [ user ] = useState(getUsersStorage());

  useHideMenu(false);

  const salir = () => {
    localStorage.clear();
    navigate('/ingresar');
  };

  const siguienteTicket = () => {
    // console.log(user);
    socket.emit("siguiente-ticket-trabajar", user, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!user.agente || !user.escritorio) {
    navigate('/ingresar');
  }

  return (
    <>
      <Row justify="center" align="middle">

        <Col span={20}>
          <Title level={2}>{user.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{user.escritorio}</Text>
        </Col>

        <Col span={4} align="right">
          <Button type="primary" danger shape="round" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />

      {
        ticket ? (
          <Row >
            <Col >
              <Text>Está atendiendo el ticket número: </Text>
              <Text style={{ fontSize: 30 }} type="danger">{ticket?.numero || 0}</Text>
            </Col>
          </Row>
        )
          : (
            <Row >
              <Col  >
                <Text style={{ fontSize: 30 }} type="danger">No hay tickets pendientes</Text>
              </Col>
            </Row>
          )
      }
      <Row>
        <Col offset={18} span={6} align="right">
          <Button type="primary" shape="round" onClick={siguienteTicket}>
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
