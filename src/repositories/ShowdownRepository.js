export default class {
    add(content) {
        localStorage.setItem("showdown-contents", [...(this.all), {
            id: new Date(),
            body: content
        }]);
    }

    all() {
        return JSON.parse(localStorage.getItem("showdown-contents"))
    }
}