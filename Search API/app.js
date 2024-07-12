const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    // addEvent listener to the form and listen for submit
    e.preventDefault();
    //Prevent defaults
    const searchTerm = form.elements.query.value
    //Access the input from the form 
    const config = { params: { q: searchTerm } }
    //params config help us change the param of axios request
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    form.elements.query.value = ''
    //Emptying the value

})

const makeImages = (shows) => {
    // create a function to create element and append images
    const existingImages = document.querySelectorAll('img');
    existingImages.forEach(img => img.remove()); // Remove all existing images

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG')
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}
