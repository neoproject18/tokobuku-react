import React, { useContext } from "react";
import * as e from "reactstrap";
import { WebService } from "../../js/webservice";

export default function HomePage() {
  const datacontext = useContext(WebService);
  return (
    <div>
      <h1>{datacontext}</h1>
      <hr />
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
