import styled from 'styled-components';
import type {Asset} from '../../interfaces/StockListType.ts';

const AllStock = styled.div`
    display: flex;
    flex-direction: row;
   
   
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
`;


const StockCard = styled.div`
    border: 1px solid black;
    width: 100%;
    border-radius: 16px;
    background-color: powderblue;
    font-size: calc(1px + 1vw);
`;


export default function StockList(props : {stock : Asset[] }) {
    return(
        <AllStock>
            {
                props.stock.slice(0,10).map((item)=>
                    <StockCard key={item.id}>
                        <p>Ticker: {item.symbol}</p>
                        <p>Name: {item.name}</p>
                        <p>Asset Type: {item.asset_class}</p>
                    </StockCard>


                )
            }
        </AllStock>
    )
}