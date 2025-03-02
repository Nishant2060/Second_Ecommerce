import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./TopBody.css";

const TopBody = () => {
  const [menu, setMenu] = useState("/");

  return (
    <>
      <div className='hidden sm:block'>
        <ul className='topBody bg-gray-50 flex justify-end gap-7 cursor-pointer p-4 mx-5 text-xl font-bold'>
          <li onClick={() => setMenu("shop")}><Link to="/">Shop</Link>{menu === "shop" && <hr />}</li>
          <li onClick={() => setMenu("clothes")}><Link to="/change">Clothes</Link>{menu === "clothes" && <hr />}</li>
          <li onClick={() => setMenu("electronics")}><Link to="/electronics">Electronics</Link>{menu === "electronics" && <hr />}</li>
          <li onClick={() => setMenu("furniture")}><Link to="/furniture">Furniture</Link>{menu === "furniture" && <hr />}</li>
          <li onClick={() => setMenu("shoes")}><Link to="/shoes">Shoes</Link>{menu === "shoes" && <hr />}</li>
          <li onClick={() => setMenu("miscellaneous")}><Link to="/miscellaneous">Miscellaneous</Link>{menu === "miscellaneous" && <hr />}</li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default TopBody;
