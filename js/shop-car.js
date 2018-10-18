
// 页面渲染
$(function(){
    var cartObject = JSON.parse(localStorage.getItem('shopcar'));
    console.log(cartObject);
    for(var i =0; i < cartObject.length;i++){
        var shop =
         `
            <div class="shops">
                <div class="goods_check ">
                    <i class="Gou move">√</i>
                </div>
                <div class="goods_img" style = 'background:url() no-repeat' ></div>
                <div class="goods_name">${cartObject[i].goodsName}</div>
                <div class="goods_color">${cartObject[i].goodsColor+ ' '+cartObject[i].goodsEdition}</div>
                <div class="goods_price">${cartObject[i].unitPrice}</div>
                <div class="goods_num">
                    <div id="count">
                        <span class="reduce">-</span>
                        <span id='num'>1</span>
                        <span class="add">+</span>	
                    </div>
                </div>
                <div class="goods_total">${cartObject[i].unitPrice}</div>
                <div class="goods_action"><a href="#">×</a></div>
            </div>
        `
        $('.cart-goods-list').append(shop);
        // var jian = $(".count-left i").html('#num'.text());
        // console.log(jian);
    }
})
$(".goods_action a").click(function(){
    $(shop).hide();
})
