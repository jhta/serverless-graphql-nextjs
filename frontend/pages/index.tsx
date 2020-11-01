import React from 'react'
import { NextPage } from "next";
import { fetchExperiences } from "services/experiences";
import { IExperience } from "interfaces/Experience";
import Graph from "components/graph";
import List from 'components/list'
import { TState } from 'store';
import Modal from 'components/modal'
import Form from 'components/form'

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
      <Modal>
        <Form />
      </Modal>
    </div>
  );
};

Index.getInitialProps = async (): Promise<IndexProps> => {
  try {
    const { data: experiences, error } = await fetchExperiences();
    const lastExperience = experiences.length
      ? experiences[0]
      : undefined;
    return {
      experiences,
      error,
      initialState: {
        experiences: {
          selectedExperience: lastExperience,
        },
        ui: {
          modalIsOpen: false,
        }
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
