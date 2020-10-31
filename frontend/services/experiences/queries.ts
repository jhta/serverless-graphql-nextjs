import { gql } from '@apollo/client'

export const getExperiencesQuery = gql`
  query getExperiences($id: ID!) {
    getExperiencesByUserId(userId: $id) {
      userId
      createdAt
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

export const createExperienceMutation = () => gql`
  mutation experience($input: ExperienceInput!) {
    postExperience(input: $input) {
      userId
      createdAt
    }
  }
`
