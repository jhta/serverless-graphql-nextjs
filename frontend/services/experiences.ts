import { gql, ApolloQueryResult } from "@apollo/client";
import client from "../lib/apollo-client";
import { IExperience } from "../interfaces/Experience";

interface IGraphqlResponse<T> {
  data: T;
  error: [];
}

interface IQueryResponse {
  getExperiencesByUserId: IExperience[];
}

export const fetchExperiences = async (): Promise<
  IGraphqlResponse<IExperience[]>
> => {
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
  `;

  try {
    const response: ApolloQueryResult<IQueryResponse> = await client.query({
      query
    });

    console.log("this is the response", response);
    const { data } = response;
    console.log("the apollo data", data);

    const { getExperiencesByUserId: experiences } = data;

    return {
      data: experiences,
      error: []
    };
  } catch (error) {
    console.log("the error", error);
    return {
      error,
      data: []
    };
  }
};
