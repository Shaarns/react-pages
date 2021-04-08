import React from "react";
import { Container } from "@material-ui/core";
//Stateless component
export const Header = (props) => {
        return(
            <Container>
                <a href="home">{props.homelink}</a>
            </Container>
        );
};
