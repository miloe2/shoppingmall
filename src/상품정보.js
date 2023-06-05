import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = styled.div`
    width: 100vw;
    height: 40vh;
    background-color: black;
    
`;

const Container = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 100px;
        height: auto;
    }
    /* .product {
        width: 300px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid black;
        padding: 0;
        margin: 50px;

        img {
            width: 60%;

        }
    } */
`;
    const StyleProduct = styled.div`
            width: 300px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid black;
        padding: 0;
        margin: 50px;

        img {
            width: 60%;

        }
    
    `;


const Products = (props) => {
    const navigate = useNavigate();
    const [더보기, 더보기변경] = useState(null);

    const bringItem = async () => {
        try {
          let rst = await axios.get('https://codingapple1.github.io/shop/data2.json');
          console.log(rst.data);
          더보기변경(rst.data)

        } catch (error) {
          console.log(error);
        }
      };
    
    //   useEffect(() => {
    //     bringItem(); // 함수를 실행해주어야 합니다.
    //   }, [더보기]);


    return(
        <>
            <Main/>
            <Container>
                {
                    props.shoes.map((상품, i) => (
                        <StyleProduct className="product" key={상품.id} style={{cursor:'pointer'}} onClick={()=>{ navigate(`/detail/${i}`)}}>
                            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} alt="" />
                            <p>{상품.title}</p> 
                            <p>{상품.price}</p>
                        </StyleProduct>
                    ))
                }

            </Container>
            <button onClick={() => bringItem()}>가져오기</button>
            
            <Container>
            {
                더보기 && 더보기.map((상품, i ) => (
                    <StyleProduct className="product" key={상품.id} style={{cursor:'pointer'}} onClick={()=>{ navigate(`/detail/${i}`)}}>
                    {/* <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} alt="" /> */}
                    <p>{상품.title}</p> 
                    <p>{상품.price}</p>
                </StyleProduct>
                ))
            }
        </Container>
        </>
    )
}

export default Products;

