import React from 'react'
import styled from 'styled-components';
import { palette } from '../../utils/utils';

const StyledSideDrawer = styled.div`
    display:flex;
    height:100vh;
    background-color:${palette.primary};
    box-shadow: 2px 0px 5px rgba(0,0,0, 0.5);
    top:0;
    left:0;
    width: 300px;
    position: fixed;
    color: white;
    z-index: 200;
    justify-content: center;
    transform: translateX(${props => (props.show ? "0" : "-100%")});
    transition: all .4s ease-in-out;


    ul{
        width: 200px;
        height:100%;
        list-style: none;
        display:flex;
        flex-direction: column;
        justify-content: center;
        
    }
    li{
        padding: 10px;
        :hover{
            cursor: pointer;
            background-color: ${palette.hoverLink}
        }
    }
`
const SideDrawer = ({ show }) => {
    return (
        <StyledSideDrawer show={show}>
            <nav>
                <ul>
                    <li>Products</li>
                    <li>Users</li>
                </ul>
            </nav>
        </StyledSideDrawer>
    )
}

export default SideDrawer
