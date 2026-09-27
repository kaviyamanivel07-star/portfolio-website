const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

    } else {

        alert("Message sent successfully!");

        form.reset();
    }
});