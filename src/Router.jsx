import React from "react";
import {
  Download,
  Subscribe,
  Faq,
  Main,
} from "./components";

export default function Router() {
  return (
    <>
      <Main />
      <Download />
      <Subscribe />
      <Faq />
    </>
  );
}
