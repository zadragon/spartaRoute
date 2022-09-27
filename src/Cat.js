import React from "react";
import { Navigate, useParams, Outlet, Link } from "react-router-dom";

const Cat = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div>고양이 화면이에요.</div>
      <Link to="/cat/detail" style={{ marginRight: "10px" }}>
        캣1 상세화면보기
      </Link>
      <Link to="/cat/detail2" style={{ marginRight: "10px" }}>
        캣2 상세화면보기
      </Link>
      <Outlet />
    </>
  );
};

export default Cat;
