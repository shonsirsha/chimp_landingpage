function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
     }

      function getCookie(name) {
        var match = document.cookie.match(
          new RegExp("(^| )" + name + "=([^;]+)")
        );
        if (match) return match[2];
        else return null;
      }

      function handleCookieNotice() {
        var chimpCookieNoticeAgreed = getCookie("chimpCookieNoticeAgreed");
        var elCookieNotice = document.querySelector("#cookie-notice-div");
        if (!elCookieNotice) return;
        var cookieNoticeAgreeButton = document.querySelector("#consent-accept");
        var cookieNoticeDeclineButton = document.getElementById(
          "consent-decline"
        );
        var cookieNoticeRevokeButton = document.getElementById(
          "consent-revoke"
        );

        if (chimpCookieNoticeAgreed === "true") {
          elCookieNotice.style.display = "none";
        } else if (chimpCookieNoticeAgreed === "false") {
          elCookieNotice.style.display = "none";
        } else {
          document.querySelector("#cookie-notice-div").style.display = "block";
        }

        cookieNoticeAgreeButton.addEventListener("click", function() {
          setCookie("chimpCookieNoticeAgreed", "true", 365);
          $(elCookieNotice).fadeToggle();

        });

        cookieNoticeDeclineButton.addEventListener("click", function() {
          setCookie("chimpCookieNoticeAgreed", "false", 365);
          $(elCookieNotice).fadeToggle();
        });

        if (cookieNoticeRevokeButton) {
          cookieNoticeRevokeButton.addEventListener("click", function() {
            setCookie("chimpCookieNoticeAgreed", "false", 365);
            location.reload();
          });
        }
      }

      $(document).ready(function() {
        handleCookieNotice();
      });
