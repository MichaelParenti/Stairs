
          var btn = document.querySelector("#btn");
          var center = document.querySelector("#btn-center");
          var s1 = document.querySelector("#step1");
          var s2 = document.querySelector("#step2");
          var s3 = document.querySelector("#step3");
          var s4 = document.querySelector("#step4");
          var s5 = document.querySelector("#step5");

  function on(){
    if(center.style.background === 'black'){
        btn.style.boxShadow = '0 0 30px 5px #0000f0';
        center.style.background = '#0000f0';
        center.style.boxShadow = '0 0 10px 5px #0000f0';
        s1.style.visibility = 'visible';
        s2.style.visibility = 'visible';
        s3.style.visibility = 'visible';
        s4.style.visibility = 'visible';
        s5.style.visibility = 'visible';
    } else {
        btn.style.boxShadow = 'none';
        center.style.background = 'black';
        center.style.boxShadow = '0 0 20px 5px black';  
        s1.style.visibility = 'hidden';
        s2.style.visibility = 'hidden';
        s3.style.visibility = 'hidden';
        s4.style.visibility = 'hidden';
        s5.style.visibility = 'hidden';
    }
  
}
