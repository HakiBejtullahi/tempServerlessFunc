const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/1-hello');
    result.innerHTML = data;
  } catch (error) {
    result.textContent = error.response.data;
  }
};
fetchData();
