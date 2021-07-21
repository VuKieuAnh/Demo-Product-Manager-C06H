let products=["Iphone 5", "Iphone 6", "Iphone 3"];
// let products=[];
showAll();
function showAll(){
    let content="";
    for (let i = 0; i < products.length; i++) {
        content+=" <tr>" +
            "<td>"+products[i]+"</td>" +
           "<td><button onclick=\"editByIndex("+i+")\">Edit</button></td>"
            +
            "    </tr>"

    }
    document.getElementById("products").innerHTML = content;
}

function createNewProduct(){
    //lay du lieu
    let newProduct = document.getElementById("newProduct").value;
    //them du lieu vao mang
    products.push(newProduct);
    //hien thi lai du lieu
    showAll();
}

function editByIndex(index){
    let newV = prompt("Moi ban nhap gia tri moi", products[index]);
    products[index] = newV;
    showAll();
}
