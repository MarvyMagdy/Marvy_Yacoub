export function summation(e1, sum)
{  
    var amount = e1.text()
    var price = amount.split(" ")
    price = price[1].trim()

    sum = Number(sum) + Number(price)   

    return sum
}

export function Extract_Total(e1)
{
    var amount = e1.text()
    var total = amount.split(" ")
    total = total[1].trim()

    return total
}