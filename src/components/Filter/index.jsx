import React, { useRef } from "react";

import { Container, Icons, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generic";
import { Dropdown } from "antd";

export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder={"Country"} />
        <Input ref={regionRef} placeholder={"Region"} />
        <Input ref={cityRef} placeholder={"City"} />
        <Input ref={zipRef} placeholder={"Zip code"} />
      </Section>
      <h1 className="subTitle">Apartment Info</h1>
      <Section>
        <Input ref={roomRef} placeholder={"Rooms"} />
        <Input ref={sizeRef} placeholder={"Size"} />
        <Input ref={sortRef} placeholder={"Sort"} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minRef} placeholder={"Min price"} />
        <Input ref={maxRef} placeholder={"Max price"} />
      </Section>
      <h1 className="subTitle">Footer</h1>
      <Section></Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.Vector />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
        trigger="click"
      >
        <div>
          <Button type={"light"}>
            <Icons.Filter />
            Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Loop />
        Search
      </Button>
    </Container>
  );
};
export default Filter;
