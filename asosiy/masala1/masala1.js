const URL = "https://handlers.education.launchcode.org/static/planets.json"


const getData = async () => {
    let retur = []
    let res = 0
    try {
        res = await fetch(URL)
        res = await res.json()
    } catch (error) {
        document.getElementById("result").innerHTML = "NO DATA"
    }
    setTimeout(() => {
        for(let i = 0; i < res.length; i++){
            retur.push(res[i].name)
        }
        document.getElementById("result").innerHTML = retur.join(" | ")

        console.log("", retur)
    }, 500);
}