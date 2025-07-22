import styled from 'styled-components';


const Container = styled.div`
    background-color: black; 
    
`;
const StyledH1= styled.h1`
    color: white;
    text-align: left;
    font-size: calc(1px + 2vw);
    padding:2rem;
    
`;





export default function Header() {

    return (
        <Container>
            <StyledH1>Market Scouters</StyledH1>

        </Container>

    );



}