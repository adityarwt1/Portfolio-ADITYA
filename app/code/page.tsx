import { transformerTwoslash } from "@shikijs/twoslash";
import { codeToHtml } from "shiki";

export default async function Page() {
  // const highlighter = await getHighlighter({
  //   theme: "vscode-dark-plus",
  // });

  const html = await codeToHtml(
    `"use client";
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
`,
    {
      lang: "ts",
      theme: "slack-dark",
      // transformers: [
      //   transformerTwoslash(), // <-- here
      //   // ...
      // ],
    }
  );

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="w-fit p-4" />
  );
}
