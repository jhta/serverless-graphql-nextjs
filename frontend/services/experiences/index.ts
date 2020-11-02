import { ApolloQueryResult } from '@apollo/client'
import client from 'lib/apollo-client'
import { IExperience } from 'interfaces/Experience'
import { getExperiencesQuery } from './queries'

interface IGraphqlResponse<T> {
  data: T
  error: []
}

interface IQueryResponse {
  getExperiencesByUserId: IExperience[]
}

export const fetchExperiences = async (
  id: string
): Promise<IGraphqlResponse<IExperience[]>> => {
  try {
    const { data }: ApolloQueryResult<IQueryResponse> = await client.query({
      query: getExperiencesQuery,
      variables: {
        id,
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
