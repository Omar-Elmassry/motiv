import Head from "next/head";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";

import { GetStaticProps } from "next";
import Image from "next/image";
import { useGetHomeQuery } from "src/store/homeApi";

import Layout from "@components/layout/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPageWithLayout<{}> = () => {
  const { t } = useTranslation();

  const home = useGetHomeQuery();
  console.log("🚀 ~ file: index.tsx:16 ~ home", home.data);
  return (
    <div className="w-full">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>

      <main className=" ">{`${home.data}`}</main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
