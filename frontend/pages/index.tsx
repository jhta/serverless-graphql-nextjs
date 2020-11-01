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
  error: [];
  initialState?: TState
};

const Index: NextPage<IndexProps> = () => {
  return (
    <div>
      <div className="container">
        <List />
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
    
    const initialState = {
      experiences: {
        selectedExperience: lastExperience,
        experiences,
      },
      ui: {
        modalIsOpen: false,
      }
    }

    return {
      error,
      initialState,
    };
  } catch (error) {
    console.log("this is the error", error);
    return {
      error
    };
  }
};

export default Index;
