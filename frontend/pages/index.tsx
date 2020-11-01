import React from 'react'
import { NextPage } from "next";
import { fetchExperiences } from "services/experiences";
import { IExperience } from "interfaces/Experience";
import Graph from "components/graph";
import List from 'components/list'
import { TState } from 'store/types';
import Modal from 'components/modal'

type IndexProps = {
  experiences: IExperience[];
  error: [];
  initialState?: TState
};

const Index: NextPage<IndexProps> = ({ experiences }) => {
  return (
    <div>
      <div className="container">
        <List experiences={experiences} />
        <Graph />
      </div>
      <Modal />
    </div>
  );
};

Index.getInitialProps = async (): Promise<IndexProps> => {
  try {
    const { data: experiences, error } = await fetchExperiences();
    const lastExperience = experiences.length
      ? experiences[experiences.length - 1]
      : undefined;
    return {
      experiences,
      error,
      initialState: {
        selectedExperience: lastExperience,
      }
    };
  } catch (error) {
    console.log("this is the error", error);
    return {
      experiences: [],
      error
    };
  }
};

export default Index;
