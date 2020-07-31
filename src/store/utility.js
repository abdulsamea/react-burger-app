export const updateObject = (oldObject, updatedProperies) => {
    return {
        ...oldObject,
        ...updatedProperies
    }
}

export const checkValidlity = (value, rules) => {
    let isValid = true;
    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength){
        isValid = value.trim().length >= rules.minLength && isValid;
    }
    if(rules.maxLength){
        isValid = value.trim().length <= rules.maxLength && isValid;
    }
    if(rules.fixedLength){
        isValid = value.trim().length === rules.fixedLength && isValid;
    }
    return isValid;
}