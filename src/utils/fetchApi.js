export default async (url, key, params) => {
    try {
        const finalUrl = `${url}?api_key=${key}&${params ? params : ''}`

        const response = await fetch(finalUrl)

        const data = await response.json()

        return Promise.resolve(data)

    } catch (error) {
        
        return Promise.reject(error)
    }
}