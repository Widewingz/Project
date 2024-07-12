const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    // addEvent listener to the form and listen for submit
    e.preventDefault();
    //Prevent defaults
    const searchTerm = form.elements.query.value
    //Access the input from the form 
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

    makeImages(res.data)
})

const makeImages = (shows) => {
    // create a function to create element and append images
    for (let result of shows) {
        if (result.show.img) {
            const img = document.createElement('IMG')
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}