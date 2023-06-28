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
  // funcion apra saber si un numero es primo
  primos(numero: number): boolean {
    for (var i = 2; i <= numero / 2 + 2; i++) {

      if (i > numero / 2) {
        return true
      }
      if (numero % i == 0) {
        return false
      }
    }

  }
  //   Función para obtener el máximo de dos números
  maximo(a: number, b: number): number {
    if (a >= b) {
      return a
    }
    return b
  }

  // Función para convertir una cadena a mayúsculas
  mayusculas(texto: string): string {
    return texto.toUpperCase();
  }

}
