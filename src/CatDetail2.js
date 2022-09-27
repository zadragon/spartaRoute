import React from "react";
import { useParams } from "react-router";

const CatDetail2 = (props) => {
  const params = useParams();
  console.log(params);
  return <div>고양이 디테일화면투.</div>;
};

export default CatDetail2;
