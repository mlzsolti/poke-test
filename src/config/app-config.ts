type Config = {
  siteName: string;
};

const appConfig: Config = {
  siteName: (import.meta.env.VITE_SITE_NAME as string) || "Pokemon App",
};

export default appConfig;
