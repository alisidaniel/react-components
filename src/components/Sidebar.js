import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Menu } from 'react-feather';

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-item: center;
`;
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: 'flex-start;
    align-items:center
`;

function SidebarNav() {
    return (
        <div>
            <Nav>
                <NavIcon to="#">
                    <Menu/>
                </NavIcon>
            </Nav>
        </div>
    )
}

export default SidebarNav
