import { IExperience } from "../typings";
import * as db from "../../../services/db";

async function getExperiencesByUserId(
  _: any,
  { userId }
): Promise<IExperience[]> {
  console.log(`Query object with id ${userId}`);
  try {
    const experiences = await db.getExperiencesByUserId(userId);
    return experiences;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default getExperiencesByUserId;
