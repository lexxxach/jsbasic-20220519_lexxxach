function factorial(n) {
  if (n != 0) {

    let coeff = n-1
    let result = n

    while (coeff) {
      result = result * coeff
      coeff--
    }

    return result
  }

 return 1
}
