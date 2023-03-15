let calculadora1=(a,b,c=0)=>{
    switch (a){
        
        case "subs":
            return b-c;
            break;
        case "mult":
            return b*c;
            break;
        case "div":
            return b/c;
            break;
        default:
            console.log("Parametros no reconocidos");
            break;

    }

    }
    
console.log("suma"+calculadora1("sum",2,7));
console.log("resta"+calculadora("subs",2,2));
console.log("multiplicacion"+calculadora("mult",2));
console.log("division"+calculadora("div",2,2));
function calculadora(a,b,c=0){
    switch (a){
        
        case "subs":
            return b-c;
            break;
        case "mult":
            return b*c;
            break;
        case "div":
            return b/c;
            break;
        default:
            console.log("Parametros no reconocidos");
            break;

    }

    }
    let w=["sum",7,1];
    console.log(calculadora(...w));
function cuadrado(n){
    console.log(n*n);
}
cuadrado(2);