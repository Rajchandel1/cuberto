Shery.mouseFollower();

Shery.makeMagnet(".n2 i,nav h1,button,.content h1,.mnav i" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.hoverWithMediaCircle(".hero h1", {
    images: ["https://images.unsplash.com/photo-1522040883829-9104eee3488a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdoaXRlJTIwbWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D"]
    
  });
  
    



  

  

  Shery.imageMasker(".vcontainer", {
    
    mouseFollower: true,
    text: "Cuberto",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1
  });

  var cont = document.querySelector(".content")
  var vdo = document.querySelector(".f video")

  cont.addEventListener("mouseenter",function(){
    vdo.style.opacity = 1
    cont.style.boxShadow = "0 0 10px black"
  })

  cont.addEventListener("mouseleave",function(){
    vdo.style.opacity = 0
    cont.style.boxShadow = "0 0 10px white"
  })

  var close = document.querySelector(".mnav i")
  var menu = document.querySelector(".mnav")
  var icon = document.querySelector("nav .n2")
  console.log(icon)
  icon.addEventListener("click",function(){
    console.log(icon)
    gsap.to(menu,{
        x:10,
        duration:1
    })
  })

  close.addEventListener("click",function(){
    gsap.to(menu,{
        x:1000,
        duration:1
    })
  })

  gsap.to(".vcontainer video",{
   scale:3,
   duration:1,
   scrollTrigger:{
    trigger:".vcontainer",
    scroller:"body",
    start:"top 0%",
    end:"bottom 0%",  
    scrub:2,
    pin:true
   }
  })

  var list = document.querySelectorAll(".elem")
  var img = document.querySelector(".elem img")

  console.log(list)
  
list.forEach(function(val){
 
 val.addEventListener("mouseenter",function(){
  val.childNodes[3].style.opacity = 1
 })

 val.addEventListener('mouseleave',function(){
  val.childNodes[3].style.opacity = 0
 })

 val.addEventListener("mousemove",function(dets){
  val.childNodes[3].style.left = dets.x+"px"

 })
})