import React from 'react'
import styled from 'styled-components/macro'
import {NavbarContainer,NavbarWrap,Logo,Nav,NavLink,Search,SearchWrap,Input,ButtonContainer,Button} from './navbarElements'


const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarWrap>
                <Logo/>
                <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Market</NavLink>
                <NavLink to="/">Trade</NavLink>
                <NavLink to="/">Pricing</NavLink>
                <NavLink to="/">Download</NavLink>
                <NavLink to="/">HELP</NavLink>
                </Nav>
                <Search>
                    <SearchWrap>
                        <Input type="text" placeholder="Symbol/Name"/>
                    </SearchWrap>
                </Search>
                <ButtonContainer>
                    <Button css={`color:#037cff;background:#fff`}>Sign UP</Button>
                    <Button>Log In</Button>
                </ButtonContainer>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar
