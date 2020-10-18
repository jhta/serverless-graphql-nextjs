export default `
  type Mutation {
    postExperience(input: ExperienceInput!): Experience!
    dummyMutation(input: DummyInput!): Boolean!
  }
`;
