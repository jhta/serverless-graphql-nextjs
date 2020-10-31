import React, { MouseEvent } from 'react'
import { NextPage } from "next";
import { fetchExperiences } from "services/experiences";
import { IExperience } from "interfaces/Experience";
import Graph from "components/graph";
import List from 'components/list'
import Store from 'store'
import { ACTION_NAMES, TState } from 'store/types';
import { useMutation } from '@apollo/client';
import { postExperienceMutation } from 'services/experiences/mutations';

type IndexProps = {
  experiences: IExperience[];
  error: [];
  initialState?: TState
};

// const setSelectedExperienceAction = (selectedExperience: IExperience | undefined) => {
//   const store = React.useContext(Store);

//   store.dispatch({
//     type: ACTION_NAMES.SET_SELECTED_EXPERIENCE,
//     payload: {
//       selectedExperience: selectedExperience,
//     }
//   })
// }
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
    console.log('cifdsafadsfasdfadsfdsfs')
    console.log(postExp)
    // await postExperience()
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
