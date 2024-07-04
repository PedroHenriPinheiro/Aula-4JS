let soma = 0;

while (true) {
  let input = prompt(
    "Digite os numeros(ou um valor Não numerico para parar) que vc deseja somar: "
  );

  let num = parseInt(input);

  if (isNaN(num)) {
    break;
  }

  soma += num;

  console.log("Os valores dos numeros somados são: " + soma);
}
