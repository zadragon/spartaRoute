import React from "react";
import { useParams } from "react-router";

const CatDetail = (props) => {
  const params = useParams();
  console.log(params);
  return <div>고양이 디테일화면.</div>;
};

export default CatDetail;
