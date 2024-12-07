
function somarDoisNumeros() {
    
    let numero1 = prompt("Digite o primeiro número:");
    
    let numero2 = prompt("Digite o segundo número:");

    
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite apenas números válidos.");
    } else {
        
        let resultado = numero1 + numero2;
        alert("O resultado da soma é: " + resultado);
    }
}


somarDoisNumeros();
