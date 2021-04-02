const dataArray = [5, 4, 3, 1, 6, 301, 72, 77, 300, 200, 400, 88, 99]

let times = 1
const sort = (current_pass) => {
    let changes = false
    for (let i=0; i<dataArray.length-current_pass; i++) {
        if (dataArray[i] > dataArray[i+1]) {
            const lower_value = dataArray[i+1]
            dataArray[i+1] = dataArray[i]
            dataArray[i] = lower_value
            changes = true
        }
    }
    if (!changes) return
    console.log(times)
    console.log(dataArray)
    times += 1
    sort(current_pass+1)
}

sort(0)

console.log(dataArray)