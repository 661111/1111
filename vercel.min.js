<head>
<title>无影博客</title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
</head>
<body>
<script>
var alertmessage="有时候文章无法上传,请多多谅解.对了,帮忙把我添加进友链,name: 无影博客 avatar: https://612901.github.io/media/images/custom-headerLogo.ico link: https://661111.github.io description: 我是无影,主要更新blibli的几部沙雕动画.有时间会更别的东西."
var once_per_session=1
function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      end = document.cookie.indexOf(";", offset);
      if (end == -1)
      }
   }
  return returnvalue;
function alertornot(){
if (get_cookie('alerted')==''){
loadalert()
document.cookie="alerted=yes"
function loadalert(){
alert(alertmessage)
if (once_per_session==0)
loadalert()
else
alertornot()
</script>
