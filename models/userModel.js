// for schemas
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      isAdmin: {
         type: Boolean,
         default: false,
      },
      number: {
         type: Number,
         required: true,
      },
   },
   {
      timestamps: true,
   }
);
userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

userSchema.set("toJSON", {
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject.__v;
      delete returnedObject.password;
      // the passwordHash should not be revealed
   },
});

export default User;
