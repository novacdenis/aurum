import { MainLayout } from "layouts";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1></h1>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale = "ru" }) => {
  const translations = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      ...translations,
    },
  };
};
