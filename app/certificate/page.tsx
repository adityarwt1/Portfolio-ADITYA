import React from "react";

const Page = async () => {
  await new Promise((res) => setTimeout(() => res(res), 2000));

  return <div>Certificate page</div>;
};

export default Page;
