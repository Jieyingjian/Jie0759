$(function () {

    init();

    // 自己的初始化方法
    function init() {
        getSwiperdata();
        getNavdata();
        getListdata();
    }



    // 获取首页轮播图的数据
    function getSwiperdata() {
        // 发送ajax请求来获取
        // $.ajax({url:"",type:"",data:"",success:function(result){}})
        // $.get(url,?data(需要发送给后台的参数),成功的回调函数)
        $.get("http://api.pyg.ak48.xyz/api/public/v1/home/swiperdata", function (result) {
            if (result.meta.status == 200) {
                //    成功
                var html = template("swiperTpl", {
                    data: result.data
                });
                // 渲染
                $(".mui-slider").html(html);
                // 初始化轮播图组件
                //获得slider插件对象
                var gallery = mui('.mui-slider');
                gallery.slider({
                    interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
                });
            } else {
                // 失败
            }
        })
    }

    // 获取nav的照片
    function getNavdata() {
        $.get("http://api.pyg.ak48.xyz/api/public/v1/home/catitems", function (result) {
            if (result.meta.status == 200) {
                var html = template('navTpl', {
                    data: result.data
                });
                // 渲染
                $(".pyg_nav").html(html);
            } else {
                // 失败
            }
        })
    }

    // 商品的详情获取
    function getListdata(){
        $.get(
            "http://api.pyg.ak48.xyz/api/public/v1/home/goodslist",function(result){
                // 判断
                if(result.meta.status ==200){
                   var html =template('listTpl',{
                    //    获取参数
                    data:result.data
                   })
                //    渲染
                $(".list_item").html(html);
                }else{
                    // 失败
                }
            })
    }
})