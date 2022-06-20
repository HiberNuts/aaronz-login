import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongodb connected `);
  } catch (error) {
    console.log(`Inside dbConnecter - Error : ${error.message}`);
  }
};

export default connectDB;



// mongoose.connection.db.listCollections().toArray(function (err, names) {
    //   console.log(names[2]); // [{ name: 'dbname.myCollection' }]
    // });

    // console.log((await mongoose.connection.db.collections()).forEach((name) => console.log(name)));

    // const collection = await mongoose.connection.db.collections();
    // console.log(collection[2].s.db.s.client);

    // mongoose.connection.on("open", function () {
    //   mongoose.connection.db.collections(function (error, names) {
    //     if (error) {
    //       throw new Error(error);
    //     } else {
    //       // console.log(names);
    //       names.map(function (name) {
    //         console.log("found collection: %s", name.s.db.s.client);
    //       });
    //     }
    //   });
    // });
    //added commment