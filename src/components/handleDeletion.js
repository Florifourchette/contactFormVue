export default function handleDeletion(
  answer,
  emailValidated,
  messageCharCount,
  formSubmitted
) {
  (answer.first_name = ''),
    (answer.last_name = ''),
    (answer.email = ''),
    (answer.betreff = ''),
    (answer.message = ''),
    (emailValidated.value = 'notCheckedYet');
  messageCharCount.value = 0;
  formSubmitted.value = 'waitingForDeletion';
  return answer;
}
