const handleCatagory = async () => {

    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((category) => {

        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}') " class="tab ">${category.category}</a>
        `;
        tabContainer.appendChild(div);
    });
};
const handleLoadNews = async (categoryId) => {
    console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML ="";
    data.data?.forEach((vedios) => {
        console.log(vedios);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card w-80 bg-base-100 shadow-xl">
        <figure><img w-32 src=${vedios.thumbnail} alt="Shoes" /></figure>
        <div class="card-body">
        <div class = flex> 
        <div>
        <img class="w-14 rounded-full mr-4" src=${vedios?.authors[0]?.profile_picture}/>   
        </div> 
          <h2 class="card-title">${vedios.title}</h2>
        </div>
          <h3> ${vedios.others.views} views</h3>  
          <div class="card.footer flex justify-between mt-8>
          <h5>${vedios?.authors[0]?.profile_name}</h5>
          <h6>${vedios.authors?.verified}</h6>
      `;
        cardContainer.appendChild(div);
    });
};

handleCatagory();
handleLoadNews("1000");
