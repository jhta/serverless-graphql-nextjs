import React from 'react';
import Head from 'next/head';
import { PolarArea } from '@reactchartjs/react-chart.js';
import { gql } from '@apollo/client'
import apolloClient from 'lib/apollo-client'



const createData = (experience: any) => {
  const { labels } = experience

  // labels: ['Money', 'Spirituality', 'Health', 'Career', 'Love, Family', 'Social, Friends', 'Hobbies', 'Growth'],
  const keys =  Object.keys(labels)
  const values = Object.values(labels)
return  {
  labels: keys, 
  datasets: [
    {
      label: '# of Votes',
      data: values,
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'yellow', 'green', 'blue', 'pink', 'purple', 'red', 'gold']
    }
  ]
};
} 

const options = {
  scale: {
    ticks: { beginAtZero: true }
  }
};

const RadarChart = ({ experiences }: any) => (
  <>
    <div className='header'>
      <h1 className='title'>Radar Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/jerairrest/react-chartjs-2/blob/react16/example/src/charts/Radar.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <PolarArea data={createData(experiences[0])} options={options} type='polar-area' />
  </>
);

const Index = ({ experiences }: any) => {
  const title: string = 'Home';

  return (
    <>
      <Head>
        <title>nextjs-with-aws-serveress : {title}</title>
      </Head>
      <div>
        <h1>{title}</h1>
        <RadarChart experiences={experiences} />
      </div>
    </>
  );
};

Index.getInitialProps = async () => {
  const query = gql`
    query getExperiences {
      getExperiencesByUserId(userId: 123) {
        userId
        labels {
          money
          spirituality
          health
          career
          love
          social
          hobbies
          growth
        }
      }
    }
  `

  try {
    const { data } = await apolloClient.query({
      query,
    })

    const { getExperiencesByUserId: experiences } = data

    console.log('this is the data fetched', experiences)

    return {
      experiences,
      error: null,
    }
  } catch (error) {
    console.log(error)
    return {
      data: {},
      error,
    }
  }

}

export default Index;

