const lutzApi = {
    url: "https://api.myjson.com/bins/rl7ac",

    async retrieveData() {
        const response = await fetch(`${this.url}`)

        const data = await response.json()

        return data
    }
}

export default lutzApi