const content = document.querySelector(".content");
const error = document.querySelector(".error");

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=10");

    const data = await response.json();

    console.log(data);
    data.products.map((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const img = document.createElement("img");
      img.src = item.thumbnail;
      img.classList.add("img");
      const title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = item.title;

      const brand = document.createElement("div");
      brand.classList.add("brand");
      brand.textContent = item.brand;

      const descript = document.createElement("p");
      descript.classList.add("descript");
      descript.textContent = item.description;

      const price = document.createElement("span");
      price.classList.add("price");
      price.textContent = `Цена: ${item.price} $`;

      card.append(img);
      card.append(title);
      card.append(brand);
      card.append(descript);
      card.append(price);
      content.append(card);
    });
  } catch (err) {
    error.textContent = "Произошла ошибка" + err.message;
    error.style.display = "block";
  }
};

window.onload = fetchData;
