export interface IDummyObject {
  firstItem: string;
  secondItem: string;
}

export interface IExperience {
  userId: string;
  energy: number;
}
export interface IExperienceMutationArgs {
  input: IExperience;
}

export interface IDummyQueryArgs {
  itemId: string;
}

export interface IDummyMutationArgs {
  input: {
    firstInput: string;
    secondInput: string;
  };
}
