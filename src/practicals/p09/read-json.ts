import users from "./datasets/users.json"
import products from "./datasets/products.json"

function readJson(fileName: string): unknown[] {
    const data = JSON.parse(fileName)
    try{
        if (!data) {
            const err = new Error("Invalid JSON format")
            err.name = "InvalidFormat"
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

readJson(JSON.stringify(users))
readJson(JSON.stringify(products))