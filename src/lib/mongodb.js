import { MongoClient } from "mongodb";

const uri = "mongodb+srv://shustorovychmark:1111@cluster0.byjqmy8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect().then((client) => {
    return client;
  }).catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
    throw err;
  });
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
