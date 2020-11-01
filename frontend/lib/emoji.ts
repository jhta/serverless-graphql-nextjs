/* tslint:disable */
import { ILabels } from 'interfaces/Experience'

const emojis = {
  money: '💵',
  spirituality: '🧿',
  health: '💊',
  career: '‍💻',
  love: '❤️',
  social: '🤝',
  hobbies: '🎸',
  growth: '📈',
}

export const getEmoji = (label: keyof ILabels): string => emojis[label] || ''
