import { IExperience, IExperienceMutationArgs } from "../typings";
import * as db from "../../../services/db";

async function postExperienceMutation(
  _: any,
  args: IExperienceMutationArgs
): Promise<IExperience> {
  const {
    input: { userId, energy },
  } = args;

  try {
    await db.post({ user_id: userId, energy });
  } catch (error) {
    console.log("this is the error", error);
  }
  console.log(
    `Mutation with inputs firstInput=${userId} and secondInput=${energy}`
  );

  return { userId, energy };
}

export default postExperienceMutation;
