
const isEmpty = (string) => {
    return string && string.trim() === '';
}

const isEmail = (email) => {
    const regEx = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return email && email.match(regEx);
}


exports.validateSignupData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = 'Must not be empty';
    } else if (!isEmail(data.email)) {
        errors.email = 'Must be a valid email address';
    }

    if (isEmpty(data.password)) errors.password = 'Must not be empty';
    if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords must match';
    if (isEmpty(data.handle)) errors.handle = 'Must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
}

exports.validateLoginData = (data) => {
    let errors = {}
    if (isEmpty(data.email)) errors.email = 'Must not be empty';
    else if (!isEmail(data.email)) errors.email = 'Must be a valid email address';
    if (isEmpty(data.password)) errors.password = 'Must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0
    }

}