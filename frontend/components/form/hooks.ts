import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useSession } from 'next-auth/client'

import { postExperienceMutation } from 'services/experiences/mutations'
import { ILabels } from 'interfaces/Experience'

import { useDispatch } from 'store/hooks'
import { addExperience as createAddExperience } from 'store/experiences/actions'
import { hideModal as hideModalCreator } from 'store/ui/actions'

import { initialLabels } from './utils'

export function useLabelsForm() {
  const [value, setValue] = useState(initialLabels)

  const setByLabel = (label: keyof ILabels, labelValue: number) =>
    setValue({
      ...value,
      [label]: labelValue,
    })
  return { value, setByLabel }
}

export function usePostExperience() {
  const [postExp, { loading, called }] = useMutation(postExperienceMutation)
  const addExperience = useDispatch(createAddExperience)
  const hideModal = useDispatch(hideModalCreator)
  const [session] = useSession()

  const postExperience = async (input: any) => {
    if (!session) return

    const {
      user: { email },
    } = session
    await postExp({
      variables: {
        input: {
          ...input,
          userId: email,
        },
      },
    })

    const experience = {
      ...input,
      createdAt: new Date().getTime() + '',
    }

    addExperience({ experience })
    hideModal()
  }

  return {
    postExperience,
    loading,
    called,
  }
}
