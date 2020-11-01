
import React, { MouseEvent, useState } from 'react'
import { useMutation } from '@apollo/client';
import InputRange from 'react-input-range';
import Button from 'components/button'
import styles from './form.module.css'
import { getEmoji } from 'lib/emoji'

import { postExperienceMutation } from 'services/experiences/mutations';
import { ILabels } from 'interfaces/Experience';
import { useDispatch } from 'store/hooks'
import { addExperience as createAddExperience} from 'store/experiences/actions'


const initialLabels: ILabels = {
  money: 5,
  spirituality: 5,
  health: 5,
  career: 5,
  love: 5,
  social: 5,
  hobbies: 5,
  growth: 5,
}

function useLabelsForm() {
  const [value, setValue] = useState(initialLabels)

  const setByLabel = (label: keyof ILabels, labelValue: number) => setValue({
    ...value,
    [label]: labelValue
  })
  return { value, setByLabel }
}


const Form = () => {
  const [postExp, { loading, called }] = useMutation(postExperienceMutation)
  const { value: labels, setByLabel } = useLabelsForm()
  const addExperience = useDispatch(createAddExperience)

  const labelKeys = Object.keys(initialLabels)

  const handleCreateExperience = async (e: MouseEvent) => {
    e.preventDefault()

    const input = {
      userId: '123',
      description: 'hellooooooo',
      labels
    }

    await postExp({
      variables: {
        input 
      }
    })

    const experience = {
      ...input,
      createdAt: new Date().getTime() + ''
    }

    addExperience({ experience })
  }

  return (
      <div className={styles.form}>
        <h1 className={styles.title}>Create new experience</h1>
        {
        labelKeys.map((label: keyof ILabels, index) => (
          <div key={index} className={styles.inputRange}>
            <h3 className={styles.label}>{ `${label} ${getEmoji(label)}`}</h3>
            <InputRange
              maxValue={10}
              minValue={0}
              value={labels[label]}
              onChange={(v) => { setByLabel(label, v as number) }}
            />
          </div>
          ))
        }
      <Button
        onClick={handleCreateExperience}
      >
        {loading ? 'Loading...' : 'Create'}
      </Button>
      </div>
  )
}

export default Form 