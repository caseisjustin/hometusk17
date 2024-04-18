const URL = "https://jsonplaceholder.typicode.com/todos"


const getData = async () => {
    let retur = []
    let res = 0
    try {
        res = await fetch(URL)
        res = await res.json()
        for (const i in res) {
            if(res[i].id % 2 == 0){
                retur.push(res[i])
            }
        }
        console.log(retur)
    } catch (error) {
        console.log(error)
    }
}

getData()