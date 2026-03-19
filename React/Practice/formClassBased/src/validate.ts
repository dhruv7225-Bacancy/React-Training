export function validateComp(validation, val, formData) {
    let errorMessage = ""
    switch (validation.type) {
        case "NotValidName":
            if (!/^[A-Za-z]+$/.test(val as string)) {
                errorMessage = validation.message;
            }
            break;

        case "min":
            if (
                typeof validation.value !== "undefined" &&
                Number(val) < validation.value
            ) {
                errorMessage = validation.message;
            }
            break;

        case "max":
            if (
                typeof validation.value !== "undefined" &&
                Number(val) > validation.value
            ) {
                errorMessage = validation.message;
            }
            break;

        case "email":
            if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    val as string
                )
            ) {
                errorMessage = validation.message;
            }
            break;

        case "minLen":
            if (
                typeof validation.value !== "undefined" &&
                (val as string).length < validation.value
            ) {
                errorMessage = validation.message;
            }
            break;

        case "includeSpecialCharacters":
            if (typeof val === "string") {
                if (!/[!@#$%^&*]/.test(val)) {
                    errorMessage = validation.message;
                }
            }
            break;

        case "match":
            if (formData["password"] !== val) {
                errorMessage = validation.message;
            }
            break;

        case "number":
            if (!/^\d{10}$/.test(val as string)) {
                errorMessage = validation.message;
            }
            break;
        case "minTags":
            {
                // const tags = Array.isArray(val) ? val : formData[formfield.name]
                const tags = Array.isArray(val) ? val : []

                if (Array.isArray(tags) && tags.length < validation.value!) {
                    errorMessage = validation.message
                }
            }
            break;
    }
    return errorMessage
}