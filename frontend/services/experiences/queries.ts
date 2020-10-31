import { gql } from '@apollo/client'

export const getExperiencesQuery = gql`
  query getExperiences($id: ID!) {
    getExperiencesByUserId(userId: $id) {
      userId
      description
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
