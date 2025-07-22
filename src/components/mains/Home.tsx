import styled from 'styled-components';
import {Container} from './GlobalMainStyling';

const StockOfDayDiv = styled.div`
    height: 50vh;
    border: 1px solid black;
`;

const StockListDiv = styled.div`
    height: 50vh;
    border: 1px solid black;
`;

export default function Home() {
    return(
        <Container>
            <StockOfDayDiv>
                <h1><em>Stock of the Day</em></h1>
                <p>Ticker: AAPL</p>
                <p>Price: 214.40</p>

            </StockOfDayDiv>

            <StockListDiv>
                <h1><em>Stock List</em></h1>



            </StockListDiv>

        </Container>
    )
}