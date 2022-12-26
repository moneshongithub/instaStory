var arr=[
    {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"},
    {dp:"https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {dp:"https://images.unsplash.com/photo-1594185230805-68f37369b450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1902&q=80"},
    {dp:"https://images.unsplash.com/photo-1588099773661-b19624406e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=373&q=80"},
    {dp:"https://images.unsplash.com/photo-1578680671705-0965e325b2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"}
]

var clutter = "";

arr.forEach(function(elem,index){
    clutter+=`   <div id="story">
    <div id="inner">
        <img id="${index}" src="${elem.dp}" alt="">

    </div>
</div>`
})
document.querySelector("#stories").innerHTML = clutter;

//     document.querySelector("#stories").addEventListener("click",function(dets){
//     document.querySelector("#fs").setAttribute("src",arr[dets.target.id].dp)
//         document.querySelector("#fs").style.display = "flex"
// })

var gro=0;

document.querySelector("#stories").addEventListener("click",function(dets){

    
    document.querySelector("#fs").style.backgroundImage = `url(${arr[dets.target.id].dp})`
    document.querySelector("#fs").style.display = "flex"

    setTimeout(function(){
        document.querySelector("#fs").style.display="none"
        
            },3000)

if (gro<100) {
    setInterval(function(){
        document.querySelector("#grow").style.width = `${gro++}%`
    },30)
} else {
    gro = 0
}



})