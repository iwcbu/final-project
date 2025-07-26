import styled from 'styled-components';
import {Container} from './GlobalMainStyling';
import {useState, useEffect} from 'react';
import type {Asset} from '../../interfaces/StockListType.ts';
import StockList from './StockList';




const StockOfDayDiv = styled.div`
    height: 40%;
    width: 100%;
    border: 1px solid black;
`;

const StockListDiv = styled.div`
    height: 60%;
    border: 1px solid black;

`;


export default function Home() {
    const [stock, setStock] = useState<Asset[]>([]);
    useEffect(()=> {
        async function fetchData(): Promise<void> {
            const rawData = await fetch('https://paper-api.alpaca.markets/v2/assets',{
                headers: {
                    'APCA-API-KEY-ID': 'PKOAM6XBY90BPTSMWMD2',
                    'APCA-API-SECRET-KEY': '1u5Mvm4KRXTXMQaVeDodyYCFvueVHfnKnw13p0gE'
                }
            });
            const data = await rawData.json();
            setStock(data);

        }

        fetchData().then(() => console.log("Data Fetch Successful"))
            .catch((e) => console.log("The following error occured: " + e));

    },[]);

    return(
        <Container>
            <StockOfDayDiv>
                <h1><em>Stock of the Day</em></h1>

                <p>Ticker: AAPL</p>
                <p>Price: 214.40</p>

            </StockOfDayDiv>

            <StockListDiv>
                <h1><em>Stock List</em></h1>
                <StockList stock={stock}/>




            </StockListDiv>

        </Container>
    )
}