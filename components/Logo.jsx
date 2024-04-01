import Image from "next/image";
import Link from "next/link";

import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        class="max-w-[100px] md:max-w-[165px]"
        src="./assets/lws_logo.png"
        alt="Lws"
      />
    </Link>
  );
};

export default Logo;
