const {z} = require("zod");

// Creating an object schema

const signupSchema = z.object({
    username: z
    .string({required_error: "name is required"})
    .trim()
    .min(3, {message: "name must be atleast 3 characters"})
    .max(60, {message: "name must not be more than 60Character"}),

    email:z
    .string({required_error: "Must required"})
    .trim()
    .email({message: "Invalid Email"})
    .min(3, {message: "Must have atleast 3characters"})
    .max(60,{message: "Must not be more than 60characters"}),

    phone:z
    .string({required_error: "phone is required"})
    .trim()
    .min(10, {message: "name must be atleast 10 characters"})
    .max(20, {message: "name must not be more than 20Character"}),

    password:z
    .string({required_error: "name is required"})
    .trim()
    .min(7, {message: "name must be atleast 7 characters"})
    .max(20, {message: "name must not be more than 20Character"}),


})

module.exports = signupSchema;