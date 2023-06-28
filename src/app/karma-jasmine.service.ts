import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }
  restar(a: number, b: number): number {
    return a - b;
  }
  multiplicar(a: number, b: number): number {
    return a * b;
  }
  dividir(a: number, b: number): number {
    return a / b;
  }

  //   Función para verificar si un número es par
  esPar(a: number): boolean {
    return a % 2 == 0;
  }
  // Función para verificar si una cadena es un palíndromo
  esPalindromo(palabra: string): boolean {
    palabra = palabra.toLowerCase();
    return palabra === palabra.split('').reverse().join('');
  }
  // Función para calcular el factorial de un número
  factorial(numero: number): number {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }


}
