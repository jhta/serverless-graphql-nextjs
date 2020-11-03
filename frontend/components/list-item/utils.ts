import { formatRelative } from 'date-fns'
import { getEmoji } from 'lib/emoji'
import { ILabels } from '../../interfaces/Experience'

export const formatDate = (createdAt: string): string =>
  formatRelative(new Date(parseInt(createdAt)), new Date())

export const formatLabel = (labels: ILabels) => {
  return Object.entries(labels).reduce((acc, [label, value]) => {
    if (label === '__typename') return acc
    return `${acc} ${value} ${getEmoji(label as keyof ILabels)}`
  }, '')
}
