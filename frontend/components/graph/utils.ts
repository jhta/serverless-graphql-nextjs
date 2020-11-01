import { IExperience } from 'interfaces/Experience'

export const graphOptions = {
  scale: {
    ticks: { beginAtZero: true },
  },
}

export const createData = ({ labels }: IExperience) => {
  const keys = Object.keys(labels).filter((key) => key !== '__typename')
  const values = (Object as any).values(labels).filter(Number.isInteger)
  return {
    labels: keys,
    datasets: [
      {
        label: 'Experience',
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'yellow',
          'green',
          'blue',
          'pink',
          'purple',
          'red',
          'gold',
        ],
      },
    ],
  }
}
