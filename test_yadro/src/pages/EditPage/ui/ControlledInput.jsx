import React from 'react'
import {useController, useFormContext} from 'react-hook-form'
import {Input} from "antd";

export const ControlledInput = (
    {
        name,
        requiredField,
        onChange,
        defaultValue,
        value,
        rules,
        ...props
    }) => {
    const {control} = useFormContext()
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control: control,
        rules,
    })
    const handleChange = e => {
        onChange?.(e)
        field.onChange(e)
    }

    return  (
        <>
            <Input
                onChange={handleChange}
                value={field.value}
                status={error ? "error" : ""}
                {...props}
            />
            {error && <span style={{ color: 'red' }}>{error.message}</span>}
        </>

    )
}
