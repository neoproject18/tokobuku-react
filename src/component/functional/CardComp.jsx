import React from "react";
import { Link } from "react-router-dom";
import * as e from "reactstrap";

export default function CardComp(props) {
  return (
    <e.Card>
      <e.CardImg
        alt="Card image cap"
        src="https://source.unsplash.com/640x480?technology"
        top
        width="50%"
      />
      <e.CardBody>
        <e.CardTitle tag="h5">{props.judul}</e.CardTitle>
        <e.CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.tanggal}
        </e.CardSubtitle>
        <e.CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </e.CardText>
        <e.Button>
          <Link
            to={`/detail/${props.id}`}
            state={{
              judul: props.judul,
              tanggal: props.tanggal,
            }}
          >
            Detail
          </Link>
        </e.Button>
      </e.CardBody>
    </e.Card>
  );
}
