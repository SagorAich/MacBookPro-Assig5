function costCalculation(product,cost){
    const memoryCost=document.getElementById(product+'-cost');
    memoryCost.innerText=cost;
    const value=parseInt(memoryCost.innerText);
    return value;
}
function gettingId(str){
    const totalMemoryCost=document.getElementById(str+'-cost');
    const totalMemoryCostValue=parseInt(totalMemoryCost.innerText);
    return totalMemoryCostValue;
}
function totalCost(){
    const memoryTotal=gettingId('extra-memory');
    const storageTotal=gettingId('extra-storage');
    const deliveryTotal=gettingId('extra-delivery');
    const total=1299+memoryTotal+storageTotal+deliveryTotal;
    document.getElementById('total-cost').innerText=total;
    document.getElementById('grand-total').innerText=document.getElementById('total-cost').innerText;
}
document.getElementById('8GB-memory-cost').addEventListener('click',function(){
    costCalculation('extra-memory',0);
    totalCost();
});
document.getElementById('16GB-memory-cost').addEventListener('click',function(){
    costCalculation('extra-memory',180);
    totalCost();
});
document.getElementById('256GB-stroage-cost').addEventListener('click',function(){
    costCalculation('extra-storage',0);
    totalCost();
});
document.getElementById('512GB-stroage-cost').addEventListener('click',function(){
    costCalculation('extra-storage',100);
    totalCost();
});
document.getElementById('1TB-stroage-cost').addEventListener('click',function(){
    costCalculation('extra-storage',180);
    totalCost();
});
document.getElementById('zero-delivery-cost').addEventListener('click',function(){
    costCalculation('extra-delivery',0);
    totalCost();
});
document.getElementById('pay-delivery-cost').addEventListener('click',function(){
    costCalculation('extra-delivery',20);
    totalCost();
});
// promo code setup 
document.getElementById('apply-button').addEventListener('click',function(){
    const promoCode=document.getElementById('promo-code');
    const grandTotal=document.getElementById('grand-total');
    const grandTotalValue=parseInt(grandTotal.innerText);
    if(promoCode.value=='steve'){
        console.log('right')
        grandTotal.innerText=grandTotalValue*.8;
    }
    else{
        grandTotal.innerText==grandTotalValue;
    }
});