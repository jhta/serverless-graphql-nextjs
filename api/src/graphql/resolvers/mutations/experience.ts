import { IExperience, IExperienceMutationArgs } from "../typings";
import AWS from "aws-sdk";

AWS.config.update({ region: "eu-west-1" });
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.EXPERIENCE_TABLE;

async function post(data) {
  const record = await dynamoDB
    .put({
      TableName,
      Item: {
        ...data,
        timestamp: new Date().getTime(),
      },
    })
    .promise();

  console.log("record", record);

  return data;
}

async function postExperienceMutation(
  _: any,
  args: IExperienceMutationArgs
): Promise<IExperience> {
  const {
    input: { userId, energy },
  } = args;

  try {
    await post({ user_id: userId, energy });
  } catch (error) {
    console.log("this is the error", error);
  }
  console.log(
    `Mutation with inputs firstInput=${userId} and secondInput=${energy}`
  );

  return { userId, energy };
}

export default postExperienceMutation;
