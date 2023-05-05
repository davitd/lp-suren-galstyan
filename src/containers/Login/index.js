import React from 'react';

import useWindowSize from "../../services/hooks/useWindowSize";

import DesktopSize from "./components/desktop/DesktopSize";
import MobileSize from "./components/mobile/MobileSize";

export default function Login() {
  const width = useWindowSize();

  return (
      <main>{width < 768 ? <MobileSize /> : <DesktopSize />}</main>
  );
}