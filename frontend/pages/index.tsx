import React from 'react'
import Router from "next/router";
import { NextPage, NextPageContext } from "next";
import { fetchExperiences } from "services/experiences";
import Graph from "components/graph";
import List from 'components/list'
import { TState } from 'store';
import Modal from 'components/modal'
import Form from 'components/form'
import { getSession } from 'next-auth/client'

export function redirectUser({ req, res}: NextPageContext, location: string) {
  if (req && res) {
    res.writeHead(302, { Location: location });
    res.end();
  } else {
    Router.push(location);
  }
  return null
}

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

const initialStore = {
  experiences: {
    selectedExperience: undefined,
    experiences: [],
  },
  ui: {
    modalIsOpen: false,
  }
}


Index.getInitialProps = async (ctx): Promise<IndexProps> => {
  try {
    const session = await getSession(ctx)
    if (!session) {
      redirectUser(ctx, '/login')
      return {
        error: [],
        initialState: initialStore,
      }
    }
    const { user: { email } } = session

    const { data: experiences, error } = await fetchExperiences(email);
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
