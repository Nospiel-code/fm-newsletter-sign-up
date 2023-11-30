const form = document.querySelector("[data-form]");
const template = document.querySelector("[data-template]");
const wrapper = document.querySelector("[data-wrapper]");


const originalWrapper = wrapper.innerHTML

function handleSubmit(event) {

    const email = new FormData(event.target).get("email");

    if (email) {
        wrapper.innerHTML = template.innerHTML.replace(/{{ email }}/, email);
    }
}

function goBack() {
    wrapper.innerHTML = originalWrapper
}

form.addEventListener("submit", handleSubmit);