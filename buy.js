const images =["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/39a4a4fa-d8f5-4677-8057-aa8f9a49c469/structure-25-road-running-shoes-ldJChc.png","https://cdn.idealo.com/folder/Product/203238/9/203238935/s3_produktbild_gross_1/nike-structure-25-women-white-black-pure-platinum-fuchsia.jpg","https://cdn.idealo.com/folder/Product/203238/9/203238935/s3_produktbild_gross_2/nike-structure-25-women-white-black-pure-platinum-fuchsia.jpg","https://cdn.idealo.com/folder/Product/203238/9/203238935/s3_produktbild_gross_3/nike-structure-25-women-white-black-pure-platinum-fuchsia.jpg","https://cdn.idealo.com/folder/Product/203238/9/203238935/s3_produktbild_gross_4/nike-structure-25-women-white-black-pure-platinum-fuchsia.jpg"];
let currentIndex = 0;

var btnColor= document.querySelector(".btn1");

var prev= document.querySelector(".previous");
var  next= document.querySelector(".next");
var img=document.querySelector("img");

prev.addEventListener('click',function(){
    currentIndex =(currentIndex-1+images.length)%images.length;
    img.src= images[currentIndex];
});
next.addEventListener("click", ()=>{
    currentIndex =(currentIndex+1)%images.length;
    img.src =images[currentIndex];
});

btnColor.addEventListener("click" , function(){
    btnColor.style.backgroundColor= "green";
});