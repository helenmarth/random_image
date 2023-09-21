'use strict';

const key = 'C6jRqF+lzP6hjoYQLw7ioA==GILdEOc40XIJWo8p';

const category = 'nature';

const link = 'https://api.api-ninjas.com/v1/randomimage?category=' + category;

const getImageButton = document.querySelector('.button');

const img = document.querySelector('.img');

const getImage = async (url) => {
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Key': key,
      'Accept': 'image/jpg',
    }
  }).then(response => {
    if (!response.ok) {
      console.log('error');
    }

    return response.blob();
  }).then(blob => {
    return URL.createObjectURL(blob);
  });

  return result;
};

getImageButton.addEventListener('click', async () => {
  const image = await getImage(link);
  img.src = image;
});
