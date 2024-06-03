import * as React from "react";

import { Head } from "../seo/head";
import { MainHeader } from "./main-header";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="w-full">
        <MainHeader />
        <div className="container px-4 md:px-6 py-4">{children}</div>
      </div>
    </>
  );
};
