import { IDummyObject, IDummyQueryArgs } from "../typings";

async function dummyQuery(
  _: any,
  args: IDummyQueryArgs
): Promise<IDummyObject> {
  const { itemId } = args;

  console.log(`Query object with id ${itemId}`);

  return {
    firstItem: "hello",
    secondItem: "from lambda :D ",
  };
}

export default dummyQuery;
