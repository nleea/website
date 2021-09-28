export const view: Element[] = [];

export interface dataI {
  materiaPrimaDirecta: number;
  manoDeObreDirecta: number;
  CIF: number;
  gastosDeVentas: number;
  gastosDeAbministracion: number;
  Financiamiento: number;
  unidadesProducidas: number;
  costoVenta: number;
  utilidad: number;
  costosDeProducion: () => number;
  costosPrimos: () => number;
  costosDeConversion: () => number;
  costosDeOperacion: () => number;
  precioVenta: () => number;
  costosTotal: () => number;
  costoUnitario: () => number;
}
export interface Uequivalentes {
  unidadesTerminadas: number;
  unidadesEnProceso: number;
  porcentajeDeAvanceMateriaPrima: number;
  porcentajeDeAvanceManoDeObra: number;
  porcentajeDeAvanceCIF: number;
  costoTotalDeMateriaPrima: number;
  costoTotalManoDeObra: number;
  costosTotalCIF: number;
  unidadesEquivalentesMateriaPrima: () => number;
  unidadesEquivalentesManoDeObra: () => number;
  unidadesEquivalentesCIF: () => number;
  unidadesEquivalentesAProductosMateriaPrima: () => number;
  unidadesEquivalentesAProductosManoDeObra: () => number;
  unidadesEquivalentesAProductosCIF: () => number;
  costoUnitarioDeMateriaPrima: () => number;
  costoUnitarioManodeobra: () => number;
  costosUnitariosCIF: () => number;
  costoUnitarioDelProceso: () => number;
  TotalInformeDeCostos: () => number;
}

export interface dataP {
  totalCIF: number;
  produccionJulio: number;
  produccionAgosto: number;
  produccionSeptiembre: number;
  materiaj: number;
  manoj: number;
  materiag: number;
  manog: number;
  materias: number;
  manos: number;
  Total: () => number;
  coeficienteCIF: () => number;
  CIFprorrateadosJ: () => number;
  CIFprorrateadosA: () => number;
  CIFprorrateadosS: () => number;
  costoTotalPj: () => number;
  costoTotalPa: () => number;
  costoTotalPs: () => number;
  costoUnitarioj: () => number;
  costoUnitarioa: () => number;
  costoUnitarios: () => number;
}

export interface dataE {
  MprecioReal: number;
  MprecioEstandar: number;
  McantidadReal: number;
  McantidadEstandar: number;
  OsalarioReal: number;
  OsalarioEstandar: number;
  OtiempoReal: number;
  OtiempoEstandar: number;
  SprecioReal: number;
  SprecioEstandar: number;
  ScantidadReal: number;
  ScantidadEstandar: number;
  Caplicado: number;
  Cpresupuestado: number;
  Creal: number;
  ChorasAplicadas: number;
  ChorasReales: number;
  CtasaVariables: number;
  CIreal: number;
  MPvariacionP: () => number;
  MPcantidad: () => number;
  MOsalario: () => number;
  MOtiempo: () => number;
  SDprecio: () => number;
  SDcantidad: () => number;
  CIFcapacidad: () => number;
  CIFpresupuesto: () => number;
  CIFeficiencia: () => number;
  CIFcantidad: () => number;
}

export interface dataDiAb {
  DmanodeObra: number;
  DmateriaPrima: number;
  Dcombustible: number;
  Dmantenimiento: number;
  Dluz: number;
  Dvario: number;
  Aimpuestos: number;
  Aseguros: number;
  Amateriales: () => number;
  AmanoDeObra: () => number;
  AcontrolDeCalidad: number;
  Amantenimiento: number;
  AmaquinariaEquipo: number;
  Acombustible: number;
  Amas: number;
  Total: () => number;
  ventasUnidades: () => number;
  modelproducidas: number;
  precio: number;
  totalNeto: () => number;
}

export interface FiVa {
  impuestos: number;
  seguro: number;
  MaterialesIndirectos: number;
  ManoDeObraIndirecta: number;
  ControlDeCalidad: number;
  Mantenimiento: number;
  MaquinariaEquipo: number;
  EnegiaElectrica: number;
  Combustible: number;
  TotalCostoFIjo: () => number;
  ManoDeObraDirecta: number;
  Impuestos: number;
  MantenuimientoyReparaciones: number;
  LuzEnergia: number;
  Vcombustible: number;
  Varios: number;
  TotalCostoVarible: () => number;
  TotalNeto: () => number;
  UnidadesProducidas: number;
}
export const dataFV: FiVa = {
  Combustible: 1050,
  ControlDeCalidad: 2850,
  EnegiaElectrica: 1200,
  ManoDeObraIndirecta: 2100,
  Mantenimiento: 1800,
  MaquinariaEquipo: 7500,
  MaterialesIndirectos: 4500,
  impuestos: 3000,
  seguro: 2100,
  TotalCostoFIjo: function () {
    return (
      this.Combustible +
      this.ControlDeCalidad +
      this.EnegiaElectrica +
      this.ManoDeObraIndirecta +
      this.Mantenimiento +
      this.MaquinariaEquipo +
      this.MaterialesIndirectos +
      this.impuestos +
      this.seguro
    );
  },
  Impuestos: 195844,
  LuzEnergia: 49756.08,
  ManoDeObraDirecta: 489610.01,
  MantenuimientoyReparaciones: 244805.26,
  Varios: 19584.42,
  Vcombustible: 97922.11,
  UnidadesProducidas: 1164600,
  TotalCostoVarible: function () {
    return (
      this.Impuestos +
      this.LuzEnergia +
      this.ManoDeObraDirecta +
      this.MantenuimientoyReparaciones +
      this.Varios +
      this.Vcombustible
    );
  },
  TotalNeto() {
    return (
      (this.TotalCostoFIjo() + this.TotalCostoVarible()) /
      this.UnidadesProducidas
    );
  },
};

export interface metodoPuntoAlto {
  CostoJulio: number;
  CostoAgosto: number;
  CostoSeptiembre: number;
  HorasJulio: number;
  HorasAgosto: number;
  HorasSeptiembre: number;
  Mayor: (type: string) => number;
  Menor: (type: string) => number;
  TasaVariable: () => number;
  NivelMasAlto: () => number;
  NivelMasBajo: () => number;
}
export const MetodoPuntoAlto: metodoPuntoAlto = {
  CostoJulio: 375000,
  CostoAgosto: 379500,
  CostoSeptiembre: 408500,
  HorasJulio: 155200.08,
  HorasAgosto: 155190,
  HorasSeptiembre: 179219.43,
  Mayor(type: string) {
    if (type === "costos") {
      return Math.max(this.CostoAgosto, this.CostoJulio, this.CostoSeptiembre);
    }
    return Math.max(this.HorasAgosto, this.HorasJulio, this.HorasSeptiembre);
  },
  Menor(type: string) {
    if (type === "costos") {
      return Math.min(this.CostoAgosto, this.CostoJulio, this.CostoSeptiembre);
    }
    return Math.min(this.HorasAgosto, this.HorasJulio, this.HorasSeptiembre);
  },
  TasaVariable() {
    let a = this.Mayor("costos") - this.Menor("costos");
    let b = this.Mayor("") - this.Menor("");
    return Number((a / b).toFixed(5));
  },
  NivelMasAlto() {
    return this.Mayor("costos") - this.TasaVariable() * this.Menor("costos");
  },
  NivelMasBajo() {
    return this.Mayor("") - this.TasaVariable() * this.Menor("");
  },
};

export interface MetodoDeMinimoI {
  CostoJulio: number;
  CostoAgosto: number;
  CostoSeptiembre: number;
  HorasJulio: number;
  HorasAgosto: number;
  HorasSeptiembre: number;
  CjulioXHjulio: () => number;
  CagostoXHagosto: () => number;
  CseptiembreXHseptiembre: () => number;
  CostoJulio2: () => number;
  CostoAgosto2: () => number;
  CostoSeptiembre2: () => number;
  HorasJulio2: () => number;
  HorasAgosto2: () => number;
  HorasSeptiembre2: () => number;
  TotalCostos: () => number;
  TotalHoras: () => number;
  TotalCXH: () => Number;
  TotalX2: () => number;
  TotalY2: () => number;
  OperacionX: () => number;
  OperacionY: () => number;
  OperacionXxY: () => number;
  TasaVariable: () => number;
  PorcionCosto: () => number;
  CoeficienteDeRelacion: () => number;
}

export const MetodoDeMinimo: MetodoDeMinimoI = {
  CostoJulio: MetodoPuntoAlto.CostoJulio,
  CostoAgosto: MetodoPuntoAlto.CostoAgosto,
  CostoSeptiembre: MetodoPuntoAlto.CostoSeptiembre,
  HorasJulio: MetodoPuntoAlto.HorasJulio,
  HorasAgosto: MetodoPuntoAlto.HorasAgosto,
  HorasSeptiembre: MetodoPuntoAlto.HorasSeptiembre,
  CostoJulio2() {
    return Math.pow(this.CostoJulio, 2);
  },
  CostoAgosto2() {
    return Math.pow(this.CostoAgosto, 2);
  },
  CostoSeptiembre2() {
    return Math.pow(this.CostoSeptiembre, 2);
  },
  CjulioXHjulio() {
    return Math.floor(this.CostoJulio * this.HorasJulio);
  },
  CagostoXHagosto() {
    return Math.floor(this.CostoAgosto * this.HorasAgosto);
  },
  CseptiembreXHseptiembre() {
    return Math.floor(this.CostoSeptiembre * this.HorasSeptiembre);
  },
  HorasJulio2() {
    return Math.pow(this.HorasJulio, 2);
  },
  HorasAgosto2() {
    return Math.pow(this.HorasAgosto, 2);
  },
  HorasSeptiembre2() {
    return Math.pow(this.HorasSeptiembre, 2);
  },
  TotalHoras() {
    return Math.floor(
      this.HorasJulio + this.HorasAgosto + this.HorasSeptiembre
    );
  },
  TotalCostos() {
    return Math.floor(
      this.CostoJulio + this.CostoAgosto + this.CostoSeptiembre
    );
  },
  TotalCXH() {
    return (
      this.CjulioXHjulio() +
      this.CagostoXHagosto() +
      this.CseptiembreXHseptiembre()
    );
  },
  TotalX2() {
    return Math.floor(
      this.HorasJulio + this.HorasAgosto + this.HorasSeptiembre
    );
  },
  TotalY2() {
    return Math.floor(
      this.CostoJulio + this.CostoAgosto + this.CostoSeptiembre
    );
  },
  OperacionX() {
    return this.TotalX2() - Math.pow(this.TotalHoras(), 2) / 3;
  },
  OperacionY() {
    return this.TotalY2() - Math.pow(this.TotalCostos(), 2) / 3;
  },
  OperacionXxY() {
    let a = Number(this.TotalCXH());
    let b = (this.TotalHoras() * this.TotalCostos()) / 3;
    return a - b;
  },
  TasaVariable() {
    return Number((this.OperacionXxY() / this.OperacionX()).toFixed(5));
  },
  PorcionCosto() {
    return Number(
      (
        this.TotalCostos() / 3 -
        this.TasaVariable() * (this.TotalHoras() / 3)
      ).toFixed(3)
    );
  },
  CoeficienteDeRelacion() {
    return (
      this.OperacionXxY() / Math.sqrt(this.TotalHoras() * this.TotalCostos())
    );
  },
};

export interface IestadoCV {
  InvInicialMateria: number;
  ComprasMateriaPrima: number;
  TotalMateriaPrimaDis: () => number;
  InventarioFinalMateriaPrima: number;
  MateriaPrimaUtilizada: () => number;
  ManoDeObra: number;
  CostoPrimo: () => number;
  CostosIndirectosDeFabricacion: number;
  TotalAplicadoAlaProduccion: () => number;
  InventarioIniProductosPro: number;
  Total: () => number;
  InventarioFinalDeProductos: number;
  CostoDeProduccion: () => number;
  ProductosTerminadosIni: number;
  ProductosTerminadosFin: number;
  TotalV: () => number;
  COstosPyV: () => number;
}

export const EstadoCV: IestadoCV = {
  InvInicialMateria: 204600,
  ComprasMateriaPrima: 1079190.5,
  TotalMateriaPrimaDis() {
    return Math.floor(this.InvInicialMateria + this.ComprasMateriaPrima);
  },
  InventarioFinalMateriaPrima: 119190.5,
  MateriaPrimaUtilizada() {
    return Math.floor(
      this.TotalMateriaPrimaDis() + this.InventarioFinalMateriaPrima
    );
  },
  ManoDeObra: 489610.01,
  CostoPrimo() {
    return Math.floor(this.MateriaPrimaUtilizada() + this.ManoDeObra);
  },
  CostosIndirectosDeFabricacion: 26100,
  TotalAplicadoAlaProduccion() {
    return Math.floor(this.CostoPrimo() + this.CostosIndirectosDeFabricacion);
  },
  InventarioIniProductosPro: 0,
  Total() {
    return Math.floor(
      this.TotalAplicadoAlaProduccion() + this.InventarioIniProductosPro
    );
  },
  InventarioFinalDeProductos: 0,
  CostoDeProduccion() {
    return Math.floor(this.Total() - this.InventarioFinalDeProductos);
  },
  ProductosTerminadosIni: 603500,
  ProductosTerminadosFin: 204500,
  TotalV() {
    return Math.floor(this.CostoDeProduccion() + this.ProductosTerminadosIni);
  },
  COstosPyV() {
    return Math.floor(this.TotalV() - this.ProductosTerminadosFin);
  },
};

export interface Idata {
  materiaPrimaDirecta: number;
  manoDeObreDirecta: number;
  CIF: number;
  gastosDeVentas: number;
  gastosDeAbministracion: number;
  Financiamiento: number;
  unidadesProducidas: number;
  costoVenta: number;
  utilidad: number;
  costosDeProducion: () => number;
  costosPrimos: () => number;
  costosDeConversion: () => number;
  costosDeOperacion: () => number;
  precioVenta: () => number;
  costosTotal: () => number;
  costoUnitario: () => number;
  unidadesTerminadas: number;
  unidadesEnProceso: number;
  porcentajeDeAvanceMateriaPrima: number;
  porcentajeDeAvanceManoDeObra: number;
  porcentajeDeAvanceCIF: number;
  unidadesEquivalentesMateriaPrima: () => number;
  unidadesEquivalentesManoDeObra: () => number;
  unidadesEquivalentesCIF: () => number;
  unidadesEquivalentesAProductosMateriaPrima: () => number;
  unidadesEquivalentesAProductosManoDeObra: () => number;
  unidadesEquivalentesAProductosCIF: () => number;
  costoUnitarioDeMateriaPrima: () => number;
  costoUnitarioManodeobra: () => number;
  costosUnitariosCIF: () => number;
  costoUnitarioDelProceso: () => number;
  TotalInformeDeCostos: () => number;
  produccionJulio: number;
  produccionAgosto: number;
  produccionSeptiembre: number;
  materiaj: number;
  manoj: number;
  materiag: number;
  manog: number;
  materias: number;
  manos: number;
  TotalProrrateo: () => number;
  coeficienteCIF: () => number;
  CIFprorrateadosJ: () => number;
  CIFprorrateadosA: () => number;
  CIFprorrateadosS: () => number;
  costoTotalPj: () => number;
  costoTotalPa: () => number;
  costoTotalPs: () => number;
  costoUnitarioj: () => number;
  costoUnitarioa: () => number;
  costoUnitarios: () => number;
  MprecioReal: number;
  MprecioEstandar: number;
  OsalarioEstandar: number;
  OtiempoReal: number;
  OtiempoEstandar: number;
  SprecioReal: number;
  SprecioEstandar: number;
  ScantidadReal: number;
  ScantidadEstandar: number;
  Cpresupuestado: number;
  ChorasAplicadas: number;
  ChorasReales: number;
  CtasaVariables: number;
  CIreal: number;
  Creal: number;
  MPvariacionP: () => number;
  MPcantidad: () => number;
  MOsalario: () => number;
  MOtiempo: () => number;
  SDprecio: () => number;
  SDcantidad: () => number;
  CIFcapacidad: () => number;
  CIFpresupuesto: () => number;
  CIFeficiencia: () => number;
  CIFcantidad: () => number;
  Dcombustible: number;
  Dmantenimiento: number;
  Dluz: number;
  Dvario: number;
  Dimpuesto: number;
  Aimpuestos: number;
  Aseguros: number;
  Amateriales: () => number;
  AmanoDeObra: () => number;
  AcontrolDeCalidad: number;
  Amantenimiento: number;
  AmaquinariaEquipo: number;
  Acombustible: number;
  ventasUnidades: () => number;
  modelproducidas: number;
  precio: number;
  totalNeto: () => number;
  MaterialesIndirectos: number;
  ManoDeObraIndirecta: number;
  EnegiaElectrica: number;
  TotalCostoFIjo: () => number;
  TotalCostoVarible: () => number;
  TotalNeto: () => number;
  InvInicialMateria: number;
  TotalMateriaPrimaDis: () => number;
  InventarioFinalMateriaPrima: number;
  MateriaPrimaUtilizada: () => number;
  TotalAplicadoAlaProduccion: () => number;
  InventarioIniProductosPro: number;
  Total: () => number;
  InventarioFinalDeProductos: number;
  CostoDeProduccion: () => number;
  ProductosTerminadosIni: number;
  ProductosTerminadosFin: number;
  TotalV: () => number;
  COstosPyV: () => number;
  TotalPasivoCorriente: () => number;
  patrimonio: () => number;
  ventas: number;
}
export const data: Idata = {
  materiaPrimaDirecta: 51242400,
  manoDeObreDirecta: 489610.01,
  CIF: 1096726.42,
  gastosDeVentas: 7600,
  gastosDeAbministracion: 7600,
  Financiamiento: 0,
  costoVenta: 65128000,
  utilidad: 0,
  unidadesProducidas: 1369100,
  unidadesTerminadas: 204600,
  unidadesEnProceso: 1164600,
  porcentajeDeAvanceMateriaPrima: 100,
  porcentajeDeAvanceManoDeObra: 100,
  porcentajeDeAvanceCIF: 100,
  produccionJulio: 16368000,
  produccionAgosto: 16451600,
  produccionSeptiembre: 18422800,
  materiaj: 372000,
  manoj: 155200.08,
  materiag: 373900,
  manog: 155190,
  materias: 418700,
  manos: 179219.43,
  MprecioReal: 44,
  MprecioEstandar: 0,
  OsalarioEstandar: 0,
  OtiempoReal: 2.520602,
  OtiempoEstandar: 0,
  SprecioReal: 0,
  SprecioEstandar: 0,
  ScantidadReal: 0,
  ScantidadEstandar: 0,
  Cpresupuestado: 0,
  ChorasAplicadas: 0,
  ChorasReales: 2.520602,
  CtasaVariables: 0,
  Creal: 0,
  CIreal: 0,
  Dcombustible: 97922.11,
  Dmantenimiento: 244805.26,
  Dluz: 49756.08,
  Dvario: 19584.42,
  Acombustible: 1050,
  Dimpuesto: 3000,
  Aimpuestos: 195844,
  AcontrolDeCalidad: 2850,
  Amantenimiento: 1800,
  AmaquinariaEquipo: 7500,
  Aseguros: 2100,
  modelproducidas: 1164600,
  precio: 56,
  MaterialesIndirectos: 4500,
  ManoDeObraIndirecta: 2100,
  EnegiaElectrica: 1200,
  InvInicialMateria: 204600,
  costosDeProducion: function () {
    return Number(
      (this.manoDeObreDirecta + this.materiaPrimaDirecta + this.CIF).toFixed(3)
    );
  },
  costosPrimos: function () {
    return Number(
      (this.materiaPrimaDirecta + this.manoDeObreDirecta).toFixed(3)
    );
  },
  precioVenta() {
    return Number(Math.floor(1 - this.utilidad) / 100);
  },
  costosDeConversion: function () {
    return Number((this.manoDeObreDirecta + this.CIF).toFixed(3));
  },
  costosDeOperacion: function () {
    return Number(
      (
        this.gastosDeVentas +
        this.Financiamiento +
        this.gastosDeAbministracion
      ).toFixed(3)
    );
  },
  costosTotal: function () {
    return Number(
      (this.costosDeProducion() + this.costosDeOperacion()).toFixed(3)
    );
  },
  costoUnitario: function () {
    return Number((this.costosTotal() / this.unidadesProducidas).toFixed(3));
  },
  TotalProrrateo: function () {
    return (
      this.manoj +
      this.manog +
      this.manos +
      this.materiaj +
      this.materiag +
      this.materias
    );
  },
  coeficienteCIF: function () {
    if (this.CIF == 0) {
      return 0;
    }
    return Number(this.CIF / this.Total());
  },
  CIFprorrateadosJ: function () {
    return Math.floor((this.materiaj + this.manoj) * this.coeficienteCIF());
  },
  CIFprorrateadosA: function () {
    return Math.floor((this.materiag + this.manog) * this.coeficienteCIF());
  },
  CIFprorrateadosS: function () {
    return Math.floor((this.materias + this.manos) * this.coeficienteCIF());
  },
  costoTotalPj: function () {
    return Math.floor(this.materiaj + this.manoj + this.CIFprorrateadosJ());
  },
  costoTotalPa: function () {
    return Math.floor(this.materiag + this.manog + this.CIFprorrateadosA());
  },
  costoTotalPs: function () {
    return Math.floor(this.materias + this.manos + this.CIFprorrateadosS());
  },
  costoUnitarioj: function () {
    return this.costoTotalPj() / this.produccionJulio || 5;
  },
  costoUnitarioa: function () {
    return Number(this.costoTotalPa() / this.produccionAgosto || 5);
  },
  costoUnitarios: function () {
    return this.costoTotalPs() / this.produccionSeptiembre || 5;
  },
  unidadesEquivalentesManoDeObra: function () {
    if (this.unidadesEnProceso === 0) {
      return 0;
    }
    return (
      Math.floor(this.unidadesEnProceso * this.porcentajeDeAvanceManoDeObra) /
      100
    );
  },
  unidadesEquivalentesMateriaPrima: function () {
    if (this.unidadesEnProceso === 0) {
      return 0;
    }
    return (
      Math.floor(this.unidadesEnProceso * this.porcentajeDeAvanceMateriaPrima) /
      100
    );
  },
  unidadesEquivalentesCIF: function () {
    if (this.unidadesEnProceso === 0) {
      return 0;
    }
    return Number(
      Math.floor(this.unidadesEnProceso * this.porcentajeDeAvanceCIF) / 100
    );
  },
  unidadesEquivalentesAProductosCIF: function () {
    return this.unidadesTerminadas + this.unidadesEquivalentesCIF();
  },
  unidadesEquivalentesAProductosManoDeObra: function () {
    return this.unidadesTerminadas + this.unidadesEquivalentesManoDeObra();
  },
  unidadesEquivalentesAProductosMateriaPrima: function () {
    return this.unidadesTerminadas + this.unidadesEquivalentesMateriaPrima();
  },
  costoUnitarioDeMateriaPrima: function () {
    const unidades = this.unidadesEquivalentesAProductosMateriaPrima();
    if (!this.materiaPrimaDirecta || !unidades) {
      return 0;
    } else {
      return Number(
        (
          this.materiaPrimaDirecta /
          this.unidadesEquivalentesAProductosMateriaPrima()
        ).toFixed(2)
      );
    }
  },
  costoUnitarioManodeobra: function () {
    const unidades = this.unidadesEquivalentesAProductosManoDeObra();
    if (!this.manoDeObreDirecta || !unidades) {
      return 0;
    } else {
      return Number(
        (
          this.manoDeObreDirecta /
          this.unidadesEquivalentesAProductosManoDeObra()
        ).toFixed(2)
      );
    }
  },
  costosUnitariosCIF: function () {
    const unidades = this.unidadesEquivalentesAProductosCIF();
    if (!this.CIF || !unidades) {
      return 0;
    } else {
      return Number(
        (this.CIF / this.unidadesEquivalentesAProductosCIF()).toFixed(2)
      );
    }
  },
  costoUnitarioDelProceso: function () {
    return Number(
      (
        this.costoUnitarioDeMateriaPrima() +
        this.costoUnitarioManodeobra() +
        this.costosUnitariosCIF()
      ).toFixed(2)
    );
  },
  TotalInformeDeCostos: function () {
    return (
      this.unidadesTerminadas * this.costoUnitarioDelProceso() +
      (this.unidadesEquivalentesAProductosMateriaPrima() *
        this.costoUnitarioDeMateriaPrima() +
        this.unidadesEquivalentesAProductosManoDeObra() *
          this.costoUnitarioManodeobra() +
        this.unidadesEquivalentesAProductosCIF() * this.costosUnitariosCIF())
    );
  },
  MPvariacionP: function () {
    return (this.MprecioReal - this.MprecioEstandar) * this.materiaPrimaDirecta;
  },
  MPcantidad: function () {
    return (
      (this.materiaPrimaDirecta - this.unidadesEnProceso) * this.MprecioEstandar
    );
  },
  MOsalario: function () {
    return (this.manoDeObreDirecta - this.OsalarioEstandar) * this.OtiempoReal;
  },
  MOtiempo: function () {
    return (this.OtiempoReal - this.OtiempoEstandar) * this.OsalarioEstandar;
  },
  SDprecio: function () {
    return (this.SprecioReal - this.SprecioEstandar) * this.ScantidadReal;
  },
  SDcantidad: function () {
    return (this.ScantidadReal - this.ScantidadEstandar) * this.SprecioEstandar;
  },
  CIFcapacidad: function () {
    return this.CIF - this.Cpresupuestado;
  },
  CIFpresupuesto: function () {
    return this.Cpresupuestado - this.Creal;
  },
  CIFeficiencia: function () {
    return (this.ChorasAplicadas - this.ChorasReales) * this.CtasaVariables;
  },
  CIFcantidad: function () {
    return (this.ChorasReales - this.CtasaVariables) * this.CIreal;
  },
  Amateriales: function () {
    return this.materiaPrimaDirecta + 2100;
  },
  AmanoDeObra: function () {
    return this.manoDeObreDirecta + 4500;
  },
  TotalCostoFIjo: function () {
    return (
      this.AcontrolDeCalidad +
      this.Amantenimiento +
      this.Dimpuesto +
      this.Aseguros +
      this.EnegiaElectrica +
      this.AmaquinariaEquipo +
      this.Acombustible +
      this.MaterialesIndirectos +
      this.ManoDeObraIndirecta
    );
  },
  ventasUnidades: function () {
    return this.modelproducidas * this.precio;
  },
  totalNeto: function () {
    return Number((this.ventasUnidades() - this.TotalCostoFIjo()).toFixed(3));
  },
  TotalCostoVarible: function () {
    return (
      this.Aimpuestos +
      this.Dluz +
      this.manoDeObreDirecta +
      this.Dmantenimiento +
      this.Dcombustible +
      this.Dvario
    );
  },
  TotalNeto() {
    return (
      (this.TotalCostoFIjo() + this.TotalCostoVarible()) /
      this.unidadesEnProceso
    );
  },
  TotalMateriaPrimaDis() {
    return Math.floor(this.InvInicialMateria + this.materiaPrimaDirecta);
  },
  InventarioFinalMateriaPrima: 119190.5,
  MateriaPrimaUtilizada() {
    return Math.floor(
      this.TotalMateriaPrimaDis() + this.InventarioFinalMateriaPrima
    );
  },
  TotalAplicadoAlaProduccion() {
    return Math.floor(this.costosPrimos() + this.CIF);
  },
  InventarioIniProductosPro: 204500,
  Total() {
    return Math.floor(
      this.TotalAplicadoAlaProduccion() + this.InventarioIniProductosPro
    );
  },
  InventarioFinalDeProductos: 603500,
  CostoDeProduccion() {
    return Math.floor(this.Total() - this.InventarioFinalDeProductos);
  },
  ProductosTerminadosIni: 0,
  ProductosTerminadosFin: 204600,
  TotalV() {
    return Math.floor(this.CostoDeProduccion() + this.ProductosTerminadosIni);
  },
  COstosPyV() {
    return Math.floor(this.TotalV() - this.ProductosTerminadosFin);
  },
  TotalPasivoCorriente() {
    return Math.floor(
      this.materiaPrimaDirecta +
        this.manoDeObreDirecta +
        this.Aimpuestos +
        this.Dmantenimiento +
        this.Dluz +
        this.Dcombustible +
        this.Dvario
    );
  },
  ventas: 65128000,
  patrimonio() {
    return Math.floor(this.ventas - this.TotalPasivoCorriente());
  },
};
