import * as React from "react";
import "../../../../scss/style.scss";

export const ERR_404 = (msg: string) => {
  return (
    <div className="pWarning">
      <h3>Error 404</h3>
      <p>{msg}</p>
    </div>
  );
};
