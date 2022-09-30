const createFaviconImg = (url) => {
  const img = document.createElement('img');

  img.src = `https://www.google.com/s2/favicons?domain=${url}`;

  img.style.margin = '-4px 0.5em 0 0';
  img.style.verticalAlign = 'middle';
  img.style.width = '16px';
  img.style.height = '16px';

  return img;
};

const displayFavicons = () => {
  const result_cites =
      document.getElementById('rso').getElementsByClassName('tjvcx');

  for (let i = 0; i < result_cites.length; i += 2) {
    const item = result_cites.item(i);

    const url = item.firstChild.textContent;

    item.parentNode.insertBefore(createFaviconImg(url), item);
  }
};

displayFavicons();
