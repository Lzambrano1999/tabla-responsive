import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'informacion-cuentas',
    templateUrl: './informacion-cuentas.component.html',
    styleUrls: ['./informacion-cuentas.component.scss'],
})
export class InformacionCuentasComponent {
    constructor(
        private _router: Router,
        private _ActiveRoute: ActivatedRoute,
    ) { }

    public data: any = {
        "seguros": [],
        "tarjetas": [
            {
              "cuentas": "Cuenta1",
              "principalAdicional": "Principal",
              "identificacion": "ID001",
              "fchExpiracion": "12/08/2025",
              "fchApertura": "05/03/2019",
              "tarjeta": "Tarjeta1",
              "cupo": "1000",
              "disponible": "500"
            },
            {
              "cuentas": "Cuenta2",
              "principalAdicional": "Adicional",
              "identificacion": "ID002",
              "fchExpiracion": "24/11/2024",
              "fchApertura": "20/09/2020",
              "tarjeta": "Tarjeta2",
              "cupo": "2000",
              "disponible": "1500"
            },
            {
              "cuentas": "Cuenta3",
              "principalAdicional": "Principal",
              "identificacion": "ID003",
              "fchExpiracion": "05/06/2023",
              "fchApertura": "10/12/2018",
              "tarjeta": "Tarjeta3",
              "cupo": "3000",
              "disponible": "2000"
            },
            {
              "cuentas": "Cuenta4",
              "principalAdicional": "Principal",
              "identificacion": "ID004",
              "fchExpiracion": "30/09/2022",
              "fchApertura": "15/07/2017",
              "tarjeta": "Tarjeta4",
              "cupo": "5000",
              "disponible": "4000"
            },
            {
              "cuentas": "Cuenta5",
              "principalAdicional": "Adicional",
              "identificacion": "ID005",
              "fchExpiracion": "18/12/2026",
              "fchApertura": "03/02/2021",
              "tarjeta": "Tarjeta5",
              "cupo": "4000",
              "disponible": "3000"
            }
          ]
          ,
        "cuentas": [    
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 536,
            "concesion": 1,
            "vencimiento": "3/10/2023",
            "valorPendiente": 45495.26,
            "porConfirmar": 5571.23,
            "saldoTotal": 37248.33,
            "efectivo": 17226.42,
            "tip": "CC"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 827,
            "concesion": 6,
            "vencimiento": "14/3/2024",
            "valorPendiente": 30755.54,
            "porConfirmar": 3075.86,
            "saldoTotal": 69261.94,
            "efectivo": 9467.18,
            "tip": "PZ"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 481,
            "concesion": 8,
            "vencimiento": "12/8/2024",
            "valorPendiente": 23909.94,
            "porConfirmar": 6369.73,
            "saldoTotal": 88124.41,
            "efectivo": 17899.32,
            "tip": "AH"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 911,
            "concesion": 1,
            "vencimiento": "6/12/2023",
            "valorPendiente": 26267.19,
            "porConfirmar": 5673.57,
            "saldoTotal": 76795.26,
            "efectivo": 11228.98,
            "tip": "AM"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 671,
            "concesion": 2,
            "vencimiento": "1/10/2023",
            "valorPendiente": 11022.65,
            "porConfirmar": 8985.53,
            "saldoTotal": 61155.38,
            "efectivo": 19722.34,
            "tip": "EQ"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 528,
            "concesion": 5,
            "vencimiento": "11/8/2023",
            "valorPendiente": 38113.47,
            "porConfirmar": 7602.59,
            "saldoTotal": 60912.51,
            "efectivo": 12418.21,
            "tip": "CC"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 813,
            "concesion": 6,
            "vencimiento": "3/12/2023",
            "valorPendiente": 30482.82,
            "porConfirmar": 5425.51,
            "saldoTotal": 51132.18,
            "efectivo": 9448.59,
            "tip": "EH"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 138,
            "concesion": 2,
            "vencimiento": "6/7/2023",
            "valorPendiente": 31605.34,
            "porConfirmar": 9058.14,
            "saldoTotal": 59246.93,
            "efectivo": 11223.08,
            "tip": "AH"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 451,
            "concesion": 10,
            "vencimiento": "1/2/2024",
            "valorPendiente": 45978.49,
            "porConfirmar": 9269.66,
            "saldoTotal": 86643.23,
            "efectivo": 14260.64,
            "tip": "PZ"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 822,
            "concesion": 1,
            "vencimiento": "12/5/2024",
            "valorPendiente": 33150.54,
            "porConfirmar": 9595.05,
            "saldoTotal": 69589.33,
            "efectivo": 19101.14,
            "tip": "EQ"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 813,
            "concesion": 4,
            "vencimiento": "5/11/2023",
            "valorPendiente": 17625.19,
            "porConfirmar": 5593.74,
            "saldoTotal": 72855.05,
            "efectivo": 15527.55,
            "tip": "AM"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 737,
            "concesion": 7,
            "vencimiento": "4/12/2023",
            "valorPendiente": 12581.43,
            "porConfirmar": 9771.38,
            "saldoTotal": 27316.76,
            "efectivo": 19415.47,
            "tip": "EH"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 331,
            "concesion": 7,
            "vencimiento": "20/11/2023",
            "valorPendiente": 41772.43,
            "porConfirmar": 3349.44,
            "saldoTotal": 91359.05,
            "efectivo": 11480.17,
            "tip": "CC"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 564,
            "concesion": 1,
            "vencimiento": "23/10/2023",
            "valorPendiente": 31561.78,
            "porConfirmar": 3240.27,
            "saldoTotal": 70604.14,
            "efectivo": 11685.85,
            "tip": "AH"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 666,
            "concesion": 5,
            "vencimiento": "5/8/2024",
            "valorPendiente": 43237.15,
            "porConfirmar": 3891.19,
            "saldoTotal": 85564.07,
            "efectivo": 15438.63,
            "tip": "PZ"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 288,
            "concesion": 3,
            "vencimiento": "14/10/2024",
            "valorPendiente": 21022.67,
            "porConfirmar": 3072.06,
            "saldoTotal": 45310.57,
            "efectivo": 17927.28,
            "tip": "CC"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 398,
            "concesion": 9,
            "vencimiento": "13/9/2023",
            "valorPendiente": 31985.45,
            "porConfirmar": 7769.44,
            "saldoTotal": 64987.26,
            "efectivo": 14799.17,
            "tip": "AM"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 882,
            "concesion": 2,
            "vencimiento": "4/3/2024",
            "valorPendiente": 33086.27,
            "porConfirmar": 9399.07,
            "saldoTotal": 84068.67,
            "efectivo": 16578.29,
            "tip": "PZ"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 912,
            "concesion": 5,
            "vencimiento": "18/3/2024",
            "valorPendiente": 13386.79,
            "porConfirmar": 7674.54,
            "saldoTotal": 59498.33,
            "efectivo": 17860.18,
            "tip": "EH"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 988,
            "concesion": 6,
            "vencimiento": "14/1/2024",
            "valorPendiente": 41394.21,
            "porConfirmar": 6637.94,
            "saldoTotal": 95566.67,
            "efectivo": 10538.89,
            "tip": "EQ"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 611,
            "concesion": 9,
            "vencimiento": "5/5/2024",
            "valorPendiente": 30228.57,
            "porConfirmar": 9843.64,
            "saldoTotal": 95405.33,
            "efectivo": 12490.02,
            "tip": "AM"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 866,
            "concesion": 6,
            "vencimiento": "15/10/2023",
            "valorPendiente": 37694.6,
            "porConfirmar": 8993.91,
            "saldoTotal": 77455.32,
            "efectivo": 18851.79,
            "tip": "CC"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 345,
            "concesion": 4,
            "vencimiento": "18/10/2023",
            "valorPendiente": 20634.61,
            "porConfirmar": 9171.88,
            "saldoTotal": 62829.36,
            "efectivo": 13213.54,
            "tip": "AH"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 394,
            "concesion": 2,
            "vencimiento": "3/8/2024",
            "valorPendiente": 30340.56,
            "porConfirmar": 9810.32,
            "saldoTotal": 77817.47,
            "efectivo": 14001.81,
            "tip": "AM"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 388,
            "concesion": 9,
            "vencimiento": "28/11/2024",
            "valorPendiente": 25606.81,
            "porConfirmar": 8945.14,
            "saldoTotal": 55779.36,
            "efectivo": 13016.25,
            "tip": "CC"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 509,
            "concesion": 8,
            "vencimiento": "20/7/2023",
            "valorPendiente": 20415.1,
            "porConfirmar": 5516.23,
            "saldoTotal": 78849.56,
            "efectivo": 12516.18,
            "tip": "PZ"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 422,
            "concesion": 10,
            "vencimiento": "23/5/2024",
            "valorPendiente": 20316.89,
            "porConfirmar": 5645.9,
            "saldoTotal": 47822.46,
            "efectivo": 12098.1,
            "tip": "EQ"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 383,
            "concesion": 4,
            "vencimiento": "6/4/2024",
            "valorPendiente": 49767.01,
            "porConfirmar": 5410.45,
            "saldoTotal": 73605.88,
            "efectivo": 17242.77,
            "tip": "EH"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 512,
            "concesion": 2,
            "vencimiento": "10/3/2024",
            "valorPendiente": 31529.46,
            "porConfirmar": 9952.27,
            "saldoTotal": 72415.64,
            "efectivo": 12907.63,
            "tip": "AH"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 399,
            "concesion": 3,
            "vencimiento": "26/11/2024",
            "valorPendiente": 46557.79,
            "porConfirmar": 3173.88,
            "saldoTotal": 63472.65,
            "efectivo": 15489.56,
            "tip": "PZ"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 168,
            "concesion": 8,
            "vencimiento": "8/2/2024",
            "valorPendiente": 48409.37,
            "porConfirmar": 5427.84,
            "saldoTotal": 75498.8,
            "efectivo": 12255.51,
            "tip": "AM"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 677,
            "concesion": 3,
            "vencimiento": "2/10/2023",
            "valorPendiente": 33971.25,
            "porConfirmar": 4566.02,
            "saldoTotal": 93561.51,
            "efectivo": 17860.35,
            "tip": "CC"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 557,
            "concesion": 9,
            "vencimiento": "7/2/2024",
            "valorPendiente": 11509.68,
            "porConfirmar": 7226.15,
            "saldoTotal": 95270.48,
            "efectivo": 13058.33,
            "tip": "PZ"
            },
            {
            "masa": "ACT",
            "mtcuenta":"654651",
            "clkRelacion": 211,
            "concesion": 5,
            "vencimiento": "11/6/2024",
            "valorPendiente": 30433.14,
            "porConfirmar": 7627.9,
            "saldoTotal": 50651.93,
            "efectivo": 12490.32,
            "tip": "EQ"
            },
            {
            "masa": "PAS",
            "mtcuenta":"654651",
            "clkRelacion": 425,
            "concesion": 10,
            "vencimiento": "10/9/2024",
            "valorPendiente": 27527.3,
            "porConfirmar": 9952.46,
            "saldoTotal": 63822.19,
            "efectivo": 11108.75,
            "tip": "EH"
            },
            {
            "masa": "CON",
            "mtcuenta":"654651",
            "clkRelacion": 877,
            "concesion": 6,
            "vencimiento": "25/3/2024",
            "valorPendiente": 25825.62,
            "porConfirmar": 9907.0,
            "saldoTotal": 62909.74,
            "efectivo": 15691.21,
            "tip": "AH"
            }
        ]
    };
    public identificacion: string = '';

    public tarjetas     : any[] = [];
    public prestamos    : any[] = [];
    public otrosActivos : any[] = [];

    public cuentas      : any[] = [];
    public inversiones  : any[] = [];
    public otrosPasivos : any[] = [];

    public seguros      : any[] = [];
    public asistencias  : any[] = [];
    public contingentes : any[] = [];

    ngOnInit() {
      this.agruparValores();
    }
    
    async obtenerInformacionCuentas( identificacion: string ) {
        

    }

    agruparValores() {
        this.tarjetas = this.data.tarjetas;
        this.prestamos = this.data.cuentas.filter( (cuenta: any)=> cuenta.masa == 'ACT' && "|EQ|EH|".includes("|"+cuenta.tip+"|",0));
        this.otrosActivos = this.data.cuentas.filter( (cuenta: any)=> cuenta.masa == 'ACT' && !"|EQ|EH|".includes("|"+cuenta.tip+"|",0));

        this.cuentas = this.data.cuentas.filter( (cuenta: any)=> cuenta.masa == 'PAS' && "|AH|CC|AM||".includes("|"+cuenta.tip+"|",0) );
        this.inversiones = this.data.cuentas.filter( (cuenta: any)=> cuenta.masa == 'PAS' && "|PZ|".includes("|"+cuenta.tip+"|",0) );
        this.otrosPasivos = this.data.cuentas.filter( (cuenta: any)=> cuenta.masa == 'PAS' && !"|AH|CC|AM|PZ|".includes("|"+cuenta.tip+"|",0) );

        this.seguros = this.data.seguros;
        this.contingentes = this.data.cuentas.filter( (cuenta: any)=> cuenta.masa == 'CON' );
    }

    nombreTarjeta( tarjeta: string ) {
        return "XXXXXX";
    }

    enmascararTipo( masa: string, tipo: string ) {
        let tipoEnmascarado = "TIPO";
        
       

        return tipoEnmascarado;
    }

    enmascararRelacion( relacion: string ) {
        return "SI";
    }

    enmascararFecha( fecha: string ) {
        let fechaFormateada = '';
        fecha = fecha.toString();

        if (fecha !== null && fecha.trim() !== '' && fecha !== '0' ) {
            const anio = fecha.slice(0, 4);
            const mes = fecha.slice(4, 6);
            const dia = fecha.slice(6);
    
            fechaFormateada = `${dia}/${mes}/${anio}`;
        }

       return fechaFormateada; 
    }

    obtenerTotalSeccion( seccion: string, grupo?: string): (number|string)[] {
        
        let total: (number|string)[] = [0, 0, 0];

        if( seccion == 'activos' ) {
            let sumPrestamosA = 0, sumTarjetasA = 0, sumOtrosActivosA;
            let sumPrestamosB = 0, sumTarjetasB = 0, sumOtrosActivosB;

            sumTarjetasA = this.tarjetas.reduce( (total, tarjeta) => total + Number(tarjeta.cupo) , 0);
            sumTarjetasB = this.tarjetas.reduce( (total, tarjeta) => total + Number(tarjeta.disponible) , 0);

            sumPrestamosA = this.prestamos.reduce( (total, prestamo) => total + Number(prestamo.saldoTotal) , 0);
            sumPrestamosB = this.prestamos.reduce( (total, prestamo) => total + Number(prestamo.efectivo) , 0);

            sumOtrosActivosA = this.otrosActivos.reduce( (total, otros) => total + Number(otros.saldoTotal) , 0);
            sumOtrosActivosB = this.otrosActivos.reduce( (total, otros) => total + Number(otros.efectivo) , 0);

            switch (grupo) {
                case 'tarjeta':
                    total = [
                        sumTarjetasA.toLocaleString("en-US"),
                        sumTarjetasB.toLocaleString("en-US")
                    ]
                    break;
                case 'presatamo':
                    total= [
                        sumPrestamosA.toLocaleString("en-US"),
                        sumPrestamosB.toLocaleString("en-US")
                    ] 
                    break;
                case 'otros':
                    total= [
                        sumOtrosActivosA.toLocaleString("en-US"),
                        sumOtrosActivosB.toLocaleString("en-US")
                    ]
                    break;
                default:
                    total = [
                        (sumPrestamosA + sumTarjetasA).toLocaleString("en-US"),
                        (sumPrestamosB + sumTarjetasB).toLocaleString("en-US")
                    ]
                    break;
            }
        }
        
        if( seccion == 'pasivos' ) {
            let sumCuentasA = 0, sumInversionesA = 0, sumOtrosPasivosA = 0;
            let sumCuentasB = 0, sumInversionesB = 0, sumOtrosPasivosB = 0;

            sumCuentasA = this.cuentas.reduce( (total, cuenta) => total + Number(cuenta.saldoTotal) , 0);
            sumCuentasB = this.cuentas.reduce( (total, cuenta) => total + Number(cuenta.efectivo) , 0);


            sumInversionesA = this.inversiones.reduce( (total, inversion) => total + Number(inversion.saldoTotal) , 0);
            sumInversionesB = this.inversiones.reduce( (total, inversion) => total + Number(inversion.efectivo) , 0);

            sumOtrosPasivosA = this.otrosPasivos.reduce( (total, otros) => total + Number(otros.saldoTotal) , 0);
            sumOtrosPasivosB = this.otrosPasivos.reduce( (total, otros) => total + Number(otros.efectivo) , 0);

            switch (grupo) {
                case 'cuentas':
                    total = [
                        sumCuentasA.toLocaleString("en-US"),
                        sumCuentasB.toLocaleString("en-US")
                    ]
                    break;
                case 'inversiones':
                    total= [
                        sumInversionesA.toLocaleString("en-US"),
                        sumInversionesB.toLocaleString("en-US")
                    ] 
                    break;
                case 'otros':
                    total= [
                        sumOtrosPasivosA.toLocaleString("en-US"),
                        sumOtrosPasivosB.toLocaleString("en-US")
                    ]
                    break;
                default:
                    total = [
                        (sumCuentasA + sumInversionesA).toLocaleString("en-US"),
                        (sumCuentasB + sumInversionesB).toLocaleString("en-US")
                    ]
                    break;
            }
        }

        if( seccion == 'seguros' ) {
            let sumSegurosA = 0, sumContingentesA = 0;
            let sumSegurosB = 0, sumContingentesB = 0;

            sumSegurosA = this.seguros.reduce( (total, seguro) => total + Number(seguro.valorAsegurado) , 0);
            sumSegurosB = this.seguros.reduce( (total, seguro) => total + Number(seguro.primaTotal) , 0);

            sumContingentesA = this.contingentes.reduce( (total, contingente) => total + Number(contingente.saldoTotal) , 0);
            sumContingentesB = this.contingentes.reduce( (total, contingente) => total + Number(contingente.efectivo) , 0);

            if( grupo ) {
                total = [
                    grupo == 'seguros' ? sumSegurosA.toLocaleString("en-US") : sumContingentesA.toLocaleString("en-US"),
                    grupo == 'seguros' ? sumSegurosB.toLocaleString("en-US") : sumContingentesB.toLocaleString("en-US")
                ]
            }else {
                total = [
                    (sumSegurosA + sumContingentesA).toLocaleString("en-US"),
                    (sumSegurosB + sumContingentesB).toLocaleString("en-US")
                ]
            }
        }

        return total;
    }

    verDetalle( cuenta: any, grupo: string ) {

        this._router.navigate(['/detalle-cuentas'], { queryParams: { grupo } });
    }

    obtenerNumeroFormateado( numero: string ) {
        const formatoNumerico = Number(numero);
        return formatoNumerico.toLocaleString("en-US");
    }

    truncarTexto( texto: string, longitud: number ) {
        let textoTruncado: string = texto;
        if(texto) {
            if (texto.length > longitud) {
                textoTruncado = texto.slice(0, longitud);
                textoTruncado += '...';
            }
        }

        return textoTruncado;
    }

    enmascararNombreSeguro( seguro: string ) {
        let nombreSeguro: string = seguro;

        if (seguro) {
            if (seguro.split('-')[0]) {
                nombreSeguro = seguro.split('-')[0];
            }
        }

        return nombreSeguro;
    }
}