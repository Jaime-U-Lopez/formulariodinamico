import "./Introduccion.css";
import { Button, Container, Row, Col } from "react-bootstrap";

import React from "react";

const Introduction = () => {
  return (
    <div className="introduction p3 p-lg-5 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className="pl2  text-center">
              welcome to dynamic form{""}
              <span className="pt-2 pb-4">
                that you will do everything that you want
              </span>
            </h1>
            <h4 className="text-center">nuevo texto</h4>
 <div className=" d-flex container-action mt-5">
  
  <div className="container-buttons">
      <Button type="button" onClick={()=>console.log("dando click") } >
            Ge in touch
      </Button>
      <Button type="button" onClick={()=>console.log("dando click") }  >
            Ge in touch
      </Button>
    
    
      <a href=" #dinamic-form" type="button"className="btn-start-create" >
            ge in touc
      </a>
    
  </div>


 </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
