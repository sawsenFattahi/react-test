/**we suppose that if all the fields are not empty and each contains more than
 * 2 chars so the form is valid
 */
const isLongerTan2 = value => value && value.length > 2;
const isEmail = value => value.includes('@');

const validate = (field, value) =>
  ({
    id: isLongerTan2(value),
    vorname: isLongerTan2(value),
    nachname: isLongerTan2(value),
    email: isLongerTan2(value) && isEmail(value),
    lieferant: isLongerTan2(value)
  }[field]);

const getClassNameValue = (field, value) => {
  if (value === undefined) return '';
  return validate(field, value) ? 'is-valid' : 'is-invalid';
};

export { validate, getClassNameValue };
