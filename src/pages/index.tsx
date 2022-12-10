import Head from "next/head";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";

import { GetStaticProps } from "next";
import Image from "next/image";
import {
  useBestSellingCarsQuery,
  useGetAdsQuery,
  useGetStatsQuery,
} from "src/store/homeApi";

import AdCard from "@components/dashboard/AdCard";
import BestsellingCard from "@components/dashboard/BestsellingCard";
import StatsCard from "@components/dashboard/StatsCard";
import Layout from "@components/layout/Layout";
import LoaderSpinner from "@ui-assets/LoaderSpinner";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { Oval } from "react-loader-spinner";

const Dashboard: NextPageWithLayout<{}> = () => {
  const { t } = useTranslation();

  const stats = useGetStatsQuery();
  const ads = useGetAdsQuery();
  const bestSelling = useBestSellingCarsQuery();

  return (
    <div className="flex flex-grow">
      <Head>
        <title>{t("common:dashboard")} | Motiv</title>
        <meta name="description" content="Dashboard" />
      </Head>

      <main className="flex-grow space-y-7 p-5">
        {stats.isLoading || ads.isLoading || bestSelling.isLoading ? (
          <div className="flex h-full w-full center-center">
            <LoaderSpinner color="#A162F7" strokeWidth="2.5" duration="0.6s" />
          </div>
        ) : (
          ""
        )}

        {stats.data && (
          <div className="grid gap-6 grid-cols-fit-3">
            {stats.data.map((item, index) => {
              return <StatsCard key={index} data={item} />;
            })}
          </div>
        )}
        {ads.data && (
          <div className="grid-cols-fit-k3 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {ads.data.map((item, index) => {
              return <AdCard key={index} data={item} />;
            })}
          </div>
        )}
        {bestSelling.data && (
          <div className="grid gap-6 grid-cols-fit-[318px]">
            {bestSelling.data.map((item, index) => {
              return <BestsellingCard key={index} data={item} />;
            })}
          </div>
        )}
      </main>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default Dashboard;
