class Product{
    constructor(nomi, miqdori, narxi){
        this.nomi = nomi
        this.miqdori = miqdori
        this.narxi = narxi
    }
    
    get productInfo(){
        return [this.nomi, this.miqdori, this.narxi]
    }

    set setPrice(price){
        this.narxi = price
    }

    FindAllMethods(){
        return Object.getOwnPropertyNames(Product.prototype)
    }

    invertKeyValue(obj){
        let res = {}
        for (const i in obj) {
            res[obj[i]] = i
        }
        return res
    }
}


let tovar = new Product("Kulupnay", "1kg", 30000)

tovar.setPrice = 99999
console.log(tovar.narxi)


console.log(tovar.productInfo)

 
console.log(tovar.FindAllMethods())


console.log(tovar.invertKeyValue({"qizil": "yashil", "sariq": "qora"}))