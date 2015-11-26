/*1*/


    var smartphone_nav1 = document.querySelector(".smartphone-content-navigation-display");
    var dot_active1 = document.querySelector(".dot-active-smartphone-1");
    var smartphone_hover1 = document.querySelector(".smartphone-hover-display + img");



    var smartphone_hover_div1 = document.querySelector(".smartphone-hover-display");
    var nav_after1 = document.querySelector(".smartphone-content-navigation-display .nav-after");

    smartphone_nav1.addEventListener("mouseover", function(){
      dot_active1.classList.add("dot-active-show");
      smartphone_hover1.classList.add("dot-active-show");
    });


    smartphone_nav1.addEventListener("mouseout", function(){
      dot_active1.classList.remove("dot-active-show");
      smartphone_hover1.classList.remove("dot-active-show");
    });






    smartphone_hover_div1.addEventListener("mouseover", function(){
      nav_after1.classList.add("line-hover");
      dot_active1.classList.add("dot-active-show");
      smartphone_nav1.classList.add("text-hover");
    });


    smartphone_hover_div1.addEventListener("mouseout", function(){
      nav_after1.classList.remove("line-hover");
      dot_active1.classList.remove("dot-active-show");
      smartphone_nav1.classList.remove("text-hover");
    });














                                 /*2*/


    var smartphone_nav2 = document.querySelector(".smartphone-content-navigation-home-btn");
    var dot_active2 = document.querySelector(".dot-active-smartphone-2");
    var smartphone_hover2 = document.querySelector(".smartphone-hover-home-btn + img");



    var smartphone_hover_div2 = document.querySelector(".smartphone-hover-home-btn");
    var nav_after2 = document.querySelector(".smartphone-content-navigation-home-btn .nav-after");

    smartphone_nav2.addEventListener("mouseover", function(){
      dot_active2.classList.add("dot-active-show");
      smartphone_hover2.classList.add("dot-active-show");
    });


    smartphone_nav2.addEventListener("mouseout", function(){
      dot_active2.classList.remove("dot-active-show");
      smartphone_hover2.classList.remove("dot-active-show");
    });






    smartphone_hover_div2.addEventListener("mouseover", function(){
      nav_after2.classList.add("line-hover");
      dot_active2.classList.add("dot-active-show");
      smartphone_nav2.classList.add("text-hover");
    });


    smartphone_hover_div2.addEventListener("mouseout", function(){
      nav_after2.classList.remove("line-hover");
      dot_active2.classList.remove("dot-active-show");
      smartphone_nav2.classList.remove("text-hover");
    });



                                      /*3,4*/
    var smartphone_hover_div4 = document.querySelector(".smartphone-hover-camera2");

    var smartphone_nav3 = document.querySelector(".smartphone-content-navigation-camera");
    var dot_active3 = document.querySelector(".dot-active-smartphone-3");
    var smartphone_hover3 = document.querySelector(".smartphone-hover-camera + img");


    var smartphone_hover_div3 = document.querySelector(".smartphone-hover-camera");
    var nav_after3 = document.querySelector(".smartphone-content-navigation-camera .nav-after");

    smartphone_nav3.addEventListener("mouseover", function(){
      dot_active3.classList.add("dot-active-show");
      smartphone_hover3.classList.add("dot-active-show");
    });


    smartphone_nav3.addEventListener("mouseout", function(){
      dot_active3.classList.remove("dot-active-show");
      smartphone_hover3.classList.remove("dot-active-show");
    });


    smartphone_hover_div3.addEventListener("mouseover", function(){
      nav_after3.classList.add("line-hover");
      dot_active3.classList.add("dot-active-show");
      smartphone_nav3.classList.add("text-hover");
    });


    smartphone_hover_div3.addEventListener("mouseout", function(){
      nav_after3.classList.remove("line-hover");
      dot_active3.classList.remove("dot-active-show");
      smartphone_nav3.classList.remove("text-hover");
    }); 



      smartphone_hover_div4.addEventListener("mouseover", function(){

      nav_after3.classList.add("line-hover");
      dot_active3.classList.add("dot-active-show");
      smartphone_nav3.classList.add("text-hover");
      smartphone_hover3.classList.add("dot-active-show");
    });

    smartphone_hover_div4.addEventListener("mouseout", function(){
      nav_after3.classList.remove("line-hover");
      dot_active3.classList.remove("dot-active-show");
      smartphone_nav3.classList.remove("text-hover");
      smartphone_hover3.classList.remove("dot-active-show");
    });

                                 
                                    /*5*/


    var smartphone_nav5 = document.querySelector(".smartphone-content-navigation-button");
    var dot_active5 = document.querySelector(".dot-active-smartphone-5");
    var smartphone_hover5 = document.querySelector(".smartphone-hover-button + img");



    var smartphone_hover_div5 = document.querySelector(".smartphone-hover-button");
    var nav_after5 = document.querySelector(".smartphone-content-navigation-button .nav-after");

    smartphone_nav5.addEventListener("mouseover", function(){
      dot_active5.classList.add("dot-active-show");
      smartphone_hover5.classList.add("dot-active-show");
    });


    smartphone_nav5.addEventListener("mouseout", function(){
      dot_active5.classList.remove("dot-active-show");
      smartphone_hover5.classList.remove("dot-active-show");
    });




    smartphone_hover_div5.addEventListener("mouseover", function(){
      nav_after5.classList.add("line-hover");
      dot_active5.classList.add("dot-active-show");
      smartphone_nav5.classList.add("text-hover");
    });


    smartphone_hover_div5.addEventListener("mouseout", function(){
      nav_after5.classList.remove("line-hover");
      dot_active5.classList.remove("dot-active-show");
      smartphone_nav5.classList.remove("text-hover");
    });

                                /*6,7*/

    var smartphone_hover_div7 = document.querySelector(".smartphone-hover-speaker2");


    var smartphone_nav6 = document.querySelector(".smartphone-content-navigation-speaker");
    var dot_active6 = document.querySelector(".dot-active-smartphone-6");
    var smartphone_hover6 = document.querySelector(".smartphone-hover-speaker + img");



    var smartphone_hover_div6 = document.querySelector(".smartphone-hover-speaker");
    var nav_before6 = document.querySelector(".smartphone-content-navigation-speaker .nav-before");
    var nav_after6 = document.querySelector(".smartphone-content-navigation-speaker .nav-after");

    smartphone_nav6.addEventListener("mouseover", function(){
      dot_active6.classList.add("dot-active-show");
      smartphone_hover6.classList.add("dot-active-show");
    });


    smartphone_nav6.addEventListener("mouseout", function(){
      dot_active6.classList.remove("dot-active-show");
      smartphone_hover6.classList.remove("dot-active-show");
    });



    smartphone_hover_div6.addEventListener("mouseover", function(){
      nav_before6.classList.add("line-hover");
      nav_after6.classList.add("line-hover");
      dot_active6.classList.add("dot-active-show");
      smartphone_nav6.classList.add("text-hover");
    });


    smartphone_hover_div6.addEventListener("mouseout", function(){
      nav_before6.classList.remove("line-hover");
      nav_after6.classList.remove("line-hover");
      dot_active6.classList.remove("dot-active-show");
      smartphone_nav6.classList.remove("text-hover");
    });


    smartphone_hover_div7.addEventListener("mouseover", function(){
      nav_before6.classList.add("line-hover");
      nav_after6.classList.add("line-hover");
      dot_active6.classList.add("dot-active-show");
      smartphone_nav6.classList.add("text-hover");
      smartphone_hover6.classList.add("dot-active-show");
    });

    smartphone_hover_div7.addEventListener("mouseout", function(){
      nav_before6.classList.remove("line-hover");
      nav_after6.classList.remove("line-hover");
      dot_active6.classList.remove("dot-active-show");
      smartphone_nav6.classList.remove("text-hover");
      smartphone_hover6.classList.remove("dot-active-show");
    });








                                /*8*/


    var smartphone_nav8 = document.querySelector(".smartphone-content-navigation-battery");
    var dot_active8 = document.querySelector(".dot-active-smartphone-8");
    var smartphone_hover8 = document.querySelector(".smartphone-hover-battery + img");



    var smartphone_hover_div8 = document.querySelector(".smartphone-hover-battery");
    var nav_after8 = document.querySelector(".smartphone-content-navigation-battery .nav-after");

    smartphone_nav8.addEventListener("mouseover", function(){
      dot_active8.classList.add("dot-active-show");
      smartphone_hover8.classList.add("dot-active-show");
    });


    smartphone_nav8.addEventListener("mouseout", function(){
      dot_active8.classList.remove("dot-active-show");
      smartphone_hover8.classList.remove("dot-active-show");
    });




    smartphone_hover_div8.addEventListener("mouseover", function(){
      nav_after8.classList.add("line-hover");
      dot_active8.classList.add("dot-active-show");
      smartphone_nav8.classList.add("text-hover");
    });


    smartphone_hover_div8.addEventListener("mouseout", function(){
      nav_after8.classList.remove("line-hover");
      dot_active8.classList.remove("dot-active-show");
      smartphone_nav8.classList.remove("text-hover");
    });











                                    /*9*/


    var smartphone_hover_div9_2 = document.querySelector(".smartphone-hover-mic2");


    var smartphone_nav9 = document.querySelector(".smartphone-content-navigation-mic");
    var dot_active9 = document.querySelector(".dot-active-smartphone-9");
    var smartphone_hover9 = document.querySelector(".smartphone-hover-mic + img");



    var smartphone_hover_div9 = document.querySelector(".smartphone-hover-mic");
    var nav_before9 = document.querySelector(".smartphone-content-navigation-mic .nav-before");
    var nav_after9 = document.querySelector(".smartphone-content-navigation-mic .nav-after");

    smartphone_nav9.addEventListener("mouseover", function(){
      dot_active9.classList.add("dot-active-show");
      smartphone_hover9.classList.add("dot-active-show");
    });


    smartphone_nav9.addEventListener("mouseout", function(){
      dot_active9.classList.remove("dot-active-show");
      smartphone_hover9.classList.remove("dot-active-show");
    });






    smartphone_hover_div9.addEventListener("mouseover", function(){
      nav_before9.classList.add("line-hover");
      nav_after9.classList.add("line-hover");
      dot_active9.classList.add("dot-active-show");
      smartphone_nav9.classList.add("text-hover");
    });


    smartphone_hover_div9.addEventListener("mouseout", function(){
      nav_before9.classList.remove("line-hover");
      nav_after9.classList.remove("line-hover");
      dot_active9.classList.remove("dot-active-show");
      smartphone_nav9.classList.remove("text-hover");
    });





    smartphone_hover_div9_2.addEventListener("mouseover", function(){
      nav_before9.classList.add("line-hover");
      nav_after9.classList.add("line-hover");
      dot_active9.classList.add("dot-active-show");
      smartphone_nav9.classList.add("text-hover");
      smartphone_hover9.classList.add("dot-active-show");
    });

    smartphone_hover_div9_2.addEventListener("mouseout", function(){
      nav_before9.classList.remove("line-hover");
      nav_after9.classList.remove("line-hover");
      dot_active9.classList.remove("dot-active-show");
      smartphone_nav9.classList.remove("text-hover");
      smartphone_hover9.classList.remove("dot-active-show");
    });













                                              /*10*/


    var smartphone_hover_div10_2 = document.querySelector(".smartphone-hover-sound-btn2");


    var smartphone_nav10 = document.querySelector(".smartphone-content-navigation-sound-btn");
    var dot_active10 = document.querySelector(".dot-active-smartphone-10");
    var smartphone_hover10 = document.querySelector(".smartphone-hover-sound-btn + img");



    var smartphone_hover_div10 = document.querySelector(".smartphone-hover-sound-btn");
    var nav_after10 = document.querySelector(".smartphone-content-navigation-sound-btn .nav-after");

    smartphone_nav10.addEventListener("mouseover", function(){
      dot_active10.classList.add("dot-active-show");
      smartphone_hover10.classList.add("dot-active-show");
    });


    smartphone_nav10.addEventListener("mouseout", function(){
      dot_active10.classList.remove("dot-active-show");
      smartphone_hover10.classList.remove("dot-active-show");
    });






    smartphone_hover_div10.addEventListener("mouseover", function(){
      nav_after10.classList.add("line-hover");
      dot_active10.classList.add("dot-active-show");
      smartphone_nav10.classList.add("text-hover");
    });


    smartphone_hover_div10.addEventListener("mouseout", function(){
      nav_after10.classList.remove("line-hover");
      dot_active10.classList.remove("dot-active-show");
      smartphone_nav10.classList.remove("text-hover");
    });





    smartphone_hover_div10_2.addEventListener("mouseover", function(){
      nav_after10.classList.add("line-hover");
      dot_active10.classList.add("dot-active-show");
      smartphone_nav10.classList.add("text-hover");
      smartphone_hover10.classList.add("dot-active-show");
    });

    smartphone_hover_div10_2.addEventListener("mouseout", function(){
      nav_after10.classList.remove("line-hover");
      dot_active10.classList.remove("dot-active-show");
      smartphone_nav10.classList.remove("text-hover");
      smartphone_hover10.classList.remove("dot-active-show");
    });











                                                      /*11*/


    var smartphone_hover_div11_2 = document.querySelector(".smartphone-hover-headphones2");


    var smartphone_nav11 = document.querySelector(".smartphone-content-navigation-headphones");
    var dot_active11 = document.querySelector(".dot-active-smartphone-11");
    var smartphone_hover11 = document.querySelector(".smartphone-hover-headphones + img");



    var smartphone_hover_div11 = document.querySelector(".smartphone-hover-headphones");
    var nav_before11 = document.querySelector(".smartphone-content-navigation-headphones .nav-before");
    var nav_after11 = document.querySelector(".smartphone-content-navigation-headphones .nav-after");

    smartphone_nav11.addEventListener("mouseover", function(){
      dot_active11.classList.add("dot-active-show");
      smartphone_hover11.classList.add("dot-active-show");
    });


    smartphone_nav11.addEventListener("mouseout", function(){
      dot_active11.classList.remove("dot-active-show");
      smartphone_hover11.classList.remove("dot-active-show");
    });






    smartphone_hover_div11.addEventListener("mouseover", function(){
      nav_before11.classList.add("line-hover");
      nav_after11.classList.add("line-hover");
      dot_active11.classList.add("dot-active-show");
      smartphone_nav11.classList.add("text-hover");
    });


    smartphone_hover_div11.addEventListener("mouseout", function(){
      nav_before11.classList.remove("line-hover");
      nav_after11.classList.remove("line-hover");
      dot_active11.classList.remove("dot-active-show");
      smartphone_nav11.classList.remove("text-hover");
    });





    smartphone_hover_div11_2.addEventListener("mouseover", function(){
      nav_before11.classList.add("line-hover");
      nav_after11.classList.add("line-hover");
      dot_active11.classList.add("dot-active-show");
      smartphone_nav11.classList.add("text-hover");
      smartphone_hover11.classList.add("dot-active-show");
    });

    smartphone_hover_div11_2.addEventListener("mouseout", function(){
      nav_before11.classList.remove("line-hover");
      nav_after11.classList.remove("line-hover");
      dot_active11.classList.remove("dot-active-show");
      smartphone_nav11.classList.remove("text-hover");
      smartphone_hover11.classList.remove("dot-active-show");
    });









                                      /*12*/

    var smartphone_nav12 = document.querySelector(".smartphone-content-navigation-po");
    var dot_active12 = document.querySelector(".dot-active-smartphone-12");
    var smartphone_hover12 = document.querySelector(".smartphone-hover-po + img");

    smartphone_nav12.addEventListener("mouseover", function(){
      dot_active12.classList.add("dot-active-show");
      smartphone_hover12.classList.add("dot-active-show");
    });


    smartphone_nav12.addEventListener("mouseout", function(){
      dot_active12.classList.remove("dot-active-show");
      smartphone_hover12.classList.remove("dot-active-show");
    });















                                                                      /*13*/


    var smartphone_hover_div13_2 = document.querySelector(".smartphone-hover-power-port2");


    var smartphone_nav13 = document.querySelector(".smartphone-content-navigation-power-port");
    var dot_active13 = document.querySelector(".dot-active-smartphone-13");
    var smartphone_hover13 = document.querySelector(".smartphone-hover-power-port + img");



    var smartphone_hover_div13 = document.querySelector(".smartphone-hover-power-port");
    var nav_after13 = document.querySelector(".smartphone-content-navigation-power-port .nav-after");

    smartphone_nav13.addEventListener("mouseover", function(){
      dot_active13.classList.add("dot-active-show");
      smartphone_hover13.classList.add("dot-active-show");
    });


    smartphone_nav13.addEventListener("mouseout", function(){
      dot_active13.classList.remove("dot-active-show");
      smartphone_hover13.classList.remove("dot-active-show");
    });






    smartphone_hover_div13.addEventListener("mouseover", function(){
      nav_after13.classList.add("line-hover");
      dot_active13.classList.add("dot-active-show");
      smartphone_nav13.classList.add("text-hover");
    });


    smartphone_hover_div13.addEventListener("mouseout", function(){
      nav_after13.classList.remove("line-hover");
      dot_active13.classList.remove("dot-active-show");
      smartphone_nav13.classList.remove("text-hover");
    });





    smartphone_hover_div13_2.addEventListener("mouseover", function(){
      nav_after13.classList.add("line-hover");
      dot_active13.classList.add("dot-active-show");
      smartphone_nav13.classList.add("text-hover");
      smartphone_hover13.classList.add("dot-active-show");
    });

    smartphone_hover_div13_2.addEventListener("mouseout", function(){
      nav_after13.classList.remove("line-hover");
      dot_active13.classList.remove("dot-active-show");
      smartphone_nav13.classList.remove("text-hover");
      smartphone_hover13.classList.remove("dot-active-show");
    });