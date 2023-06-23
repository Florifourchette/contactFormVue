export default function handleChange(answer, name, text) {
  answer = { ...answer, [name]: text };
}
