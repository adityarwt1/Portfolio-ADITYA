"use client";
import React from "react";
import { maskEmail, maskPhone, kebabCase } from "devutils-js";

const page = () => {
  const maskedEmail = maskEmail("adityarawatnew2487@gmail.com");
  const maskedPhone = maskPhone("6263508686");
  const kebabeCase = kebabCase("aditya rawat");
  
  console.log(maskedEmail, maskedPhone, kebabeCase);
  return <div>page</div>;
};

export default page;
