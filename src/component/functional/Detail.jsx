import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{location.state.judul}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {location.state.tanggal}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>
            <Link to={"/about"} className="btn">
              Kembali
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
