import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address!"],
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer",
    },
},
{ timestamps: true }
);

// Password hash middleware that will hash the password before saving it in our database
// pre is a mongoose middleware that runs before the 'save' event
// next is a callback to indicate that the middleware is done and to proceed to the next middleware or save operation
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return; // If password is not modified, proceed to the next middleware or save operation
    }
    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds of processing
    this.password = await bcrypt.hash(this.password, salt); // Hash the password using the generated salt
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

export default mongoose.model("User", userSchema);