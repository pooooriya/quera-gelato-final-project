import Image from "next/image";
import React from "react";

const LogoSize: any = {
  small: { width: 80, height: 80 },
  medium: { width: 120, height: 120 },
  large: { width: 150, height: 150 },
};

const Logo = ({ size = "small" }: any) => {
  return <Image src="/logo.png" alt="gelato logo" {...LogoSize[size]} />;
};

export default Logo;
