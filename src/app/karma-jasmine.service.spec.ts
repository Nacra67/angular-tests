import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  //restar
  it('debería restar dos números correctamente', () => {
    const resultado = service.restar(2, 3);
    expect(resultado).toBe(-1);
  });

  it('debería restar números negativos correctamente', () => {
    const resultado = service.restar(-5, -3);
    expect(resultado).toBe(-2);
  });

  it('debería restar un número positivo y un número negativo correctamente', () => {
    const resultado = service.restar(10, -5);
    expect(resultado).toBe(15);
  });

  //multiplicar
  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });

  it('debería multiplicar números negativos correctamente', () => {
    const resultado = service.multiplicar(-5, -3);
    expect(resultado).toBe(15);
  });

  it('debería multiplicar un número positivo y un número negativo correctamente', () => {
    const resultado = service.multiplicar(10, -5);
    expect(resultado).toBe(-50);
  });

  //dividir
  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(2, 3);
    expect(resultado).toBe(2 / 3);
  });

  it('debería dividir números negativos correctamente', () => {
    const resultado = service.dividir(-5, -3);
    expect(resultado).toBe(5 / 3);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(10, -5);
    expect(resultado).toBe(-2);
  });
  //PALINDROMOS
  it('deberia decir si ava es palindromo o no', () => {
    const resultado = service.esPalindromo("ava")
    expect(resultado).toBe(true)
  })
  it('deberia decir si patata es palindromo o no', () => {
    const resultado = service.esPalindromo("patata")
    expect(resultado).toBe(false)
  })

  // PARES
  it('deberia decir si 7 es par', () => {
    const resultado = service.esPar(7)
    expect(resultado).toBe(false)
  })
  it('deberia decir si 6 es par', () => {
    const resultado = service.esPar(6)
    expect(resultado).toBe(true)
  })
  it('deberia decir si -4 es par', () => {
    const resultado = service.esPar(-4)
    expect(resultado).toBe(true)
  })
  //FACTORIAL
  it('deberia calcular el factorial de un numero positivo', () => {
    const resultado = service.factorial(4)
    expect(resultado).toBe(24)
  })
  it('deberia calcular el factorial de un numero positivo', () => {
    const resultado = service.factorial(5)
    expect(resultado).toBe(120)
  })
  it('deberia calcular el factorial de 0', () => {
    const resultado = service.factorial(0)
    expect(resultado).toBe(1)
  })
  //PRIMOS
  it('deberia decir true si es primo con un primo', () => {
    const resultado = service.primos(13)
    expect(resultado).toBe(true)
  })
  it('deberia decir false con 4', () => {
    const resultado = service.primos(4)
    expect(resultado).toBe(false)
  })
  it('deberia decir true con 211', () => {
    const resultado = service.primos(211)
    expect(resultado).toBe(true)
  })
  //Mayusculas
  it('deberia devolver la palabla en mayusculas para palabra en minusculas', () => {
    const resultado = service.mayusculas("pan")
    expect(resultado).toBe("PAN")
  })
  it('deberia devolver la palabla en mayusculas para palabra en mayusculas', () => {
    const resultado = service.mayusculas("LANGOSTA")
    expect(resultado).toBe("LANGOSTA")
  })
  it('deberia devolver la palabla en mayusculas para palabra en mixta', () => {
    const resultado = service.mayusculas("Atun")
    expect(resultado).toBe("ATUN")
  })
  //MAXIMO
  it('deberia escoger el primer numero', () => {
    const resultado = service.maximo(5, 4)
    expect(resultado).toBe(5)
  })
  it('deberia escoger el segundo numero', () => {
    const resultado = service.maximo(3, 7)
    expect(resultado).toBe(7)
  })
  it('deberian ser iguales', () => {
    const resultado = service.maximo(6, 6)
    expect(resultado).toBe(6)
  })

  //Positivo?
  it('deberian dar un true con un positivo', () => {
    const resultado = service.positivo(5)
    expect(resultado).toBe(true)
  })
  it('deberian dar un false con un negativo', () => {
    const resultado = service.positivo(-5)
    expect(resultado).toBe(false)
  })
  it('deberian dar false con0, no?', () => {
    const resultado = service.positivo(0)
    expect(resultado).toBe(false)
  })

  //numero elementos array
  it('deberian decir 4 alementos en el array', () => {
    const array = [1, 2, 3, 4];
    const resultado = service.numeroElementos(array)
    expect(resultado).toBe(4)
  })
  it('deberian decir 4 alementos en el array', () => {
    const array = ["1", "2", "3", "4", "5"];
    const resultado = service.numeroElementos(array)
    expect(resultado).toBe(5)
  })
  //contiene substring
  it('deberian encontrar "estas" en la cadena', () => {
    const cadena = "Hola, como estas?";
    const substring = "estas";
    const resultado = service.substring(cadena, substring);
    expect(resultado).toBe(true)
  })
  it('deberian no encontrar "estas" en la cadena', () => {
    const cadena = "Hola, como estoi?";
    const substring = "estas";
    const resultado = service.substring(cadena, substring);
    expect(resultado).toBe(false)
  })
  it('deberian no encontrar "Estas" en la cadena MAYUS', () => {
    const cadena = "Hola, como estas?";
    const substring = "Estas";
    const resultado = service.substring(cadena, substring);
    expect(resultado).toBe(false)
  })

  //Promedio array
  it('deberian calcular el primedio de un array de numeros', () => {
    const numeros = [5, 10, 15, 20];
    const resultado = service.promedio(numeros);
    expect(resultado).toBe(12.5)
  })

  //Array de Caracteres
  it('deveria dividir string en array', () => {
    const cadena = "Hola";
    const array = ["H", "o", "l", "a"]
    const resultado = service.convertirEnArray(cadena);
    expect(resultado).toEqual(array)
  })

  //suma digitos de un numero
  it('deveria sumar los digitos de un numero', () => {
    const resultado = service.sumaDigitos(12);
    expect(resultado).toEqual(3)
  })
  it('deveria dar NaN al intentar sumar los digitos de un numero negativo', () => {
    const resultado = service.sumaDigitos(-12);
    expect(resultado).toEqual(NaN)
  })
  it('deveria sumar los digitos de un numero mas largo', () => {
    const resultado = service.sumaDigitos(1232);
    expect(resultado).toEqual(8)
  })

  //Anagrama
  it('deveria true si es un anagrama', () => {
    const cadena1 = "aaa bbb"
    const cadena2 = "bababa"
    const resultado = service.anagrama(cadena1, cadena2);
    expect(resultado).toEqual(true)
  })
  it('deveria true a pesar de que no es un anagrama ERROR', () => {
    const cadena1 = "aaa bbb"
    const cadena2 = "bababaz"
    const resultado = service.anagrama(cadena1, cadena2);
    expect(resultado).toEqual(true)
  })
  it('deveria false si no es un anagrama', () => {
    const cadena1 = "aaa bbb"
    const cadena2 = "baccba"
    const resultado = service.anagrama(cadena1, cadena2);
    expect(resultado).toEqual(false)
  })

  //area poligono regular
  it('deveria area de poligono regular', () => {
    const resultado = service.areaPoligonoRegular(2, 2, 2);
    expect(resultado).toBe(4)
  })
  //Difrencia en dias
  it('deberia devolver la diferencia de dias entre 2 fechas', () => {
    const fechaInicial = new Date(2023, 0, 1); // 1 de enero de 2023
    const fechaFinal = new Date(2023, 1, 10); // 10 de febrero de 2023
    const resultado = service.calcularDias(fechaInicial, fechaFinal);
    expect(resultado).toBe(40);
  })
  it('deberia devolver la diferencia de dias entre 2 fechas', () => {
    const fechaInicial = new Date(2023, 2, 1); // 1 de enero de 2023
    const fechaFinal = new Date(2023, 1, 10); // 10 de febrero de 2023
    const resultado = service.calcularDias(fechaInicial, fechaFinal);
    expect(resultado).toBe(-19);
  })

});
