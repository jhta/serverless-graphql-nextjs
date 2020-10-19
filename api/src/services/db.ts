import AWS from "aws-sdk";

AWS.config.update({ region: "eu-west-1" });
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.EXPERIENCE_TABLE;

export async function post(data) {
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

export async function get(query) {
  const { Items } = await dynamoDB.query({ TableName, ...query }).promise();
  return Items;
}
