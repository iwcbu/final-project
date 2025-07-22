

import {Link} from 'react-router';
import styled from 'styled-components';


const Container = styled.div`
    background-color:#262626; 
    
    


`;

const StyledUl= styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    padding: 0.2rem;
    a{
        text-decoration: none;
        color: white;
        
    }
`;


export default function Nav() {

    return (
        <Container>
            <nav>
                <StyledUl>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </StyledUl>
            </nav>
        </Container>

    );



}