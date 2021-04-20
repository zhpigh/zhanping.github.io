window.onload = function () {
  var x = document.getElementsByClassName("post-meta-item-text");
  var i;
  for (i = 0; i < x.length; i++) {
     var v = x[i];
     var s = v.innerHTML;
     if(s == "Valine："){
       v.innerHTML = "评论次数：";
     }
  }
}
