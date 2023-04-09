const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/3-airtable');
    result.innerHTML = data
      .map((prod) => {
        const { url, id, name, price } = prod;
        return `
  <a href="product.html?id=${id}" class="product">
   <img src="${url}" alt="${name}" />
   <div class="info">
    <h5>${name}</h5>
    <h5 class="price">${price}</h5>
    </div>
  </a>
  `;
      })
      .join('');
  } catch (error) {
    result.innerHTML =
      '<h2>Sorry there was a problem with the server. Please try again later.</h2>';
  }
};

fetchData();
