
$(function () {
    function fyRequest(tolan) {
      var appKey = "0f6507967a45ece4";
      var key = "FHG91Enk9iWwgbv8xa6a1mcEJZbi2EX9";
      var salt = new Date().getTime();
      var curtime = Math.round(new Date().getTime() / 1000);
      var query = $(".search").val();
      var from = "auto";
      var to = tolan;
      // var to = ['en', 'ja', 'ko', 'ru']
      var str1 = appKey + truncate(query) + salt + curtime + key;
      var vocabId = "您的用户词表ID";
      var sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);

      $.ajax({
        url: "https://openapi.youdao.com/api",
        type: "post",
        dataType: "jsonp",
        data: {
          q: query,
          appKey: appKey,
          salt: salt,
          from: from,
          to: to,
          sign: sign,
          signType: "v3",
          curtime: curtime,
          vocabId: vocabId,
        },
        success: function (data) {
          $(".search").val(data.translation);
          googleSearch(data.translation[0]);
        },
      });

      function truncate(q) {
        var len = q.length;
        if (len <= 20) return q;
        return q.substring(0, 10) + len + q.substring(len - 10, len);
      }
    }

    function googleLanSearch(event) {
      fyRequest(event.data.tolan);
    }

    function googleSearch(key) {
      var keys = $(".search").val();
      var searckKey = `https://www.google.com/search?q=${keys}`;
      window.open(searckKey);
    }

    $(".fyCnbtn").on(
        "click",
        {
            tolan: "zh-CHS",
        },
        googleLanSearch
    );
    $(".fyEnbtn").on(
      "click",
      {
        tolan: "en",
      },
      googleLanSearch
    );
    $(".fyRubtn").on(
      "click",
      {
        tolan: "ru",
      },
      googleLanSearch
    );
    $(".fyJabtn").on(
      "click",
      {
        tolan: "ja",
      },
      googleLanSearch
    );
    $(".fyKobtn").on(
      "click",
      {
        tolan: "ko",
      },
      googleLanSearch
    );
  });