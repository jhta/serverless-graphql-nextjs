import { IExperience, IExperienceMutationArgs } from "../typings";

async function postExperienceMutation(
  _: any,
  args: IExperienceMutationArgs
): Promise<IExperience> {
  const {
    input: { userId, energy },
  } = args;

  console.log(
    `Mutation with inputs firstInput=${userId} and secondInput=${energy}`
  );

  return { userId, energy };
}

export default postExperienceMutation;
