const loadCategories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    const allCategories = data.data.news_category;
    
    const categoryContainer = document.getElementById('category-container');
    allCategories.forEach((singleCategory)=>{
        const div = document.createElement('div');
        div.innerHTML = `<button class="btn">${singleCategory.category_name}</button>`;
        categoryContainer.appendChild(div);
    })
}
// Load all news and display to the UI.
const loadNews = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/01`);
    const data = await res.json();
    const allNews = data.data;

    // displaying the data to the ui
    const cardContainer = document.getElementById('card-container');
    allNews.forEach((singleNews)=>{
        console.log("🚀 ~ allNews.forEach ~ singleNews:", singleNews)
        const cardDiv = document.createElement('div');
        cardDiv.classList = 'bg-white flex gap-5 items-center rounded-2xl shadow-lg mb-5';
        cardDiv.innerHTML = `
            <div class="news-thumb w-[50%] p-6">
            <img class="w-full" src=${singleNews.thumbnail_url} alt="" />
          </div>
          <div class="news-details">
            <div class="title">
              <h3 class="text-2xl font-semibold">
                ${singleNews.title}
              </h3>
              <p class="text-base text-slate-600">
                ${singleNews.details}
              </p>
            </div>
            <div class="news-info flex justify-between p-5 items-center">
              <div class="author-info flex gap-4 items-center">
                <img class="w-[50px] rounded-full" src=${singleNews.author.img} alt="" />
                <div class="author-details">
                  <h5 class="text-base font-medium">${singleNews.author.name}</h5>
                  <p>${singleNews.author.published_date}</p>
                </div>
              </div>
              <p><span class="font-medium">Total View:</span> ${singleNews.total_view}</p>
              <p><span class="font-medium">Rating:</span> ${singleNews.rating.number}</p>
            </div>
          </div>
        `;
        cardContainer.appendChild(cardDiv);
    })
}
loadNews();
loadCategories();