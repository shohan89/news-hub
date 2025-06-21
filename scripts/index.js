const loadCategories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    const allCategories = data.data.news_category;
    
    const categoryContainer = document.getElementById('category-container');
    allCategories.forEach((singleCategory)=>{
        // console.log("🚀 ~ allCategories.forEach ~ singleCategory:", singleCategory)
        const div = document.createElement('div');
        div.innerHTML = `<button class="btn">${singleCategory.category_name}</button>`;
        categoryContainer.appendChild(div);
    })
}
loadCategories();