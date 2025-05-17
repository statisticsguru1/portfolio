const host_url = "https://fesnic-api.onrender.com";
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form-form");
    const submitButton = contactForm.querySelector(".btn-primary");
    const loadingMessage = contactForm.querySelector(".loading-message");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = {};
            const elements = contactForm.querySelectorAll("input, textarea, select");

            elements.forEach(el => {
                if (el.name) {
                    formData[el.name] = el.value.trim();
                }
            });

            formData.source = "portfolio";

            if ((!formData.name && contactForm.querySelector('[name="name"]')?.required) ||
                (!formData.phone && contactForm.querySelector('[name="phone"]')?.required) ||
                (!formData.email && contactForm.querySelector('[name="email"]')?.required) ||
                (!formData.message && contactForm.querySelector('[name="message"]')?.required)) {
                alert("Please fill in all required fields.");
                return;
            }

            submitButton.disabled = true;
            loadingMessage.style.display = "flex";

            try {
                const response = await fetch(`${host_url}/submit_contact`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                if (result.success) {
                    alert("Contact form submitted successfully!");
                    contactForm.reset();
                } else {
                    alert(result.error || "Something went wrong. Please try again.");
                }
            } catch (error) {
                alert("Error submitting form. Please try again.");
            } finally {
                submitButton.disabled = false;
                loadingMessage.style.display = "none";
            }
        });
    }
});



