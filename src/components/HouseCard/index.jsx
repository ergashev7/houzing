import { Container, Content, Details, Icons, Img, Divider } from "./style";
import noimg from "../../assets/img/nooimage.png";
export const HouseCard = ({ data }) => {
  const {
    url,
    attachments,
    salePrice,
    price,
    houseDetails,
    address,
    city,
    country,
    description,
  } = data;
  return (
    <Container>
      <Img src={attachments[0]?.imgPath || noimg} />
      <Content>
        <div className="subTitle inline">
          {city}
          {country},{description}
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{houseDetails?.beds || 0} Bed</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{houseDetails?.bath || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info"> {houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{houseDetails?.area || 0} Sq Ft </div>
          </Details.Item>
        </Details>
      </Content>
      <Divider></Divider>
      <Content footer>
        <Details.Item footer>
          <div className="info line">${salePrice || 0}/mo</div>
          <div className="subTitle">${price || 0}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
