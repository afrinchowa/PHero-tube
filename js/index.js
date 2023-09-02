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
const imageContainer = document.getElementById("imageContainer");
if(data.data.length ==0){
    imageContainer.src ="Icon.png";
    imageContainer.style.display ="block"
    return;
}
else{
    imageContainer.style.display ="none"
}

    data.data?.forEach((vedios) => {
        console.log(vedios);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card w-80 bg-base-100 shadow-xl h-96">
        <figure>
        
        <img class="w-80 h-48" src=${vedios.thumbnail} alt="vedios" /></figure>
        <div class="card-body">
        <div class = flex> 
        <div>
        <img class="w-8 h-8 rounded-full mr-4" src=${vedios?.authors[0]?.profile_picture}/>   
        </div> 
          <h2 class="card-title">${vedios.title}</h2>
        </div>
          <h3> ${vedios.others.views} views</h3>       
          <h5>${vedios?.authors[0]?.profile_name}</h5>                 
      `;
        cardContainer.appendChild(div);

        
    });
};

handleCatagory();
handleLoadNews("1000");
