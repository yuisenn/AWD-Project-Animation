document.addEventListener("DOMContentLoaded", function() {

    var logo = document.querySelector('.logo img');

    logo.addEventListener('click', function() {
        // Stop animation
        logo.style.animationPlayState = 'paused';


        logo.style.animation = 'bounceOffAndDisappear 1s forwards';

        var shoeImages = [
            ["images/front/front01.jpg", "images/side/side01.jpg", "images/top/top01.jpg", "images/back/back01.jpg", "images/bottom/bottom01.jpg", "images/other/other01.jpg"],
            ["images/front/front02.jpg", "images/side/side02.jpg", "images/top/top02.jpg", "images/back/back02.jpg", "images/bottom/bottom02.jpg", "images/other/other02.jpg"],
            ["images/front/front03.jpg", "images/side/side03.jpg", "images/top/top03.jpg", "images/back/back03.jpg", "images/bottom/bottom03.jpg", "images/other/other03.jpg"],
            ["images/front/front04.jpg", "images/side/side04.jpg", "images/top/top04.jpg", "images/back/back04.jpg", "images/bottom/bottom04.jpg", "images/other/other04.jpg"],
            ["images/front/front05.jpg", "images/side/side05.jpg", "images/top/top05.jpg", "images/back/back05.jpg", "images/bottom/bottom05.jpg", "images/other/other05.jpg"],
            ["images/front/front06.jpg", "images/side/side06.jpg", "images/top/top06.jpg", "images/back/back06.jpg", "images/bottom/bottom06.jpg", "images/other/other06.jpg"]
        ];
    

        var boxes = document.querySelectorAll('.box');
        boxes.forEach(function(box, index) {
            // Initialize
            var currentIndex = 0;
    
            box.addEventListener('click', function() {
                var currentImage = box.querySelector('img');
                var currentSrc = currentImage.src;   
                var currentImages = shoeImages[index];
                for (var i = 0; i < currentImages.length; i++) {
                    if (currentImages[i] === currentSrc) {
                        currentIndex = i;
                        break;
                    }
                }
    
                currentIndex = (currentIndex + 1) % currentImages.length;
                currentImage.src = currentImages[currentIndex];
    
            });
        });
    });
});
