export function onImageUpload(image, select, submit) {
    const profileImage = document.querySelector(image)
    const selectImage = document.querySelector(select)
    const submitBtn = document.querySelector(submit)

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const initialUrl = profileImage.getAttribute('src')
        const image = selectImage.files[0]
        const newUrl = URL.createObjectURL(image)
        profileImage.src = newUrl
        selectImage.value = ""
    }) 
}