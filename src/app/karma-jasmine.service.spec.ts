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
    expect(resultado).toBe(2/3);
  });

  it('debería dividir números negativos correctamente', () => {
    const resultado = service.dividir(-5, -3);
    expect(resultado).toBe(5/3);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(10, -5);
    expect(resultado).toBe(-2);
  });
  //PALINDROMOS
  it('deberia decir si ava es palindromo o no'), () =>{
    const resultado = service.esPalindromo("ava")
    expect(resultado).toBe(true)
  }
  it('deberia decir si patata es palindromo o no'), () =>{
    const resultado = service.esPalindromo("patata")
    expect(resultado).toBe(false)
  }

  // PARES
  it('deberia decir si 7 es par'), () =>{
    const resultado = service.esPar(7)
    expect(resultado).toBe(false)
  }
  it('deberia decir si 6 es par'), () =>{
    const resultado = service.esPar(6)
    expect(resultado).toBe(true)
  }
  it('deberia decir si -4 es par'), () =>{
    const resultado = service.esPar(-4)
    expect(resultado).toBe(true)
  }
  //FACTORIAL
  it('deberia calcular el factorial de un numero positivo'), () =>{
    const resultado = service.factorial(4)
    expect(resultado).toBe(24)
  }
  it('deberia calcular el factorial de un numero negativo'), () =>{
    const resultado = service.factorial(-5)
    expect(resultado).toBe(120)
  }
  it('deberia calcular el factorial de 0'), () =>{
    const resultado = service.factorial(0)
    expect(resultado).toBe(1)
  }
  

});
