import React from "react";

const page = ({ params }: { params: { name: string } }) => {
  console.log(params.name);
  return <div>page</div>;
};

export default page;
