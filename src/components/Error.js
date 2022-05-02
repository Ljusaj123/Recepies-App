import React from "react";

function Error({ error }) {
  return (
    <div className="error-message">
      <p>Error: {error.msg}</p>
    </div>
  );
}

export default Error;
