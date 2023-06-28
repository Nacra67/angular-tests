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
    if (numero < 2) {
      return false;
    }
  
    const limite = Math.ceil(Math.sqrt(numero));
  
    for (var i = 2; i <= limite; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;

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


//    Función para verificar si un número es positivo
positivo(numero: number): boolean {
  return numero > 0;
}

// Función para obtener el número de elementos en un array
numeroElementos(array: any[]): number {
  return array.length;
}

// Función para verificar si una cadena contiene un substring
substring(cadena: string, substring: string): boolean {
  return cadena.includes(substring);
}

// Función para obtener el promedio de un array de números
promedio(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }
  
  const suma = array.reduce((total, num) => total + num, 0);
  const promedio = suma / array.length;
  
  return promedio;
}

// Función para convertir una cadena en un array de caracteres
convertirEnArray(cadena: string): string[] {
  return Array.from(cadena);
}

// Función para calcular la suma de los dígitos de un número
sumaDigitos(numero: number): number {
  let suma = 0;
  // if (numero < 0){
  //   numero *= -1
  // }
  const numeroString = numero.toString();

  for (let i = 0; i < numeroString.length; i++) {
    suma += parseInt(numeroString[i]);
  }

  return suma;
}

// Función para verificar si una cadena es un anagrama de otra(mismas letras pero distintas posiciones)
anagrama(cadena1: string, cadena2: string): boolean {
  const cadena1SinEspacios = cadena1.split(' ').join('').toLowerCase();
  const cadena2SinEspacios = cadena2.split(' ').join('').toLowerCase();
  const array1 = Array.from(cadena1SinEspacios).sort();
  const array2 = Array.from(cadena2SinEspacios).sort();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}
// Función para calcular el área de un polígono regular(apotema, longitud_lado, numero_lados)
// Función para encontrar la moda (valor más frecuente) en un array de números
}
