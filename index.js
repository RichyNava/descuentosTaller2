function precioFinal(){
    const inputPrice=document.getElementById('inputPrice');
    const price=inputPrice.value;
    const inputDiscount=document.getElementById('inputDiscount');
    const discount= inputDiscount.value;
    const parrafo=document.getElementById('discountPrice');
    const precioF =((100-discount)*price/100);
    parrafo.innerText='tu precio con descuento es: ' + precioF;

}