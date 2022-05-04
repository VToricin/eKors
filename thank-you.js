let toMain = document.getElementById('toMain');


toMain.addEventListener('click', function(){
        for (let i=0; i<Object.keys(localStorage).length; i++){
            if (Object.keys(localStorage)[i].indexOf('ekors')===0){
                localStorage.removeItem(Object.keys(localStorage)[i])
            }
        }
})