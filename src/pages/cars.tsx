import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";

import { GetStaticProps } from "next";
import Image from "next/image";
import { useGetCarsQuery } from "src/store/homeApi";

import CarCard from "@components/cars/CarsCard";
import DummyIcons from "@components/cars/DummyIcons";
import Layout from "@components/layout/Layout";
import FilterMenu from "@ui-assets/FilterMenu";
import LoaderSpinner from "@ui-assets/LoaderSpinner";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

const Cars: NextPageWithLayout<{}> = () => {
  const { t } = useTranslation();

  const { data: carsData, isLoading } = useGetCarsQuery();

  const systemFilters = ["Manual", "Automatic"];
  const vendorFilters = ["Toyota", "Porshe", "Mini Cooper"];

  const [systemFilter, setSystemFilter] = useState("");
  const [vendorFilter, setVendorFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const filterData = () => {
    let data = carsData.filter((car) => {
      if (systemFilter && vendorFilter) {
        //@ts-ignore
        return car.system === systemFilter && car.name.includes(vendorFilter);
      } else if (systemFilter && !vendorFilter) {
        //@ts-ignore
        return car.system === systemFilter;
      } else if (!systemFilter && vendorFilter) {
        //@ts-ignore
        return car.name.includes(vendorFilter);
      }
    });

    setFilteredData(data);
  };

  const searchInput = useSelector(
    (state: RootState) => state.utils.searchInput
  );

  const searchData = () => {
    let data = carsData.filter((car) => {
      return car.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredData(data);
  };

  useEffect(() => {
    if (carsData) {
      setFilteredData(carsData);
    }
  }, [carsData]);

  useEffect(() => {
    if (searchInput) {
      searchData();
    }
  }, [searchInput]);

  useEffect(() => {
    if (systemFilter || vendorFilter) {
      filterData();
    }
  }, [systemFilter, vendorFilter]);

  return (
    <div className="flex flex-grow flex-col space-y-7 p-5">
      <Head>
        <title>Cars | Motiv.</title>
        <meta name="description" content="Cars" />
      </Head>

      <header className=" space-y-4">
        <h2 className="text-3xl font-bold">Booking</h2>

        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <FilterMenu
              options={systemFilters}
              selected={systemFilter}
              setSelected={setSystemFilter}
              filterName={"System"}
            />
            <FilterMenu
              options={vendorFilters}
              selected={vendorFilter}
              setSelected={setVendorFilter}
              filterName={"Vendor"}
            />

            <button
              className="h-7 rounded-full border border-brand bg-white px-3 text-xs font-medium"
              onClick={() => {
                setFilteredData(carsData);
                setSystemFilter("");
                setVendorFilter("");
              }}
            >
              Clear
            </button>
          </div>
          <DummyIcons />
        </div>
      </header>

      <main className="flex-grow">
        {isLoading ? (
          <div className="flex h-full w-full center-center">
            <LoaderSpinner color="#A162F7" strokeWidth="2.5" duration="0.6s" />
          </div>
        ) : (
          ""
        )}

        {!isLoading && filteredData?.length !== 0 && (
          <div className="grid gap-6 grid-cols-fit-3">
            {filteredData?.map((item, index) => {
              return <CarCard key={index} data={item} />;
            })}
          </div>
        )}
        {!isLoading && filteredData?.length === 0 && (
          <p className="">No data with current filters</p>
        )}
      </main>
    </div>
  );
};

Cars.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Cars;
