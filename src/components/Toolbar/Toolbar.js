import React from 'react'
import styled from 'styled-components'
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';
import { palette } from '../../utils/utils';

const Toolbar = ({ drawerClickHandler, drawerCloser }) => {
    const ToolbarHeader = styled.header`
    background-color:${palette.primary};
    position:fixed;
    width: 100vw;
    height: 56px;
    left:0;
    top:0;
    `
    const ToolbarNavigation = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:100%;
    padding: 0 1rem;
    `
    const ToolbarNavigationItems = styled.div`
    a{
        color: white;
        text-decoration: none;
        :hover{
            background-color:${palette.hoverLink}
        }
    }
   ul{
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
   }
    li{
        padding: 10px;
        margin: 0 0.5rem;
        :hover{
            background-color:#1abc9c;
        }
    }
    `
    const ToolbarLogo = styled.div`
    margin-left: 1rem; 
    a{
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        
    }
    `
    const Spacer = styled.div`
    flex:1;
    `

    return (
        <ToolbarHeader>
            <ToolbarNavigation>
                <div></div>
                <DrawerToggleButton drawerClickHandler={drawerClickHandler} />
                <ToolbarLogo><a href="/">The logo</a></ToolbarLogo>
                <Spacer></Spacer>
                <ToolbarNavigationItems>
                    <ul>
                        <li> <a href="#">Products</a></li>
                        <li><a href="#">Users</a></li>
                    </ul>
                </ToolbarNavigationItems>
            </ToolbarNavigation>
        </ToolbarHeader>

    )
}
export default Toolbar