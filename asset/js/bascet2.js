function Getgallary() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    let item = ''
    basket.forEach(datap => {
        let sum = parseFloat(datap.Cost.slice(1)) * parseFloat(datap.Count)


        item += ` 
        <tr>
        <th class="bascet" scope="row">${datap.Id}</th>
        <td class="imgBascet" >
        <img src=${datap.Img} alt="">
        </td>
        <td class="bascet">${datap.Name}</td>
        <td class="bascet">
        <input id="inp" min="1" type="number" value="${datap.Count}">
        </td>
        <td class="bascet">${datap.Cost}</td>
        <td class="bascet"> ${sum}$</td>
        <td class="bascet"><i class="fa-solid fa-trash-can remove"></i></td>
        </tr>`




    });
    document.getElementById('body').innerHTML = item
}
Getgallary();
let input = document.querySelectorAll("#inp")
input.forEach(inp => {
    this.onchange = function (e) {
        let value = e.target.value
        let price = e.target.parentElement.parentElement.children[4].innerHTML
        let cut = price.slice(1)
        e.target.parentElement.parentElement.children[5].innerHTML = cut * value + "$";


    }

})
let removers = document.querySelectorAll('.remove')


removers.forEach(rmv => {
    rmv.onclick = function () {
        let prId = this.parentElement.parentElement.children[0].innerHTML
        let prparent = this.parentElement.parentElement

        let basket = JSON.parse(localStorage.getItem('basket'));

        let arr = []
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].Id != prId) {
                arr.push(basket[i])

            } else {
                continue;
            }
        }
        prparent.style.display = 'none'

        localStorage.setItem('basket', JSON.stringify(arr))

        CountGalary();


    }
});

function CountGalary() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('counter').innerHTML = basket.length
}
CountGalary();