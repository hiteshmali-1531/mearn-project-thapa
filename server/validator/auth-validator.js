const { z } = require('zod')
// Creating an object schema

const signupSchema = z.object({
    username: z.string({ required_error: "Name is required" }).trim().min(3, { message: "Name must be at least 2 chars" }),
    email: z 
    .string({required_error: "Email is required"}).trim()
    .email({message : "Invalid email address"})
    .min(3, {message:"Email must be at least 3 characters"})
    .max(255, {message:"Email must be at most 255 characters"}),
    phone: z
    .string({required_error: "Phone number is required"})
    .trim()
    .min(10, {message:"Phone number must be at least 10 characters"})
    .max(20, {message: "Phone must not be more than 20 characters"}),

    password: z
    .string({required_error: "Password is required"})
    .min(7 , {message: "password must not be less than 7 characters"})
    .max(1024, {message:"password can't greater than 1024 characters"})

});

module.exports = signupSchema;