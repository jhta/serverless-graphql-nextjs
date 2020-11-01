
import React, { MouseEvent, useState } from 'react'
import { useMutation } from '@apollo/client';
import InputRange from 'react-input-range';
import styles from './form.module.css'

import { postExperienceMutation } from 'services/experiences/mutations';
import { ILabels } from 'interfaces/Experience';

const input = {
  userId: 123,
  description: 'This is a nice number',
}

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
  const [postExp, data] = useMutation(postExperienceMutation)
  const { value: labels, setByLabel } = useLabelsForm()

  const labelKeys = Object.keys(initialLabels)

  const handleCreateExperience = async (e: MouseEvent) => {
    e.preventDefault()
    await postExp({
      variables: {
        input: {
          ...input,
          labels,
      } }
    })
  }

  return (
      <div className={styles.form}>
        <h1 className={styles.title}>Create new experience</h1>
        {
        labelKeys.map((label: keyof ILabels, index) => (
          <div key={index} className={styles.inputRange}>
            <InputRange
              maxValue={10}
              minValue={0}
              value={labels[label]}
              onChange={(v) => { setByLabel(label, v as number) }}
            />
          </div>
          ))
        }
        <button onClick={handleCreateExperience}>Create</button>
      </div>
  )
}

export default Form 