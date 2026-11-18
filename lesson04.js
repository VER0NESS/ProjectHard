function f(p){
    if(typeof(p)!="string"){
        console.log("!!!НЕ СТРОКА!!!")
        return
    }
    else{
        p=p.trim()
    }
    if(p.length>30){
        p=p.slice(0,30)+("...")
    }
    console.log(p)
}
console.log("30+symbols")
f("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
console.log("normal")
f("aaa")
console.log("number check")
f(1)
console.log("check fo spaces ( aaa )")
f(" aaa ")