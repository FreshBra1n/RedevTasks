let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java" ];
const removeDuplicates=arr=>arr.filter((item,ind)=>arr.indexOf(item)===ind)

console.log(removeDuplicates(arr))
