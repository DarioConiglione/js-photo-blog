axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
        const result = response.data;
        console.log(result);

        result.forEach(element => {
            arrayEl.push(element)
            console.log(arrayEl);

            if (arrayEl.length === 6) {
                for (let i = 0; i = arrayEl.length; i++) {
                    const elementEl = document.createElement("div");
                    elementEl.classList.add("col-sm-12", "col-md-5", "col-lg-3", "mb-2", "polaroid")

                    elementEl.innerHTML = `    

                <div class="pin">
                    <img src="./assets/img/pin.svg" alt="">
                </div>

                <div class="photo">
                    <img src="${arrayEl[i].url}" alt="">
                </div>

                <div class="text">
                    <p>${arrayEl[i].date}</p>
                    <p>${arrayEl[i].title}</p>
                </div>
                `}


            }

        });
    })
    .catch(error => {
        console.error(error)
    })

const arrayEl = []






