import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Loader = () => 

  <Container>
      <Row className="justify-content-md-center">    
       <Col lg="12" style={{textAlign:"center", top:"50%", position:"fixed"}}> 
        <div>  
         <img src={require("assets/img/theme/flookupGif.gif")} alt="flookup" style={{height:100}} />
        </div>
       </Col>
      </Row>
  </Container>

export default Loader;

