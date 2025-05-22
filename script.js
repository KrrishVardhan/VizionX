const toolist = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltiplist = toolist.map(el => new bootstrap.Tooltip(el))
const dark_mode = document.getElementById("toggler");

dark_mode.addEventListener("click", () => {
    const navbar = document.getElementById("nav");
    navbar.classList.toggle("bg-dark");
    navbar.classList.toggle("bg-light");

    navbar.classList.toggle("navbar-dark");
    navbar.classList.toggle("navbar-light");

    document.querySelectorAll(".btn").forEach((el) => {
        if (el.classList.contains("btn-outline-light")) {
            el.classList.remove("btn-outline-light");
            el.classList.add("btn-outline-dark");
        } else if (el.classList.contains("btn-outline-dark")) {
            el.classList.remove("btn-outline-dark");
            el.classList.add("btn-outline-light");
        }
    });
    document.querySelectorAll(".carousel-caption").forEach((e) => {
        if (e.classList.contains("bg-light")) {
            e.classList.remove("bg-light");
            e.classList.remove("text-dark");
            e.classList.add("text-light");
            e.classList.add("bg-dark");
            e.classList.remove("border-dark")
            e.classList.add("border-secondary")
        }
        else if (e.classList.contains("bg-dark")) {
            e.classList.add("bg-light");
            e.classList.add("text-dark");
            e.classList.remove("text-light");
            e.classList.remove("bg-dark");
            e.classList.add("border-dark")
            e.classList.remove("border-secondary")
        }
    })
    document.querySelectorAll(".upar_neeche").forEach((e) => {
        if (e.classList.contains("bg-dark")) {
            e.classList.remove("bg-dark");
            e.classList.add("bg-light");
            e.classList.add("text-dark");
        }
        else if (e.classList.contains("bg-light")) {
            e.classList.add("bg-dark");
            e.classList.remove("bg-light");
            e.classList.remove("text-dark");
            e.classList.add("text-light");
        }
        e.classList.toggle("border-dark");
        e.classList.toggle("border-light");
    })
    document.querySelectorAll(".card").forEach((e) => {
        if (e.classList.contains("bg-dark")) {
            e.classList.remove("bg-dark");
            e.classList.add("bg-light");
            e.classList.add("text-dark");
        }
        else if (e.classList.contains("bg-light")) {
            e.classList.add("bg-dark");
            e.classList.remove("bg-light");
            e.classList.remove("text-dark");
        }
    })
    document.body.classList.toggle("bg-dark")
    if (dark_mode.querySelector("i").classList.contains("bi-moon-fill")) {
        dark_mode.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        dark_mode.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
});


document.getElementById("Mysign").addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = [];

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(emailPattern) == false) {
        errors.push("Please enter a valid email.");
    }

    // Password
    const password = document.getElementById("password").value.trim();
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    // Phone Number
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (phone.match(phonePattern) == null) {
        errors.push("Phone number must be exactly 10 digits");
    }

    // Language
    const radios = document.getElementsByName("fav_language");
    let languageSelected = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            languageSelected = true;
            break;
        }
    }
    if (languageSelected == false) {
        errors.push("Please select your language.");
    }

    // File 
    const finput = document.getElementById("myfile");
    if (finput.files.length === 0) {
        errors.push("Please upload a file.");
    }

    if (errors.length > 0) {
        alert("Form has errors:\n" + errors);
        return;
    }

    alert("Submitting your form!");
    this.submit();
    console.log('Email input:', document.getElementById("email"));
});


document.getElementById("log").addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = [];

    const email = document.getElementById("Lemail").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errors.push("Please enter a valid email.");
    }

    const password = document.getElementById("Lpassword").value;
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    const radios = document.getElementsByName("Lfav_language");
    let languageSelected = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            languageSelected = true;
            break;
        }
    }
    if (languageSelected == false) {
        errors.push("Please select your language.");
    }

    if (errors.length > 0) {
        alert("Form has errors:\n" + errors);
        return;
    }

    alert("Submitting your form!");
    this.submit();
    console.log('Email input:', document.getElementById("Lemail"));
    console.log(radios);
});


const display = document.getElementById("display");

        function appendtodisp(input) {
            display.value += input;
        }
        function clrdisp() {
            display.value = '';
        }
        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
        function clrlast() {
            display.value = display.value.slice(0, -1);
        }