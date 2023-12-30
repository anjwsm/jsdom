let head = window.document.getElementsByTagName('h1');
head[0].style.color='blue'// styles 

let ghosturl='https://s26162.pcdn.co/wp-content/uploads/2019/11/Momo.jpg';

let girlurl = 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000' ;
// console.log(head[0].getAttribute('id'));

let ghostElement = window.document.getElementById('ghost');
console.log(ghostElement.getAttribute("src"));



// ghostElement.setAttribute("src" , ghosturl);

// ghostElement.style.borderRadius='20px';
ghostElement.classList.add("rouned-corners");

ghostElement.addEventListener('mouseenter' ,()=>{
    ghostElement.setAttribute("src", ghosturl);
    head[0].innerHTML="<p>HI HI </p>"

} );

ghostElement.addEventListener('mouseleave', ()=>{
 ghostElement.setAttribute("src" , girlurl);
 head[0].innerHTML="Good Girl"
})

setInterval(()=>{
   if(ghostElement.getAttribute('src')==girlurl){
    ghostElement.setAttribute("src", ghosturl);
    head[0].innerHTML="<p>HI HI Hhahahahahahha</p>"
   }else{
    ghostElement.setAttribute("src" , girlurl);
    head[0].innerHTML="Good Girl"
   }

},800);