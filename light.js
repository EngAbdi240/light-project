


    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const button1 = document.querySelector("#btn1");
    const button2 = document.querySelector("#btn2");

    btn1.addEventListener("click", ()=>{

      img1.style.display ="none"
      img2.style.display = "block"
    })

    btn2.addEventListener("click", ()=>{

      img1.style.display = "block"
      img2.style.display = "none"
    })


