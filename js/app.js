var Calculadora = {
    display : document.getElementById('display'),
    operation: "",
    init: function(){
        var buttons = document.getElementsByClassName('tecla')
        for(var key in buttons){
            buttons[key].onclick = function(){
                Calculadora.btnExecute(this)
            }
        }
    },
    displayText: function(text){
        var currentText = this.display.textContent;
        if("On" == text){
            this.display.textContent = "0";
            return;
        }else if("punto" == text){
            if (currentText.includes(".")) {
                return;
            }
            text = ".";
        }else if(text == "signo"){
            text = "0";
            if (currentText.includes("-")){
                currentText = currentText.replace("-", "");
                text = "";
            }else{
                if (currentText != "0"){
                    text = "-" + currentText;
                    currentText = "";
                }
            }
        }
        if(currentText == "0"){
            currentText = text;
        }else {
            if(text.includes("r")){
                text = text.replace("r", "");
                currentText = "";
            }
            text = currentText + text;
        }
        if (text.length > 8){
            text = text.substring(0, 8);
        }
        this.display.textContent = text;
    },
    btnExecute: function(btn){
        this.btnEffect(btn);
        if (!isNaN(btn.alt)){
            this.displayText(btn.alt);
        }else{
            var op = this.defineOperation(btn.alt);
            var result = this.executeResult(btn.alt)
            if(result != ""){
                this.displayText(result);
            }else if(op != ""){
                this.operation = op;
                this.display.textContent = "";
            }else{
                this.displayText(btn.alt);
            }
        }
    },
    btnEffect: function(btn){
        btn.style.padding = "1px";
        setTimeout(function(){
            btn.style.padding = "0px";
        }, 50);
    },
    executeResult: function(text){
        var rsul="";
        if(text == "igual"){
            this.operation = this.operation+this.display.textContent;
            rsul = eval(this.operation)+"r";
            this.operation = "";
        }
        return rsul;
    },
    defineOperation: function(text){
        var currentText = this.display.textContent;
        switch(text){
            case "mas":
            currentText = currentText + "+";
                break;
            case "menos":
            currentText = currentText + "-";
                break;
            case "por":
            currentText = currentText + "*";
                break;
            case "dividido":
            currentText = currentText + "/";
                break;
            default:
                currentText = "";
                break;
        }
        return currentText;
    }
}

Calculadora.init()