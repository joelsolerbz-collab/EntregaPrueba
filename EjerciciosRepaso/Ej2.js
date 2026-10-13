function main() {
    let numeros = [];
    for (let i =0; i < 100; i++) {
        numeros.push(Math.floor(Math.random()* 10 + 1));    
    }
    console.log(numeros);
}
main ();