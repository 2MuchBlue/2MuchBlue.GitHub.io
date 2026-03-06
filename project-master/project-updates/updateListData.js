
class NotificationDataHolder {
    constructor(title, content, tags, parent = document.getElementById("main")){
        let container = document.createElement("div");
        let headerEle = document.createElement("h2");
        let tagHolder = document.createElement("div");
        let contentEl = document.createElement("div");

        container.append(headerEle, tagHolder, contentEl);

        function createTagElement(tag){
            return `<div class="tag">${tag}</div>`;
        }

        let tagsString = "";
        for(let i = 0; i < tags.length; i++ ){
            tagsString += createTagElement(tags[i]) + " ";
        }
        tagHolder.innerHTML = tagsString;

        headerEle.innerText = title;
        contentEl.innerHTML = content;
        container.classList = "denotedNestedDiv";

        tagHolder.classList = "tagHolder flexListContainer";

        parent.append(container);
    }
}

new NotificationDataHolder("applez", "hello world :D", ["apple", "fruit"])