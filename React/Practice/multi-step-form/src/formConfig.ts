import type { FormConfigType } from "./types";

export const formConfig:FormConfigType = {
  formId: "user-registration",
  title: "Config Driven Multi Step Form",
  steps: [
    {
      id: "personal_info",
      title: "Personal Information",
      fields: [
        {
          name: "fullName",
          label: "Full Name",
          type: "text",
          placeholder: "Enter your full name",
          defaultValue: "",
          validations: [
            { type: "required", message: "Full Name is required" },
            { type: "minLength", value: 3, message: "Minimum 3 characters required" }
          ]
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
          defaultValue: "",
          validations: [
            { type: "required", message: "Email is required" },
            {
              type: "pattern",
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address"
            }
          ]
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "text",
          placeholder: "Enter 10 digit phone number",
          defaultValue: "",
          validations: [
            { type: "required", message: "Phone Number is required" },
            {
              type: "pattern",
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits"
            }
          ]
        }
      ]
    },
    {
      id: "account_setup",
      title: "Account Setup",
      fields: [
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter password",
          defaultValue: "",
          validations: [
            { type: "required", message: "Password is required" },
            { type: "minLength", value: 8, message: "Password must be at least 8 characters" },
            {
              type: "pattern",
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: "Password must contain uppercase, lowercase, and a number"
            }
          ]
        },
        {
          name: "confirmPassword",
          label: "Confirm Password",
          type: "password",
          placeholder: "Re-enter password",
          defaultValue: "",
          validations: [
            { type: "required", message: "Confirm Password is required" },
            {
              type: "matchField",
              field: "password",
              message: "Passwords do not match"
            }
          ]
        }
      ]
    },
    {
      id: "profile_details",
      title: "Profile Details",
      fields: [
        {
          name: "age",
          label: "Age",
          type: "number",
          placeholder: "Enter your age",
          defaultValue: "",
          validations: [
            { type: "required", message: "Age is required" },
            { type: "min", value: 18, message: "Age must be at least 18" }
          ]
        },
        {
          name: "gender",
          label: "Gender",
          type: "radio",
          defaultValue: "",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" }
          ],
          validations: [
            { type: "required", message: "Please select gender" }
          ]
        },
        {
          name: "country",
          label: "Country",
          type: "select",
          placeholder: "Select country",
          defaultValue: "",
          options: [
            { label: "India", value: "india" },
            { label: "USA", value: "usa" },
            { label: "Germany", value: "germany" }
          ],
          validations: [
            { type: "required", message: "Please select country" }
          ]
        },
        {
          name: "bio",
          label: "Bio",
          type: "textarea",
          placeholder: "Tell us about yourself",
          defaultValue: "",
          validations: [
            { type: "maxLength", value: 200, message: "Bio cannot exceed 200 characters" }
          ]
        },
        {
          name: "termsAccepted",
          label: "I accept the terms and conditions",
          type: "checkbox",
          defaultValue: false,
          validations: [
            {
              type: "custom",
              validate: (value:boolean) => value === true,
              message: "You must accept the terms and conditions"
            }
          ]
        }
      ]
    }
  ]
};