import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;
  let debug: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarVehiculosComponent],
      imports: [
        CommonModule,
        HttpClientModule
      ],
      providers: [VehiculosService]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;

    // Crear 3 vehículos de prueba
    const vehiculos: Vehiculo[] = [
      new Vehiculo(1, 'Renault', 'Kangoo', 'VU Express', 2017, 93272, 'Blanco', 'https://example.com/renault.jpg'),
      new Vehiculo(2, 'Chevrolet', 'Spark', 'GT', 2019, 45000, 'Rojo', 'https://example.com/chevrolet.jpg'),
      new Vehiculo(3, 'Toyota', 'Corolla', 'LE', 2020, 30000, 'Negro', 'https://example.com/toyota.jpg')
    ];

    component.vehiculos = vehiculos;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with header and 3 rows', () => {
    const tableRows = debug.queryAll(By.css('table tbody tr'));
    expect(tableRows.length).toBe(3);
  });

  it('should have correct table headers', () => {
    const headers = debug.queryAll(By.css('table thead th'));
    expect(headers.length).toBe(4);
    expect(headers[0].nativeElement.textContent).toContain('#');
    expect(headers[1].nativeElement.textContent).toContain('Marca');
    expect(headers[2].nativeElement.textContent).toContain('Línea');
    expect(headers[3].nativeElement.textContent).toContain('Modelo');
  });

  it('should display correct vehicle data in each row', () => {
    const rows = debug.queryAll(By.css('table tbody tr'));
    
    // Verificar primera fila (Renault)
    const firstRow = rows[0].queryAll(By.css('td'));
    expect(firstRow[0].nativeElement.textContent).toContain('1');
    expect(firstRow[1].nativeElement.textContent).toContain('Renault');
    expect(firstRow[2].nativeElement.textContent).toContain('Kangoo');
    expect(firstRow[3].nativeElement.textContent).toContain('2017');

    // Verificar segunda fila (Chevrolet)
    const secondRow = rows[1].queryAll(By.css('td'));
    expect(secondRow[0].nativeElement.textContent).toContain('2');
    expect(secondRow[1].nativeElement.textContent).toContain('Chevrolet');
    expect(secondRow[2].nativeElement.textContent).toContain('Spark');
    expect(secondRow[3].nativeElement.textContent).toContain('2019');

    // Verificar tercera fila (Toyota)
    const thirdRow = rows[2].queryAll(By.css('td'));
    expect(thirdRow[0].nativeElement.textContent).toContain('3');
    expect(thirdRow[1].nativeElement.textContent).toContain('Toyota');
    expect(thirdRow[2].nativeElement.textContent).toContain('Corolla');
    expect(thirdRow[3].nativeElement.textContent).toContain('2020');
  });
});
