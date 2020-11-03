import { IExperience, ILabels } from 'interfaces/Experience'
import { getEmoji } from 'lib/emoji'

export const graphOptions = {
  scale: {
    ticks: { beginAtZero: true },
  },
}

const COLORS = {
  money: '#7cc37ca8',
  spirituality: '#2672f48c',
  health: '#309c2dba',
  career: '‍#de9923ba',
  love: '#de2337ba',
  social: '#c723dea1',
  hobbies: '#74da7f78',
  growth: '#f5ff2999',
}

const getColorByLabel = (label: keyof ILabels) => COLORS[label]

const getKeys = (labels: string[]) =>
  labels.map((label) => `${label} ${getEmoji(label as keyof ILabels)}`)

export const createData = ({ labels }: IExperience) => {
  const labelKeys = Object.keys(labels).filter((key) => key !== '__typename')

  const keys = getKeys(labelKeys)
  const colors = labelKeys.map(getColorByLabel)
  const values = (Object as any).values(labels).filter(Number.isInteger)
  return {
    labels: keys,
    datasets: [
      {
        borderWidth: 0,
        label: 'Experience',
        data: values,
        backgroundColor: colors,
      },
    ],
  }
}
