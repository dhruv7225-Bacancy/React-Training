import { z } from "zod";

export const formSchema = z.object({
  firstname: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z]+$/, "Enter Valid Name"),

  age: z
    .string()
    .min(1, "Age required")
    .refine((val) => Number(val) >= 10, {
      message: "Minimum age must be 10",
    })
    .refine((val) => Number(val) <= 60, {
      message: "Maximum age must be 60",
    }),

  email: z
    .string()
    .min(1, "Email required")
    .email("Enter a Valid Email"),

  phone: z
    .string()
    .regex(/^\d{10}$/, "number should be exact 10 digits long"),

  password: z
    .string()
    .min(8, "Password must be minimum 8 char long")
    .regex(/[!@#$%^&*]/, "Password must include special characters like @,#,$,% etc"),

  confirmPassword: z.string(),

  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender is required" }),
  }),

  height: z
    .string()
    .optional(),

  weight: z
    .string()
    .optional(),

  country: z.string(),

  hobbies: z
    .array(z.string())
    .min(2, "Add at least 2 hobby"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Password and confirm password must be same",
  path: ["confirmPassword"],
})
.refine((data) => {
  if (data.gender === "male") {
    return !!data.height;
  }
  return true;
}, {
  message: "Height required for male",
  path: ["height"],
})
.refine((data) => {
  if (data.gender === "female") {
    return !!data.weight;
  }
  return true;
}, {
  message: "Weight required for female",
  path: ["weight"],
});