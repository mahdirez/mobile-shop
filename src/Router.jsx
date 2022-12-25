import React from "react";
import { Download, Subscribe, Faq, Main, Header } from "./components";

export default function Router() {
  return (
    <>
      <Header />
      <Main />
      <Download />
      <Subscribe />
      <Faq />
    </>
  );
}
