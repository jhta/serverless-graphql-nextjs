import { gql } from '@apollo/client'

export const postExperienceMutation = gql`
  mutation experience($input: ExperienceInput!) {
    postExperience(input: $input) {
      userId
      createdAt
    }
  }
`
