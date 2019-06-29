// 封转一个获取指定区间的随机整数方法

var kits={};
kits.radomInt=function(n,m){
return Math.floor(Math.random()*(m-n+1)+n);
}
// 加行备注再上传更新一次