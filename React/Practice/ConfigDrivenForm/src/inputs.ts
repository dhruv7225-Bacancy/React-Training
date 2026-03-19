import type { CategoryType } from "./types";

export const inputs: CategoryType[] = [
    {
        category: "Personal Details",
        fields: [
            {
                type: "text",
                id: "firstname",
                name: "firstname",
                label: "First Name:",
                required: true,
                validation: [
                    {
                        type: "required",
                        message: "Name is required"
                    },
                    {
                        type: "NotValidName",
                        regex: /^[a-zA-Z]+$/,
                        message: "Enter Valid Name"
                    }
                ]

            },

            {
                type: "number",
                id: "age",
                name: "age",
                label: "Age: ",
                required: true,
                validation: [
                    {
                        type: "required",
                        message: "Age is required"
                    },
                    {
                        type: "min",
                        value: 10,
                        message: "Minimum age must be 10"
                    },
                    {
                        type: "max",
                        value: 60,
                        message: "Maximum age must be 60"
                    }
                ]

            },
            {
                type: "radio",
                id: "gender",
                name: "gender",
                label: "Gender",
                required: true,
                options: [
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" }
                ],
                validation: [
                    {
                        type: "required",
                        message: "gender is required"
                    }
                ]

            },
            {
                type: "number",
                id: "height",
                name: "height",
                label: "Height: ",
                condition: {
                    field: "gender",
                    value: "male"
                }
            },
            {
                type: "number",
                id: "weight",
                name: "weight",
                label: "Weight: ",
                condition: {
                    field: "gender",
                    value: "female"
                }
            },
        ]
    },
    {
        category: "Contact Details",
        fields: [
            {
                type: "text",
                id: "email",
                name: "email",
                label: "Email: ",
                required: true,
                validation: [
                    {
                        type: "required",
                        message: "Email is required"
                    },
                    {
                        type: "email",
                        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a Valid Email"
                    }
                ]

            },
            {
                type: "text",
                id: "phone",
                name: "phone",
                label: "Phone Number: ",
                required: true,
                validation: [
                    {
                        type: "required",
                        message: "Phone Number is required"
                    },
                    {
                        type: "phoneNumber",
                        regex: /^\d{10}$/,
                        message: "Enter a Valid 10 digit phone number with out character"
                    }
                ]

            },
        ]
    },
    {
        type: "password",
        id: "password",
        name: "password",
        label: "password: ",
        required: true,
        validation: [
            {
                type: "required",
                message: "Password is required"
            },
            {
                type: "minLen",
                value: 8,
                message: "Password must be minimum 8 char long"
            },
            {
                type: "includeSpecialCharacters",
                regex: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
                message: "Password must include special characters like @,#,$,% etc"
            }
        ]

    },
    {
        type: "password",
        id: "confirmPassword",
        name: "confirmPassword",
        label: "confirmPassword: ",
        required: true,
        validation: [
            {
                type: "required",
                message: "ConfirmPassword is required"
            },
            {
                type: "match",
                ref: "password",
                message: "Password and confirm password must be same"
            }
        ]

    },

    {
        type: "select",
        id: "country",
        name: "country",
        label: "Country",
        placeholder: "Select country",
        options: [
            { name: "India", value: "india" },
            { name: "USA", value: "usa" },
            { name: "Canada", value: "canada" }
        ],
        defaultValue: "canada"
    },
    {
        type: "checkbox",
        id: "skill",
        name: "skill",
        label: "Skills : ",
        required: true,
        options: [
            { name: "React", value: "react" },
            { name: "Java", value: "java" },
            { name: "Javascript", value: "javascript" },
        ],
        validation: [
            {
                type: "required",
                message: "at least one skill required"
            }
        ]
    },
    {
        type: "tag",
        id: "hobbies",
        name: "hobbies",
        label: "Hobbies: ",
        required:true,
        defaultValue:[],
        validation: [
            {
                type: "minTags",
                value: 2,
                message: "Minimum 2 Hobbies required"
            }
        ]
    }
]

