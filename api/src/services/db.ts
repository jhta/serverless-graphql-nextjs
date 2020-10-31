import AWS from "aws-sdk";
import { IExperience } from "../graphql/resolvers/typings";

AWS.config.update({ region: "eu-west-1" });
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.EXPERIENCE_TABLE;

export async function post(data) {
  const Item = {
    ...data,
    timestamp: new Date().getTime(),
  };
  await dynamoDB
    .put({
      TableName,
      Item,
    })
    .promise();

  return data;
}

export async function get(query) {
  const { Items } = await dynamoDB.query({ TableName, ...query }).promise();
  return Items;
}

export async function getExperiencesByUserId(
  userId: string
): Promise<IExperience[]> {
  const params = {
    KeyConditionExpression: "user_id = :uid",
    ExpressionAttributeValues: {
      ":uid": userId,
    },
    ScanIndexForward: false,
  };

  const data = await get(params);
  const experiments = data.map(
    ({ labels, user_id: userId, timestamp: createdAt, description }) => ({
      labels,
      userId,
      createdAt,
      description,
    })
  );

  return experiments;
}
