import { NextPage } from "next";
import Head from "next/head";
import { fetchExperiences } from "../services/experiences";
import { IExperience } from "interfaces/Experience";
import Graph from "components/graph";

type IndexProps = {
  experiences: IExperience[];
  lastExperience: IExperience | null;
  error: [];
};

const Index: NextPage<IndexProps> = ({ lastExperience }) => {
  return (
    <>
      <Head>
        <title>nextjs-with-aws-serveress</title>
      </Head>
      <div>
        <Graph experience={lastExperience} />
      </div>
    </>
  );
};

Index.getInitialProps = async (): Promise<IndexProps> => {
  try {
    const { data: experiences, error } = await fetchExperiences();
    console.log("this is the data", experiences);
    const lastExperience = experiences.length
      ? experiences[experiences.length - 1]
      : null;
    return {
      experiences,
      lastExperience,
      error
    };
  } catch (error) {
    console.log("this is the error", error);
    return {
      experiences: [],
      lastExperience: null,
      error
    };
  }
};

export default Index;
