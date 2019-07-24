document.forms["forma"].send.addEventListener("click", () => {
    event.preventDefault();
    let name = document.forma.title.value;

    // send requet to a server
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://www.omdbapi.com/?apikey=a88cb414&s=${name}`, true);
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4)
            return;

        for(let item of )


    }
});