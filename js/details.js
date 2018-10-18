$(document).ready(function(){
    $(".step-list1 .list-item").on("click",["type"],function(){
        var goodsEdition = $(this).find('.type').text();
        var unitPrice= $(this).find('.price').text();
        $('.shop-storage').html(goodsEdition);
        $('.price1').html(unitPrice);
        $('.totlePrice').html(unitPrice);
    });

    $(".step-list2 .list-item").on("click",["color"],function(){
        var goodsColor=  $(this).text() ;
        $('.shop-color').html(goodsColor);
    });
    $(".btn-primary").click(function(){
        var goodsName = $(".shop-name").text();
        var  totalPrice= $(".totlePrice").text();
        var goodsEdition = $('.shop-storage').text();
        var unitPrice= $('.price1').text();
        var goodsColor=  $('.shop-color').text() ;
        console.log(goodsName,totalPrice,goodsEdition,unitPrice,goodsColor)
        var obj ={
                goodsName:goodsName,
                goodsEdition:goodsEdition,
                goodsColor:goodsColor,
                unitPrice:unitPrice,
                totalPrice: totalPrice
                }
        var objStr ='['+JSON.stringify(obj)+']';
        localStorage.setItem('shopcar', objStr);
        location.href='shop-car.html';
    });
});