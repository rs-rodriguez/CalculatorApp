var Calculadora = {
    display : document.getElementById('display'),
    
    init: function(){
        var buttons = document.getElementsByClassName('tecla')
        for(var key in buttons){
            buttons[key].onclick = function(){
                Calculadora.btnExecute(this)
            }
        }
    },
    displayText: function(text){

    },
    btnExecute: function(btn){
        this.btnEffect(btn);
    },
    btnEffect: function(btn){
        btn.style.padding = "1px";
        setTimeout(function(){
            btn.style.padding = "0px";
        }, 50);
    },
    operations: function(btn){

    }
}

Calculadora.init()