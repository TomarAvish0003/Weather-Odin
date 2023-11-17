
//this function is for chaning light and dark theme

var modeIcon = document.getElementById("mode-icon");

        modeIcon.onclick = function(){
            document.body.classList.toggle("dark-mode");
            if(document.body.classList.contains("dark-mode")){
                modeIcon.src = "icons\icons8-sun-48.png";
            }else{
                modeIcon.src = "icons\icons8-moon-50.png";
            }
        }