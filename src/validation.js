import { extend } from 'vee-validate';

var minmax = extend("minmax", {
    validate(value, { min, max }) {
        return value.length >= min && value.length <= max;
    },
    params: ["min", "max"],
    message:
        "The {_field_} must have at least {min} characters and {max} characters at most"
});

var required = extend('required', {
    validate(value) {
        return {
            required: true,
            valid: ['', null, undefined].indexOf(value) === -1
        };
    },
    computesRequired: true,
    message: '{_field_} is required'
});

var confirmPassword = extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: 'Password confirmation does not match'
});