const result = document.querySelector('.result');

const fetchNames = async () => {
  try {
    const { data } = await axios.get('/api/2-basicAPI');
    result.innerHTML = data
      .map(
        ({ name, id, image, price }) => `
        <article class="product" data-id="${id}">
         <img src=${image.url} class="" alt=${name} />
         <div class="info">
           <h5 class="info">${name}</h5>
           <h5 class="price">${price}</h5>
         </div>
        </article>`
      )
      .join('');
  } catch (error) {
    result.innerHTML = `<h4>Sorry there was a problem</h4>`;
  }
};
fetchNames();
