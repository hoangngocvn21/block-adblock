! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div class="inner"><div class="header"><h2 style="color:#fff;">Đã phát hiện Ad Blocker</h2></div><p>Vui lòng tắt trình chặn quảng cáo của bạn để tiếp tục!</p><div class="tombol"><button class="1 active">Adblock</button><button class="2">Adblock Plus</button></div><div class="caranya"><div class="1 active"><ol><li>Click on the AdBlock icon in your browser.<br/>Nhấp vào biểu tượng AdBlock trong trình duyệt của bạn.<br/><img src="https://1.bp.blogspot.com/-eP26xmHdOH4/YMp0AeH9ymI/AAAAAAAABnU/8vwXDiNke_QAaNG-RGT0SI22mtJtaZxtgCLcBGAsYHQ/s16000/logo-1.png" alt="Adblock" width="250px"/></li><li>Choose, Don\'t run on pages on this domain.<br/>Chọn "Always".<br/><img src="https://1.bp.blogspot.com/-k58KXDSAN78/YMp1dK9bj4I/AAAAAAAABnc/Vycmh0rmCG4GSAxvUS081inhGAdw94zcQCLcBGAsYHQ/s16000/logo-2.png" alt="Adblock" width="300px"/></li><li>The browser icon should have turned green.<br/>Biểu tượng trình duyệt phải chuyển sang màu xanh lá.<br/><img src="https://1.bp.blogspot.com/-eP26xmHdOH4/YMp0AeH9ymI/AAAAAAAABnU/8vwXDiNke_QAaNG-RGT0SI22mtJtaZxtgCLcBGAsYHQ/s16000/logo-1.png" alt="Adblock" width="250px"/></li><li>Refresh the page if it didn\'t refresh automatically. Thanks!<br/>Làm mới trang nếu nó không tự động làm mới. Cảm ơn bạn rất nhiều!</li></ol></div><div class="2"><ol><li>Click on the AdBlock Plus icon in your browser.<br/>Nhấp vào biểu tượng AdBlock Plus trong trình duyệt của bạn.<br/><img src="https://1.bp.blogspot.com/-eP26xmHdOH4/YMp0AeH9ymI/AAAAAAAABnU/8vwXDiNke_QAaNG-RGT0SI22mtJtaZxtgCLcBGAsYHQ/s16000/logo-1.png" alt="Adblock" width="250px"></li><li>Click the "This Website" button.<br/>Nhấp vào nút "Trang web này".<br/><img src="https://1.bp.blogspot.com/-k58KXDSAN78/YMp1dK9bj4I/AAAAAAAABnc/Vycmh0rmCG4GSAxvUS081inhGAdw94zcQCLcBGAsYHQ/s16000/logo-2.png" alt="Adblock" width="300px"></li><li>The browser icon should have turned grey.<br/>Biểu tượng trình duyệt phải chuyển sang màu xám.<br/><img src="https://1.bp.blogspot.com/-eP26xmHdOH4/YMp0AeH9ymI/AAAAAAAABnU/8vwXDiNke_QAaNG-RGT0SI22mtJtaZxtgCLcBGAsYHQ/s16000/logo-1.png" alt="Adblock" width="250px"></li></ol></div></div></div>';

        document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button");
        a.querySelector(".close");
        var d = a.querySelectorAll(".caranya > div");
        for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
            a.preventDefault();
            a = this.getAttribute("class").split(" ")[0];
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
            b[a - 1].classList.add("active");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script");
    b.type = "text/javascript";

    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();
