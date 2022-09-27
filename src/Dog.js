import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Dog = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div>강아지 화면이에요.</div>
      <Link to="/dog:bowwow/detail" style={{ marginRight: "10px" }}>
        강아지 상세화면보기
      </Link>
      <Outlet />
    </>
  );
};

export default Dog;
