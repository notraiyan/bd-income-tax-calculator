import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import TopNav from "./TopNav";
import LeftSideContent from "./LeftSideContent";

function App() {

    const [values, setValues] = useState({
        lowerBound: 300000,
        minimumTax: 5000,
    });

    function handleInputChange(field, value) {
        setValues(prev => ({
            ...prev,
            [field]: field === 'companies' ? prev['companies'].append(value) : value
        }));
    }

    return (
        <>
            <TopNav/>
            <Container fluid>
                <Row style={{marginTop: 3}}>
                    <Col xs={8}>
                        <LeftSideContent
                            handleInputChange={handleInputChange}
                        />
                    </Col>
                    <Col xs={4}>
                        Right side bar
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
