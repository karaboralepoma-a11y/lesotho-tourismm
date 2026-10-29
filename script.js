// Gallery images
const galleryImage = document.getElementById("galleryImage");

const pictures = [
    {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        caption: "Mountain Scenery"
    },
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        caption: "Beautiful Landscape"
    },
    {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        caption: "Mountain Under the Sky"
    }
];

let pictureNumber = 0;

function showPicture() {
    galleryImage.src = pictures[pictureNumber].src;
    galleryImage.alt = pictures[pictureNumber].caption;

    document.getElementById("galleryCaption").textContent =
        pictures[pictureNumber].caption;
}

function selectPicture(number) {
    pictureNumber = number;
    showPicture();
}

const nextButton = document.getElementById("nextImage");
const previousButton = document.getElementById("previousImage");

if (nextButton && galleryImage) {
    nextButton.addEventListener("click", function () {
        pictureNumber = (pictureNumber + 1) % pictures.length;
        showPicture();
    });
}

if (previousButton && galleryImage) {
    previousButton.addEventListener("click", function () {
        pictureNumber =
            (pictureNumber - 1 + pictures.length) % pictures.length;
        showPicture();
    });
}


// Booking form validation
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const visitDate = document.getElementById("visitDate");
    const formMessage = document.getElementById("formMessage");

    // Do not allow a past visit date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    visitDate.min = ${year}-${month}-${day};

    function checkPasswords() {
        if (password.value === confirmPassword.value) {
            confirmPassword.setCustomValidity("");
        } else {
            confirmPassword.setCustomValidity("Passwords do not match.");
        }
    }

    password.addEventListener("input", checkPasswords);
    confirmPassword.addEventListener("input", checkPasswords);

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        checkPasswords();
        bookingForm.classList.add("was-validated");

        if (!bookingForm.checkValidity()) {
            formMessage.innerHTML =
                '<div class="alert alert-danger">' +
                'Please correct the errors in the form.</div>';
            return;
        }

        formMessage.innerHTML =
            '<div class="alert alert-success">' +
            'Registration successful! Your form is valid.</div>';

        bookingForm.reset();
        bookingForm.classList.remove("was-validated");
    });
}



