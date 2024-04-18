


async function datapOlgich() {
    let id = 0
    id = document.getElementById("idsi")
    id = id.value
    if(!Number(id)){
        document.getElementById("output").innerHTML = "PLEASE ENTER ID CORRECTLY!!!"
    }
    let URL = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    URL = `https://jsonplaceholder.typicode.com/users/${id}`
    let temp = 0
        
    try {
        let ids = document.getElementById('idcha')
        ids = ids.checked ? 'id' : undefined
        let fname = document.getElementById('name')
        fname = fname.checked ? "name" : undefined
        let username = document.getElementById('username')
        username = username.checked ? "username" : undefined
        let email = document.getElementById('email')
        email = email.checked ? "email" : undefined
        let address = document.getElementById('address')
        address = address.checked ? "address" : undefined
        let phone = document.getElementById('phone')
        phone = phone.checked ? "phone" : undefined
        let website = document.getElementById('website')
        website = website.checked ? "website" : undefined
        let company = document.getElementById('company')
        company = company.checked ? "company" : undefined
        temp = await fetch(URL)
        temp = await temp.json()
        let res = [temp[ids], temp[fname], temp[username], temp[email], temp[address], temp[phone], temp[website], temp[company]]
        // let r = []
        // for (const i in res) {
        //     // document.getElementById("output").innerHTML = temp[i]
        //     let t = ""
        //     if(typeof res[i] == "object" && temp[res[i]] == "address"){
        //         res[i][address] = ""
        //         for (const j in temp[res[i]]){
        //             res[i][address] += j
        //         }
        //     }
            
        //     console.log(res)
        // }
        document.getElementById("output").innerHTML = [`ID: ${temp[ids]}<br> NAME: ${temp[fname]}<br> USERNAME: ${temp[username]}<br> EMAIL: ${temp[email]}<br>ADDRESS: ${JSON.stringify(temp[address])}<br>PHONE: ${temp[phone]}<br>WEBSITE: ${temp[website]}<br>COMPANY: ${JSON.stringify(temp[company])}`]

    } catch (error) {
        document.getElementById("output").innerHTML = "SOMETHING WENT WRONG"
    }
}

