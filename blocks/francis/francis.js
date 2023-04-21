export default function decorate(block) {
    console.log("*********** start Francis Block ***********")
    const content = document.createElement('div');
    content.setAttribute("class", "blue-section");
    const contentDiv = block.querySelector('div:nth-child(2)');
    const headerDiv = block.querySelector('div:nth-child(1)');
    if (contentDiv != null) {
        console.log("headerDiv : " + headerDiv.innerHTML)
        console.log("contentDiv : " + contentDiv.innerHTML)
        content.innerHTML = `<strong>${headerDiv.innerHTML}</strong> --- <i>${contentDiv.innerHTML}</i>`;
        contentDiv.replaceWith();
        headerDiv.replaceWith();
    } else {
        console.log("headerDiv : " + headerDiv.innerHTML)
        content.innerHTML = "${headerDiv.innerHTML}"
        contentDiv.replaceWith();
    }
    block.append(content);

}
