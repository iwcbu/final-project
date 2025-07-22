
// In this component I am rendering all of my static components as well
// as conditionally rendered components and then exporting this file to
// the App component

import {Routes, Route} from 'react-router';
import Home from "./mains/Home.tsx";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import About from "./mains/About.tsx";
import styled from 'styled-components';

const Wrapper = styled.div`
    width:90vw;
    margin: 0 auto;
    background-color: whitesmoke;
`

export default function Root() {

    return(
        <Wrapper>
            <Header/>
            <Nav/>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>


            </Routes>
        </Wrapper>
    );
}