import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, changeAge, changeName } from "./store";

const Cart = () => {
    const state = useSelector((state) => state); // Access the 'stock' state value from the Redux store
    // const stock = useSelector((state) => state.stock); // Access the 'stock' state value from the Redux store
    const dispatch = useDispatch();
    return (
        <>
            <p>{state.user.name}의 장바구니</p>
            <p>{state.user.age}</p>
            <button onClick={()=>{ dispatch(changeAge(100)) }}>버튼</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.stock.map((item, index) => (
                            <tr key={item.id}>
                                <td>{`${index+1}`}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                <button onClick={()=>{ dispatch(addCount(1)) }}>+</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </Table>
        </>
    );
};

export default Cart;
