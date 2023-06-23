import handleValidation from './handleValidation';

export default function handleSubmit(
  answer,
  emailValidated,
  messageCharCount,
  formSubmitted
) {
  handleValidation('message', answer.message, messageCharCount);
  handleValidation('email', answer.email, emailValidated);
  if (
    (answer.first_name !== '' && answer.last_name !== '',
    answer.email !== '' &&
      answer.betreff !== '' &&
      answer.message !== '' &&
      emailValidated.value === 'validated' &&
      messageCharCount.value === 'validated')
  ) {
    formSubmitted.value = 'submitted';
    console.log(answer);
  } else {
    formSubmitted.value = 'notSubmitted';
  }
}
