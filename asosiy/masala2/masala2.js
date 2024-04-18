let arr = {}

let main = []
function returnTotalDate(start, end){
    let res = 0
    let month = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
    start = start.split("-")
    end = end.split("-")
    for(let i = 0; i < start.length; i++){
        start[i] = Number(start[i])
        end[i] = Number(end[i])
        if(start[i] == 0  || end[i] == 0){
            document.getElementById("result").innerHTML = "INCORRECT DATA enter DATE FORMAT CORRECTLY!!!"
            return 0
        }
    }
    res = start[1]>end[1] ? start[1] - end[1] : end[1] - start[1]
    for (const i in month) {
        start[1] += month[i]
        if(res == i){
            break
        }
    }
    return (((end[0] - start[0]) * 364) + ((start[1] - start[2]>end[2] ? start[2] - end[2] : end[2] - start[2]))) / 364
    
}

function oldestperson(){
    let ar = []
    for (const i in arr) {
        ar.push(arr[i]["YearsOld"])
    }
    let max = Math.max(...ar)
    for (const i in arr) {
        if(max == arr[i]["YearsOld"]){
            ar = arr[i]
            break
        }
    }
    document.getElementById("result").innerHTML = "THE OLDEST PERSON <br>" + JSON.stringify(ar)

}
async function findOldPerson(){
    document.getElementById("result").innerHTML = "Here will be shown added people"
    let res = []
    try {
        res.push(document.getElementById("personName"))
        res.push(document.getElementById("birthDay"))
        res.push(document.getElementById("death"))
        res[0] = res[0].value;
        res[1] = res[1].value;
        res[2] = res[2].value;

        if(returnTotalDate(res[1], res[2])){
            arr[res[0]] = {[res[0]]: res[0], "YearsOld": returnTotalDate(res[1], res[2])}
        }

        document.getElementById("result").innerHTML = JSON.stringify(arr)
    } catch (error) {
        document.getElementById("result").innerHTML = "UNEXPECTED ERROR OCCURED TRY AGAIN"
    }
}

