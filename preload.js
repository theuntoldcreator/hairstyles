
         $(window).load(function() {
            $(".main-item").delay(500).fadeOut("fast");
          $("#overlayer").delay(500).fadeOut("slow");
        })
        
            $("a[href^='#']").click(function(e) {
                e.preventDefault();
    
                var position = $($(this).attr("href")).offset().top - 180;
    
                $("body, html").animate({
                    scrollTop: position
                } /* speed */ );
            });