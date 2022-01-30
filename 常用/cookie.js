// 寫入 cookie=> event, ex: onchange, onclick, onload...
{/* <select name="amount" id="amount" onchange="amo(this)">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
</select> */}
{/* <script>
function amo(x){
    var amount = x.value;
      $.cookie("amount",amount);
      console.log(amount);
  };
</script> */}

// 讀取 cookie 
function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;
    
    for (var i=0, l=cookieAry.length; i<l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
    
    return cookieObj;
}

function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }

    return value;
};
// 在onload時，將cookie寫入html
function test(){
    var cookies = getCookieByName("amount");
    document.getElementById("amount").value=cookies;
  };