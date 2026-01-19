import mongoose from "mongoose";

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DB_NAME } =
  process.env;

if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_CLUSTER || !MONGODB_DB_NAME) {
  throw new Error("Missing MongoDB environment variables in .env");
}

const encodedUser = encodeURIComponent(MONGODB_USER);
const encodedPass = encodeURIComponent(MONGODB_PASSWORD);

// Example: cluster could be "cluster0.abcde.mongodb.net"
const MONGODB_URI = `mongodb+srv://${encodedUser}:${encodedPass}@${MONGODB_CLUSTER}/${MONGODB_DB_NAME}?retryWrites=true&w=majority`;

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
