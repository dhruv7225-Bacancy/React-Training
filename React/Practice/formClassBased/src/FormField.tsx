import React from 'react'
import type { FormConfigType, Option } from './App';
import { validateComp } from './validate';

type Props = {
    formfield: FormConfigType;
    formData: Record<string, string | number | string[]>;
    setFormData: (updater: any) => void;
setErrors: (errors: any) => void;
    errors: Record<string, string>;
    changeType: string;
};

type State = {
    inputValue: string;
};
class FormField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }

    changeValue = (val) => {
        const { formfield, formData, setFormData, changeType } = this.props;
        setFormData((prev) => {
            return {
                ...prev,
                [formfield.name]: val
            }
        })

        if (changeType === "onChange") {
            let errormsg = this.runValidation(formfield.validation, val, formData);
            this.props.setErrors((prev) => {
                return {
                    ...prev,
                    [formfield.name]: errormsg
                }
            })
        }
    }
    runValidation = (validations, val, formData) => {
        let error = "";

        for (const validation of validations ?? []) {
            error = validateComp(validation, val, formData);
            if (error) break;
        }

        return error;
    }
    validateOnBlur = (val) => {
        const { formfield, formData, changeType } = this.props;
        if (changeType === "onBlur") {
            let errormsg = this.runValidation(formfield.validation, val, formData);
            this.props.setErrors((prev) => {
                return {
                    ...prev,
                    [formfield.name]: errormsg
                }
            })
        }
    }
    addTag = (e) => {
        const { formfield, formData, setFormData, changeType } = this.props;
        const hobbies = (formData[formfield.name] as string[]) ?? [];

        if (e.key === "Enter") {
            e.preventDefault();

            const newTags = [...hobbies, this.state.inputValue];

            setFormData((prev) => ({
                ...prev,
                [formfield.name]: newTags,
            }));

            this.setState({ inputValue: "" });

            if (changeType === "onChange") {
                let errormsg = this.runValidation(formfield.validation, newTags, {
                    ...formData,
                    [formfield.name]: newTags
                });
                this.props.setErrors((prev) => {
                    return {
                        ...prev,
                        [formfield.name]: errormsg
                    }
                })
            }
        }
    }
    removeTag = (index) => {
        const { formfield, formData, setFormData, changeType } = this.props;

        const hobbies = (formData[formfield.name] as string[]) ?? [];

        const newTags = hobbies.filter((_, i) => i !== index);

        setFormData((prev) => ({
            ...prev,
            [formfield.name]: newTags,
        }));

        if (changeType === "onChange") {
            let errormsg = this.runValidation(formfield.validation, newTags, {
                ...formData,
                [formfield.name]: newTags
            });
            this.props.setErrors((prev) => {
                return {
                    ...prev,
                    [formfield.name]: errormsg
                }
            })
        }
    }

    render() {
        const { formfield, formData, errors } = this.props;

        if (formfield.condition) {
            const { field, value } = formfield.condition;
            if (formData[field] !== value) return null;
        }

        switch (formfield.type) {
            case "text":
            case "email":
            case "number":
            case "password":
                return (
                    <>
                        <label htmlFor={formfield.id}>{formfield.label}</label>

                        <input
                            type={formfield.type}
                            name={formfield.name}
                            id={formfield.id}
                            value={(formData[formfield.name] as string) ?? ""}
                            onChange={(e) => this.changeValue(e.target.value)}
                            placeholder={formfield.placeholder ?? ""}
                            required={formfield.required ?? false}
                            onBlur={(e) => this.validateOnBlur(e.target.value)}
                        />

                        {errors[formfield.name] && (
                            <span style={{ color: "red" }}>{errors[formfield.name]}</span>
                        )}
                    </>
                );

            case "confirmPassword":
                return (
                    <>
                        <label htmlFor={formfield.id}>{formfield.label}</label>

                        <input
                            type="password"
                            name={formfield.name}
                            id={formfield.id}
                            value={(formData[formfield.name] as string) ?? ""}
                            onChange={(e) => this.changeValue(e.target.value)}
                            onBlur={(e) => this.validateOnBlur(e.target.value)}
                        />

                        {errors[formfield.name] && (
                            <span style={{ color: "red" }}>{errors[formfield.name]}</span>
                        )}
                    </>
                );

            case "radio":
                return (
                    <>
                        <label>{formfield.label}</label>

                        {formfield.options?.map((option: Option) => (
                            <label key={option.value} style={{ marginLeft: "10px" }}>
                                <input
                                    type="radio"
                                    name={formfield.name}
                                    value={option.value}
                                    checked={formData[formfield.name] === option.value}
                                    onChange={(e) => this.changeValue(e.target.value)}
                                />
                                {option.label}
                            </label>
                        ))}
                    </>
                );

            case "select":
                return (
                    <>
                        <label htmlFor={formfield.id}>{formfield.label}</label>

                        <select
                            name={formfield.name}
                            id={formfield.id}
                            value={
                                (formData[formfield.name] as string) ??
                                formfield.options![0].value
                            }
                            onChange={(e) => this.changeValue(e.target.value)}
                        >
                            {formfield.options?.map((option: Option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </>
                );

            case "tag":
                {
                    const hobbies = (formData[formfield.name] as string[]) ?? [];

                    return (
                        <>
                            <label htmlFor={formfield.id}>{formfield.label}</label>

                            <div>
                                {hobbies.map((hobby, index) => (
                                    <div
                                        key={hobby + index}
                                        style={{ display: "flex", gap: "5px", marginTop: "10px" }}
                                    >
                                        <div
                                            style={{
                                                padding: "7px",
                                                backgroundColor: "white",
                                                borderRadius: "10px",
                                                minWidth: "50px",
                                            }}
                                        >
                                            {hobby}
                                        </div>

                                        <button onClick={() => this.removeTag(index)}>x</button>
                                    </div>
                                ))}

                                <input
                                    type="text"
                                    value={this.state.inputValue}
                                    onChange={(e) => this.setState({ inputValue: e.target.value })}
                                    onKeyDown={this.addTag}
                                    placeholder="press enter to add hobby"
                                    onBlur={() =>
                                        this.validateOnBlur(
                                            (formData[formfield.name] as string[]) ?? []
                                        )
                                    }
                                />
                            </div>

                            {errors[formfield.name] && (
                                <span style={{ color: "red" }}>{errors[formfield.name]}</span>
                            )}
                        </>
                    );
                }

            default:
                return null;
        }
    }
}

export default FormField
