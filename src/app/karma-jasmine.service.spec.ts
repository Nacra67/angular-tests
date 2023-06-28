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
});
