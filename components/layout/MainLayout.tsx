import Head from "next/head";
import { FC } from "react";

interface Props {
    children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{"Pdf•To•Png"}</title>
        <meta name="description" content={`Transform pdf to png`} />
        <meta name="keywords" content={"Pdf to Png, pdf, png"} />
      </Head>

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
