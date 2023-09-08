class DoSomething {
  static main(args) {
    let upperLimit = 1000;
    let rowPage = 50;
    let columnPage = 4;
    let ordMax = 30;

    let primeNumber = Array(upperLimit + 1).fill(0);
    let pageNumber = 0;
    let pageOffset = 0;
    let rowOffset = 0;
    let column = 0;
    let possiblePrime = 1;
    let primeIndex = 1;
    let isValidPrime = false;
    let ord = 2;
    let square = 9;
    let divisorIndex = 0;
    let multiples = Array(ordMax + 1).fill(0);

    primeNumber[1] = 2;

    while (primeIndex < upperLimit) {
      do {
        possiblePrime += 2;
        if (possiblePrime == square) {
          ord++;
          square = primeNumber[ord] * primeNumber[ord];
          multiples[ord - 1] = possiblePrime;
        }
        divisorIndex = 2;
        isValidPrime = true;
        while (divisorIndex < ord && isValidPrime) {
          while (multiples[divisorIndex] < possiblePrime) {
            multiples[divisorIndex] += primeNumber[divisorIndex] + primeNumber[divisorIndex];
          }
          if (multiples[divisorIndex] == possiblePrime) {
            isValidPrime = false;
          }
          divisorIndex++;
        }
      } while (!isValidPrime);
      primeIndex++;
      primeNumber[primeIndex] = possiblePrime;
    }
    pageNumber = 1;
    pageOffset = 1;
    while (pageOffset <= upperLimit) {
      console.log("Page ", pageNumber);
      for (
        rowOffset = pageOffset;
        rowOffset <= pageOffset + rowPage - 1;
        rowOffset++
      ) {
        let aux = [];
        for (column = 0; column <= columnPage - 1; column++) {
          if (rowOffset + column * rowPage <= upperLimit) {
              aux.push(primeNumber[rowOffset + column * rowPage]);
          }
        }
        console.log(aux.join('|'));
      }
      pageNumber++;
      pageOffset += rowPage * columnPage;
    }
  }
}

DoSomething.main([]);
