import React, { useEffect, useState } from "react";
import { Container } from "./style.js";
import HouseCard from "../HouseCard";
const { REACT_APP_BASE_URL: url } = process.env;
export const Properties = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);
  return (
    <Container>
      {data.map((value) => {
        return <HouseCard data={value} />;
      })}
      <h1>tes</h1>
    </Container>
  );
};
export default Properties;
