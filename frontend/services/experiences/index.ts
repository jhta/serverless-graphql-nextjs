import { ApolloQueryResult } from '@apollo/client'
import client from 'lib/apollo-client'
import { IExperience } from 'interfaces/Experience'
import { getExperiencesQuery } from './queries'
import { postExperienceMutation } from './mutations'

interface IGraphqlResponse<T> {
  data: T
  error: []
}

interface IQueryResponse {
  getExperiencesByUserId: IExperience[]
}

interface ICreateExperienceMutationResponse {
  postExperience: IExperience
}

export const fetchExperiences = async (): Promise<
  IGraphqlResponse<IExperience[]>
> => {
  try {
    const { data }: ApolloQueryResult<IQueryResponse> = await client.query({
      query: getExperiencesQuery,
      variables: {
        id: 123,
      },
    })

    const { getExperiencesByUserId: experiences } = data

    return {
      data: experiences,
      error: [],
    }
  } catch (error) {
    return {
      error,
      data: [],
    }
  }
}

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

export const postExperience = async (): Promise<
  IGraphqlResponse<ICreateExperienceMutationResponse | null>
> => {
  try {
    const { data } = await client.mutate({
      mutation: postExperienceMutation,
      variables: {
        input,
      },
    })
    console.log('data', data)
    const { postExperience } = data
    return {
      data: postExperience,
      error: [],
    }
  } catch (error) {
    return {
      error,
      data: null,
    }
  }
}
