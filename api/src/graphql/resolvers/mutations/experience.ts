import { IExperience, IExperienceMutationArgs } from "../typings";
import * as db from "../../../services/db";

async function postExperienceMutation(
  _: any,
  args: IExperienceMutationArgs
): Promise<IExperience> {
  const {
    input: { userId, labels, description },
  } = args;

  const createdAt = new Date().getTime();
  try {
    await db.post({ user_id: userId, labels, description });
  } catch (error) {
    console.log("this is the error", error);
  }
  console.log(
    `Mutation with inputs userId=${userId} and cratedAd=${createdAt}`
  );

  return { userId, createdAt: new Date().getTime(), labels, description };
}

export default postExperienceMutation;
