import { gql } from "apollo-server-lambda";

const typeDef = gql`
  type Labels {
    money: Int!
    spirituality: Int!
    health: Int!
    career: Int!
    love: Int!
    social: Int!
    hobbies: Int!
    growth: Int!
  }

  input LabelsInput {
    money: Int!
    spirituality: Int!
    health: Int!
    career: Int!
    love: Int!
    social: Int!
    hobbies: Int!
    growth: Int!
  }

  input ExperienceInput {
    userId: ID!
    labels: LabelsInput!
    description: String
  }

  type Experience {
    userId: ID!
    createdAt: String!
    labels: Labels!
    description: String
  }

  type Mutation {
    postExperience(input: ExperienceInput!): Experience!
  }

  type Query {
    getExperiencesByUserId(userId: ID!): [Experience]!
  }
`;

export default typeDef;
