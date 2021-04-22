const signupFormHandler = async (event) => {
    event.preventDefault();

    const experience = document.querySelector('#experience').value.trim();
    const description = document.querySelector('#description').value.trim();
    const category = document.querySelector('#category').value.trim();
    const price = document.querySelector('#price').value.trim();
    const city = document.querySelector('#city').value.trim();

    const logoUrl = `/img/${category}.png`;

    if (experience && description && category && price && city) {
        const response = await fetch('/api/experience', {
        method: 'POST',
        body: JSON.stringify({ provider_name:experience, description:description, category:category, price:price, city:city, logo_url:logoUrl }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/');
        } else {
        alert(response.statusText);
        }
    }
};

document
    .querySelector('.service-signup-form')
    .addEventListener('submit', signupFormHandler);
