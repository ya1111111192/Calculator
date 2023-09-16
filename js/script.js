"use strict";



let calculator = {
    currentNumberString : "",
    firstNumber : 0,
    secondNumber : 0,
    action : "",
    numAfterPoint : 0,
    secondaryLine : "",
    
    
    
    pressNumberButton(num){
        
        if(this.currentNumberString == "0"){
           this.currentNumberString = "";
        }
        
        if(this.currentNumberString.length < 10){
            this.currentNumberString += num;
            this.showMainNumber();      
        }

    },
    
    pressReset(){
        this.currentNumberString = "";
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.showMainNumber();
        this.showSecondaryLine("", true);
        this.action = "";
        
    },
    
    pressPlus(){
        this.ifLastSymbolDot();        
        this.firstNumber = Number(this.currentNumberString);
        this.showSecondaryLine(this.firstNumber + " + ");
        this.currentNumberString = "";
        this.showMainNumber();
        this.action = "plus";
    },
    
    pressMinus(){
        
        this.ifLastSymbolDot();
        this.firstNumber = Number(this.currentNumberString);
        this.showSecondaryLine(this.firstNumber + " - ");
        this.currentNumberString = "";
        this.showMainNumber();
        this.action = "minus";
    },
    
    pressMultiply(){
        
        this.ifLastSymbolDot();
        this.firstNumber = Number(this.currentNumberString);
        this.showSecondaryLine(this.firstNumber + " × ");
        this.currentNumberString = "";
        this.showMainNumber();
        this.action = "multiply";
    },
    
    pressDivide(){
        
        this.ifLastSymbolDot();
        this.firstNumber = Number(this.currentNumberString);
        this.showSecondaryLine(this.firstNumber + " ÷ ");
        this.currentNumberString = "";
        this.showMainNumber();
        this.action = "divide";
    },
    
    pressRevers(){
        
        if(this.currentNumberString.slice(0,1) != "-"){
            this.currentNumberString = "-" + this.currentNumberString;
        }else this.currentNumberString = this.currentNumberString.slice(1);
        this.showMainNumber();
    },
    
    pressDot(){
        if(this.currentNumberString.indexOf(".") == -1 && this.currentNumberString.length < 9){
            this.currentNumberString += ".";
            this.showMainNumber();      
        }
    },
    
    pressEquel(){
        this.secondNumber = Number(this.currentNumberString);
        this.currentNumberString = "";
        
       
        
        if(this.action == "plus") {
            this.currentNumberString = String(this.firstNumber + this.secondNumber);
            this.action = "";
        }

        if(this.action == "minus") {
            this.currentNumberString = String(this.firstNumber - this.secondNumber);
            this.action = "";
        }

        if(this.action == "multiply") {
            
           this.numAfterPoint = (String(this.firstNumber).length - (String( this.firstNumber ).indexOf(".") + 1)) + (String(this.secondNumber).length - (String( this.secondNumber ).indexOf(".") + 1));
            
            this.currentNumberString = String(this.firstNumber * this.secondNumber);
            this.currentNumberString = this.currentNumberString.slice( 0, this.currentNumberString.indexOf(".") + this.numAfterPoint + 1 );
            
            this.action = "";
            
        }
        
        if(this.action == "divide") {
            this.currentNumberString = String(this.firstNumber / this.secondNumber);
            this.action = "";
        }
        this.showSecondaryLine(this.secondNumber + " = ")
        this.showMainNumber();
    },
    
    showMainNumber(){
        document.getElementById("mainWindow").textContent = this.currentNumberString;
    },
    
    showSecondaryLine(str, reset = false){
        
        if(reset || (this.secondaryLine.indexOf("=") != -1)){
            this.secondaryLine = str;            
        }else{
            this.secondaryLine += str;
        }
        
        document.getElementById("secondaryLine").textContent = this.secondaryLine;
        
    },
    
    ifLastSymbolDot(){
        if(this.currentNumberString.slice(-1) == "."){
            this.currentNumberString += 0;
            this.showMainNumber();
         }
    }
    
    
    
};


