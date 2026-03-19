import React from 'react'
import type { FormConfigType, ValidationMode } from './App'
import FormField from './FormField'
import { validateComp } from './validate'
type Props = {
    formConfig: FormConfigType[],
    changeType: ValidationMode
}
type State = {
    formData: Record<string, string | number>,
    errors: Record<string, string>
}
function validate(
    formConfig: FormConfigType[],
    formData: Record<string, string | number>,
    setErrors: (errors: Record<string, string>) => void
) {
    const newErrors: Record<string, string> = {};

    formConfig.forEach((field) => {
        const val = formData[field.name] ?? "";
        let errorMessage = "";

        field.validation?.forEach((validation) => {
            if (errorMessage) return;

            errorMessage = validateComp(validation, val, formData)
        });

        if (errorMessage) {
            newErrors[field.name] = errorMessage;
        }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
}
class Form extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            formData: {},
            errors: {}
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>): void {
        if (prevProps.changeType !== this.props.changeType) {
            this.setState({ errors: {} })
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { formConfig, changeType } = this.props;
        const { formData } = this.state;

        if (changeType === "onSubmit") {
            const valid = validate(formConfig, formData, this.setErrors);

            if (!valid) return;
        }
        // if(this.state.errors){
        //     return null;
        // }

        console.log(formData);
    }
    clear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.setState({
            formData: {},
            errors: {},
        })
    }
    setFormData = (updater: any) => {
        this.setState((prev) => ({
            formData: updater(prev.formData)
        }))

    }

    setErrors = (updater: any) => {
        this.setState((prev) => ({
            errors: typeof updater === "function" ? updater(prev.errors) : updater
        }));
    };

    render() {
        const { formConfig, changeType } = this.props;
        const { formData, errors } = this.state;

        return (
            <>
                <form
                    onSubmit={this.handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        marginTop: "30px",
                    }}
                >
                    {formConfig
                        .filter((formField: FormConfigType) => {
                            if (!formField.condition) return true;

                            const { field, value } = formField.condition;

                            if (!formData[field]) return false;

                            return formData[field] === value;
                        })
                        .map((formField: FormConfigType) => (
                            <div key={formField.id}>
                                <FormField
                                    formfield={formField}
                                    formData={formData}
                                    setFormData={this.setFormData}
                                    errors={errors}
                                    setErrors={this.setErrors}
                                    changeType={changeType}
                                />
                            </div>
                        ))}

                    <button onClick={this.clear}>Clear</button>

                    <input type="submit" />
                </form>
            </>
        );
    }
}
export default Form
