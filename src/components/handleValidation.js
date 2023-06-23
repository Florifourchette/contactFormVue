export default function handleValidation(attribute, value, response) {
  if (attribute === 'email') {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    response.value =
      value.match(validRegex) === 0 ||
      value.match(validRegex) === null
        ? 'notValidated'
        : 'validated';
  }

  if (attribute === 'message') {
    response.value =
      value.toString().length > 5 ? 'notValidated' : 'validated';
  }

  return response.value;
}
