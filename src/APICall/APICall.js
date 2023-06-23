export default function getGitData(searchTerm) {
  fetch(
    `https://api.github.com/search/repositories?q=${
      searchTerm || 'hello'
    }&per_page=8`,
    {
      method: 'GET',
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log(error));
}
