import React, {Component} from "react";
import {Col, Container, Navbar} from "react-bootstrap";

export default class Footer extends Component{

    render() {
        let fullYear = new Date().getFullYear();

        return(
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className={"text-center text-muted"}>
                        <div>
                            {fullYear} All Rights Reserved by Filip
                        </div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}