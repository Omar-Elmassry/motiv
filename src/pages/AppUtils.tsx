import useMediaQuery from "@hooks/useMediaQuery";
import useScrollPercentage from "@hooks/useScrollPercentage";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { utilsActions } from "src/store/utilsSlice";

type Props = {};

export default function AppUtils({}: Props) {
  const dispatch = useDispatch();

  const smScreenSize = useMediaQuery("(max-width: 1032px)");
  const { scrollPercentage } = useScrollPercentage(70);
  const lgScreenSize = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    dispatch(utilsActions.setIsSSR(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(utilsActions.setIsMobile(smScreenSize));
    dispatch(utilsActions.setIsLgScreen(lgScreenSize));
  }, [dispatch, smScreenSize, lgScreenSize]);

  useEffect(() => {
    dispatch(utilsActions.setScrolledTwoThirds(scrollPercentage));
  }, [dispatch, scrollPercentage]);

  // useEffect(() => {}, [dispatch]);

  // useEffect(() => {}, [dispatch]);
  // useEffect(() => {}, [dispatch]);
  // useEffect(() => {}, [dispatch]);
  return <></>;
}
