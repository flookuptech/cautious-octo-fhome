import React from "react";
import { Button, Spinner } from "reactstrap";

export const Loading = () => {
  return (
    // <div className="col-12">
    //   <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary text-center"></span>
    //   <p>Loading . . .</p>
    // </div>
    <div className="text-center">
      <Spinner>
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
