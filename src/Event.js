import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
padding : 50px;
`;


const Event = () => {

    return (
        <Container>
            <h4>오늘의 이벤트</h4>      
            <Outlet></Outlet>

        </Container>
        
    )
}

export default Event;