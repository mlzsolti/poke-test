import appConfig from "@/config/app-config";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  const defaultTitle = appConfig.siteName;

  return (
    <Helmet
      title={title ? `${title} | ${defaultTitle}` : undefined}
      defaultTitle={defaultTitle}
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
