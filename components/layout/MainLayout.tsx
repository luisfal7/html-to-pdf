import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui/Navbar";

interface Props {
    children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{"html a pdf"}</title>
        <meta name="description" content={`Transform html to pdf`} />
        <meta name="keywords" content={"html to Pdf, pdf, html"} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
