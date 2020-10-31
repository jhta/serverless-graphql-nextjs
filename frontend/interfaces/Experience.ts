export interface IExperience {
  userId: string
  labels: ILabels
  createdAt: string
  description?: string
}

export interface ILabels {
  money: number
  spirituality: number
  health: number
  career: number
  love: number
  social: number
  hobbies: number
  growth: number
}
