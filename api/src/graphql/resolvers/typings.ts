export interface IExperience {
  userId: string;
  labels: ILabels;
  createdAt: number;
}
export interface IExperienceMutationArgs {
  input: {
    userId: string;
    labels: ILabels;
  };
}

export interface ILabels {
  money: number;
  spirituality: number;
  health: number;
  career: number;
  love: number;
  social: number;
  hobbies: number;
  growth: number;
}
