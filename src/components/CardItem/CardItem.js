import React from "react";
import { CardItem } from "./CardItemstyled";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import SportBuildPhoto from "../../images/sportBuildPhoto.jpg";

function Card(props) {
  return (
    <CardItem>
      <img src={SportBuildPhoto} alt="Sport" />
      <h3>Name: {props.sportBuild.name}</h3>
      <h4>Type: {props.sportBuild.brand}</h4>
      <h4>Price: {props.sportBuild.price}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        eligendi excepturi perspiciatis placeat veritatis.
        {props.sportBuild.location}, {props.sportBuild.year_of_foundation}.
      </p>
      <h5>
        Scale of field: <span>{props.sportBuild.scale_of_field}</span>
      </h5>
      <Link exact to={`/catalog/item/${props.sportBuild.id}`}>
        <Button
          buttonText="View more"
          backgroundColor="#454545"
          color="#fff"
          fontSize="13px"
          padding="10px 45px"
        />
      </Link>
    </CardItem>
  );
}

export default Card;
