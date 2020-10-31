import React from 'react'
import { NextPage } from "next";
import Head from "next/head";
import { fetchExperiences } from "../services/experiences";
import { IExperience } from "interfaces/Experience";
import Graph from "components/graph";
import List from 'components/list'
import Store from 'store'
import { ACTION_NAMES, TState } from 'store/types';

type IndexProps = {
  experiences: IExperience[];
  lastExperience: IExperience | undefined;
  error: [];
  initialState?: TState
};

const setSelectedExperienceAction = (selectedExperience: IExperience | undefined) => {
  const store = React.useContext(Store);

  store.dispatch({
    type: ACTION_NAMES.SET_SELECTED_EXPERIENCE,
    payload: {
      selectedExperience: selectedExperience,
    }
  })
}

const Index: NextPage<IndexProps> = ({ experiences }) => {
  return (
    <>
      <Head>
        <title>nextjs-with-aws-serveress</title>
      </Head>
      <div className="container">
        <List experiences={experiences} />
        <Graph />
      </div>
      <style jsx>{`
        .container {
          border: 1px solid green;
          max-width: 1280px;
          background: #ccc;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          display: flex;
        }
        .list {
          width: 30%;
        }
      `}</style>
      </>
  );
};

Index.getInitialProps = async (): Promise<IndexProps> => {
  try {
    const { data: experiences, error } = await fetchExperiences();
    // console.log("this is the data", experiences);
    const lastExperience = experiences.length
      ? experiences[experiences.length - 1]
      : undefined;
    return {
      experiences,
      lastExperience,
      error,
      initialState: {
        selectedExperience: lastExperience,
      }
    };
  } catch (error) {
    console.log("this is the error", error);
    return {
      experiences: [],
      lastExperience: undefined,
      error
    };
  }
};

export default Index;
