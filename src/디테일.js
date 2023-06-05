import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const AlretStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: beige;
    height: 50px;
    font-weight: 700;
        p {
            padding: 0;
            margin: 0;
        }
`;    


const Detail = (props) =>{

    const [할인문구, 할인문구변경] = useState(true);
    const [count, setCount] = useState(0);
    const [입력, 입력변경] = useState('');


    useEffect(()=> {
        console.log("처음 렌더링");
        let a = setTimeout(() => { 할인문구변경(false) }, 2000)

        return () => {
            clearTimeout(a)
        }
    }, [count])

    useEffect(()=>{
        if(isNaN(입력) === true){
            alert("숫자를")
        }
    }, [입력])


    const { id } = useParams();
    // console.log(id);
    const 찾은상품 = props.shoes.find((e) => e.id === parseInt(id));

    return(
        <div className="container">
            {
                <input onChange={(e)=>{
                    입력변경(e.target.value);
                }} type="text" />
            }

            {
                할인문구 ? <AlretStyle> <p>2초이내 구매시 할인</p></AlretStyle> : ''
            }

            <br />
            <button onClick={() => {setCount(count + 1)}}>버튼 </button>
            {count}




            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${(찾은상품.id+1)}.jpg`} width="100%"/>
                    
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.contents}</p>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;