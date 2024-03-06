import React from "react";

const Heading = ({ className, title }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      <div>{title && <h2 className="h2">{title}</h2>}</div>
    </div>
  );
};
export default Heading;
