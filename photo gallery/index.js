const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery")

async function fetchImage() {

    // take the value in the input class
    const inputValue = document.getElementById("input").value;

    // check wheter the pictures number is between 1 and 10
    if (inputValue > 10 || inputValue < 1) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "Number should be between 1 and 10";
        return;
    }

    // create an empty variable
    imgs = "";

    try {

        btnEl.style.display = "none";

        // use 'await' to show the error message until we recieve a new response 
        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=RPWwJIwhEQdgv1mqzHLzXM9m6wqZ7CoVNiwx8No58Vk`).then((res) =>
        res.json().then((data) => {

            // check the is response exist
            if (data) {
                data.forEach((pic) => {
                    console.log(pic.urls.small);
                    imgs += `<img = src = ${pic.urls.small}
                    alt = "image" />`;

                    galleryEl.style.display = "block";
                    galleryEl.innerHTML = imgs;
                    btnEl.style.display = "block";

                });
            
            }
        })
        );
        errorMessageEl.style.display = "none";

    } catch (error) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerHTML = "An error happend, try again later";
        btnEl.style.display = "block";
    }


}

// listen for button event - click
btnEl.addEventListener("click", fetchImage)