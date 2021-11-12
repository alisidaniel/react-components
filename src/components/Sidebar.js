import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Menu, X } from 'react-feather';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

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
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;   
`;

const SidebarWrap = styled.div`
    width: 100%;
`;
function Sidebar() {
    const [sidebar, setSidebar] = React.useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <Nav>
                <NavIcon to="#">
                    <Menu onClick={showSidebar}/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <X onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </div>
    )
}

export default Sidebar
