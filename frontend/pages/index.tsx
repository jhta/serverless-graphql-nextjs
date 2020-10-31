import React, { MouseEvent } from 'react'
import { NextPage } from "next";
import { fetchExperiences } from "services/experiences";
import { IExperience } from "interfaces/Experience";
import Graph from "components/graph";
import List from 'components/list'
import { TState } from 'store/types';
import { useMutation } from '@apollo/client';
import { postExperienceMutation } from 'services/experiences/mutations';

type IndexProps = {
  experiences: IExperience[];
  error: [];
  initialState?: TState
};

const input = {
  userId: 123,
  description: 'This is a nice description',
  labels: {
    money: 8,
    spirituality: 5,
    health: 10,
    career: 8,
    love: 7,
    social: 10,
    hobbies: 7,
    growth: 10,
  },
}

const Index: NextPage<IndexProps> = ({ experiences }) => {
  const [postExp, data] = useMutation(postExperienceMutation)
  const handleCreateExperience = async (e: MouseEvent) => {
    e.preventDefault()
    await postExp({
      variables: { input }
    })
  }

  return (
    <div>
      <div className="container">
        <List experiences={experiences} />
        <Graph />
      </div>
      <div>
        <h1>Create new one</h1>
        <button onClick={handleCreateExperience}>Create</button>
      </div>
    </div>
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
