import React, { MouseEvent, useState } from 'react'
import InputRange from 'react-input-range';
import Button from 'components/button'
import styles from './form.module.css'
import { getEmoji } from 'lib/emoji'

import { ILabels } from 'interfaces/Experience';
import { usePostExperience, useLabelsForm } from './hooks'
import { initialLabels } from './utils'

const Form = () => {
  const { value: labels, setByLabel } = useLabelsForm()
  const { loading, postExperience } = usePostExperience()
  const [description, setDescription] = useState('')

  const labelKeys = Object.keys(initialLabels)

  const handleCreateExperience = async (e: MouseEvent) => {
    e.preventDefault()

    const input = {
      description,
      labels
    }
    postExperience(input)
  }

  const handleInputDescription = (event: any) => {
    const { target: { value }} = event
    setDescription(value)
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
      <div className={styles.inputGroup}>
        <h3 className={styles.label}>Description (optional)</h3>
        <textarea
          className={styles.input}
          value={description}
          onChange={handleInputDescription}
        />
      </div>
      <Button
        onClick={handleCreateExperience}
      >
        {loading ? 'Loading...' : 'Create'}
      </Button>
    </div>
  )
}

export default Form 