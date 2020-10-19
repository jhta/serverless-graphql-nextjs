import { IExperience } from "../typings";
import * as db from "../../../services/db";

async function getExperiencesByUserId(
  _: any,
  { userId }
): Promise<IExperience[]> {
  console.log(`Query object with id ${userId}`);

  const params = {
    KeyConditionExpression: "user_id = :uid",
    ExpressionAttributeValues: {
      ":uid": userId,
    },
    ScanIndexForward: false,
  };

  try {
    const experiences = await db.get(params);
    const ex = experiences.map(({ energy, user_id: userId }) => ({
      energy,
      userId,
    }));
    return ex;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default getExperiencesByUserId;
