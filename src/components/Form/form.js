import React, {useImperativeHandle} from 'react';
import {useFormik} from 'formik';
import Field from '../Field/field';
import {useUIDSeed} from 'react-uid';

function FormWrap ({defaultValueForm, formRef, validationScheme, defaultProps, onSubmitForm, genresBase}) {
    const seed = useUIDSeed();
    const formState = useFormik({
        initialValues: defaultValueForm,
        onSubmit: onSubmitForm,
        validationSchema: validationScheme,
    });

    useImperativeHandle(formRef, () => ({
        submitForm: formState.submitForm,
        resetForm: formState.resetForm
    }))

    const fields = (Object.keys(defaultProps)).map(fieldName => {
        const props = {
            onBlur: formState.handleBlur,
            onChange: formState.handleChange,
            value: formState.values[fieldName],
            isTouch: formState.touched[fieldName],
            error: formState.errors[fieldName],
            key: seed(fieldName),
            ...defaultProps[fieldName]
        };

        if (fieldName === 'genres') {
            props['isTouch'] = Array.isArray(formState.touched[fieldName]);
            props['options'] = genresBase;
            props['onChange'] = values => formState.setFieldValue(fieldName, values);
        }

        return <Field {...props}/>
    });

    return (
        <form onSubmit={formState.handleSubmit}>
            {fields}
        </form>
    )
}

export default FormWrap;