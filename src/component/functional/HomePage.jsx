import React from "react";
import * as e from "reactstrap";

export default function HomePage() {
  return (
    <div>
      <e.Card>
        <e.CardBody>
          <e.CardTitle tag="h5">Ini adalah halaman HOMEPAGE</e.CardTitle>
          <e.CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </e.CardSubtitle>
          <e.CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </e.CardText>
          <e.Button>Button</e.Button>
        </e.CardBody>
      </e.Card>
    </div>
  );
}
