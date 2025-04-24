"use client";
import React from "react";

import Error from "@/features/error/components/Error";
import ErrImg from "@/public/imgs/500_InternalServerError.png";

const notFound = () => {
  return <Error img={ErrImg} />;
};

export default notFound;
