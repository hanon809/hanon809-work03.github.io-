// フェードイン
window.addEventListener("scroll", function () {
    const images = document.querySelectorAll(".fadein");
    const triggerHeight = window.innerHeight * 0.8; // ウィンドウの80%の高さで発火
  
    images.forEach((image) => {
      const imageTop = image.getBoundingClientRect().top;
  
      if (imageTop < triggerHeight) {
        image.style.opacity = 1;
        image.style.transform = "translateY(0)";
      }
    });
  });
  
  window.addEventListener("scroll", () => {
    const sroll = window.pageYOffset;
    if (srollVal > contentsPosition) {
       // フェードアニメーションを呼び出す
      fadeAnime();
    }
  });
  
  $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;	//idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });