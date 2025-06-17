const { MongoClient } = require("mongodb");
const URL =
  "mongodb+srv://saranpreetsingh:kLQA49WroirlonZV@nodejs.gqso1yf.mongodb.net/?retryWrites=true&w=majority&appName=nodeJS";
const client = new MongoClient(URL);
const dbname = "HelloWorld";

async function main() {
  await client.connect();
  console.log("connected succesfully to the server");
  const db = client.db(dbname);
  const collection = db.collection("user");

  const data={
     firstname: 'rohan',
    lastname: 'singh',
    city: 'new delhi'
  }
  
  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents=>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("found documents=>", findResult);

  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    client.close();
  });
