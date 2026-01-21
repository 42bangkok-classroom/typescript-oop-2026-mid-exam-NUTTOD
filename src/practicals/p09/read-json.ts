import users from "./datasets/users.json"
import products from "./datasets/products.json"

export function readJson(fileName: string): unknown[] {
    const data = JSON.parse(fileName)
    try{
        if (!data) {
            const err = new Error("Invalid JSON format")
            err.name = "Invalid JSON format"
            throw err
        }
    } catch (e:any) {
        if (e.name === "InvalidFormat") {
            console.error(e.message)
        }
        console.error(e.message)
    }
    return data
}