import { gql } from "apollo-server-lambda";

const typeDef = gql`
  input ExperienceInput {
    userId: ID!
    energy: Int!
  }

  type Experience {
    userId: ID!
    energy: Int!
  }

  type Mutation {
    postExperience(input: ExperienceInput!): Experience!
  }

  type Query {
    getExperiencesByUserId(userId: ID!): [Experience]!
  }
`;

export default typeDef;
