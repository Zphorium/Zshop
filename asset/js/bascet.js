let buttons=document.querySelectorAll('.add_cart')

if(localStorage.getItem('basket')=== null){
    localStorage.setItem('basket',JSON.stringify([]))
}



for (let button of buttons) {
    button.onclick =function(e){
        e.preventDefault();
           let gid=e.target.parentElement.parentElement.id;
           console.log(gid);
           let gname=e.target.parentElement.parentElement.children[2].children[0].innerHTML;
           let gcost=e.target.parentElement.parentElement.children[2].children[1].children[1].innerHTML;
           let gimg=e.target.parentElement.parentElement.children[0].src;
           let basket=JSON.parse(localStorage.getItem('basket')); 
           let exitg=basket.find(g=>g.Id===gid)
           console.log(exitg);

            
           if(exitg== undefined){

               
               basket.push({
                Id:gid,
                Name:gname,
                Cost:gcost,
                Img:gimg,
                Count:1
                
            })
          }
          else{
         exitg.Count+=1
        
        }

           localStorage.setItem('basket',JSON.stringify(basket));
           CountGalary();
    }
}
function CountGalary(){
    let basket=JSON.parse(localStorage.getItem('basket')); 
    document.getElementById('counter').innerHTML=basket.length
}
CountGalary();