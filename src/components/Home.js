import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate()
  return (
    <div>
      <h3>Home Page</h3>
      <button onClick={()=>navigate('orderSummary')}>Place Order</button>
    </div>
  );
};
