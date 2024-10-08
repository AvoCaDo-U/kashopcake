var object = {
    hoTen:"",
    diaChi:"",
    soDienThoai:"",
    ghiChu:"",
    tenMonHang:"",
    giaTien:"",
    Email:""

}


$("#btn-1").on("click", function(){
    // alert("Đã chọn sản phẩm 1")
    $("#btn-1").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-2").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-3").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-4").removeClass("btn-warning").addClass("btn-primary")
    object.tenMonHang ="Bánh số 1";
    object.giaTien="200.000vnđ";
    console.log(object)
    alert("Đã chọn Mochi Mèo dâu")
})
$("#btn-2").on("click", function(){
    // alert("Đã chọn sản phẩm 2")
    $("#btn-2").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-1").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-3").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-4").removeClass("btn-warning").addClass("btn-primary")
    object.tenMonHang ="Bánh số 2";
    object.giaTien="400.000vnđ";
    console.log(object)
    alert("Đã chọn Mochi Bí đỏ")
})
$("#btn-3").on("click", function(){
    // alert("Đã chọn sản phẩm 3")
    $("#btn-3").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-1").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-2").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-4").removeClass("btn-warning").addClass("btn-primary")
    object.tenMonHang =" Mochi Đào";
    object.giaTien="500.000vnđ";
    console.log(object)
    alert("Đã chọn Mochi Đào")
})

$("#btn-4").on("click", function(){
    // alert("Đã chọn sản phẩm 4")
    $("#btn-4").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-1").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-2").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-3").removeClass("btn-warning").addClass("btn-primary")
    object.tenMonHang ="Mochi Quà tất Noel";
    object.giaTien="500.000vnđ";
    console.log(object)
    alert("Đã chọn Mochi Quà tất Noel")
})

$("#btn-5").on("click", function(){
    // alert("Đã chọn sản phẩm 1")
    $("#btn-5").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-6").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-7").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-8").removeClass("btn-warning").addClass("btn-primary")
    object.tenMonHang ="Socola Chibi";
    object.giaTien="200.000vnđ";
    console.log(object)
    alert("Đã chọn Socola Chibi")
})
$("#btn-6").on("click", function(){
    // alert("Đã chọn sản phẩm 2")
    $("#btn-6").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-5").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-7").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-8").removeClass("btn-warning").addClass("btn-primary")
    object.tenMonHang ="Cơm nắm đóng hộp";
    object.giaTien="400.000vnđ";
    console.log(object)
    alert("Đã chọn Cơm nắm đóng hộp")
})
$("#btn-7").on("click", function(){
    // alert("Đã chọn sản phẩm 3")
    $("#btn-7").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-5").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-6").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-8").removeClass("btn-warning").addClass("btn-primary")
    object.tenMonHang ="Mochi sương sáo";
    object.giaTien="500.000vnđ";
    console.log(object)
    alert("Đã chọn Mochi sương sáo")
})

$("#btn-8").on("click", function(){
    // alert("Đã chọn sản phẩm 4")
    $("#btn-8").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-5").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-6").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-7").removeClass("btn-warning").addClass("btn-primary")
    object.tenMonHang ="Mochi nướng sốt caramel";
    object.giaTien="500.000vnđ";
    console.log(object)
    alert("Đã chọn Mochi nướng sốt caramel")
})


$("#btn-9").on("click", function(){
    var ten = document.getElementById("name").value;
    var sdt = document.getElementById("sdt").value;
    var mail = document.getElementById("mail").value;
    var gchu = document.getElementById("gchu").value;
    var dc = document.getElementById("dchi").value;
    object.hoTen=ten
    object.soDienThoai=sdt
    object.Email=mail
    object.ghiChu=gchu
    object.diaChi=dc
    console.log(ten)
    console.log(object)
    alert("Đặt hành thành công")
    }
    )

// thử
function thongbaopopup(){
    document.getElementById("tbpopup-1").classList.toggle("active");
    }


    function thongbaopopup2(){
        document.getElementById("tbpopup-2").classList.toggle("active");
        }



        // ấy//
        