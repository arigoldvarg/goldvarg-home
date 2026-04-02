export default function GoldvargHomeV1() {
  const brand = {
    violet: '#662F8F',
    blue: '#1E75BB',
    lightBlue: '#42ABE1',
  };

  const clientLogos = [
    { name: 'TERNIUM', accent: 'T', src: '/logos/Ternium_Logo.svg.png' },
    { name: 'MOLINOS AGRO', accent: 'M', src: '/logos/logoLogin.png' },
    { name: 'MAINCAL', accent: 'M', src: '/logos/maincal-logo.png' },
    { name: 'NESPRESSO', accent: 'N' },
    { name: 'NUEVO CENTRAL ARGENTINO', accent: 'NCA' },
    { name: 'BANCO MUNICIPAL', accent: 'BM' },
    { name: 'HB4 - BIOCERES', accent: 'HB4' },
    { name: 'RIZOBACTER', accent: 'R' },
    { name: 'PLA - JOHN DEERE', accent: 'PLA' },
    { name: 'BERTOTTO BRUERA', accent: 'BB' },
    { name: 'RANDON', accent: 'R' },
    { name: 'RED RURAL', accent: 'RR' },
  ];

  const clientTrack = [...clientLogos, ...clientLogos];

  const specialties = [
    {
      n: '01',
      title: 'Industria',
      desc: 'Capacidad, productividad y organización de la operación.',
      items: ['Layout y flujo', 'Balanceo y tiempos', 'Estabilidad operativa', 'Puestos y roles'],
      color: brand.violet,
    },
    {
      n: '02',
      title: 'Logística y abastecimiento',
      desc: 'Depósitos, reposición, preparación y nivel de servicio.',
      items: ['Depósitos y staging', 'Inventario y reposición', 'Inbound y abastecimiento', 'Preparación de pedidos'],
      color: brand.blue,
    },
    {
      n: '03',
      title: 'Servicios y procesos administrativos',
      desc: 'Procesos críticos, automatización y trazabilidad de la información.',
      items: ['Workflows críticos', 'Automatización puntual', 'Tableros y control', 'Estandarización administrativa'],
      color: brand.lightBlue,
    },
    {
      n: '04',
      title: 'Agronegocios',
      desc: 'Expertise específico en procesos operativos y administrativos del agro.',
      items: ['Descargas y calidades', 'Aplicaciones y contratos', 'Cupos y seguimiento', 'Productividad de backoffice'],
      color: brand.violet,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200">
      <section
        className="relative overflow-hidden border-b"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}
      >
        <div className="absolute inset-0 editorial-grid opacity-40" />
        <div
          className="absolute -right-24 top-20 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${brand.lightBlue} 0%, transparent 70%)` }}
        />
        <div
          className="absolute left-0 bottom-0 h-80 w-80 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${brand.violet} 0%, transparent 70%)` }}
        />

        <div className="relative max-w-7xl mx-auto px-8 md:px-10 pt-10 pb-28 md:pt-14 md:pb-36">
          <div className="flex items-center justify-between mb-20">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-white font-bold tracking-[0.08em] shadow-lg" style={{ background: `linear-gradient(135deg, ${brand.violet}, ${brand.blue})` }}>GI</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: brand.violet }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: brand.blue }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: brand.lightBlue }} />
              </div>
              <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-slate-600 font-semibold">
                Goldvarg Ingeniería
              </p>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
              <span>Especialidades</span>
              <span>Casos</span>
              <span>Agro</span>
              <span>BTN</span>
              <span>Contacto</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 mb-6">Operaciones y productividad</p>
              <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-semibold leading-[0.96] tracking-[-0.04em] mb-8 max-w-4xl">
                Mejora de operaciones para aumentar eficiencia, capacidad, ordenar el flujo y sostener el nivel de servicio.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-9 mb-12 max-w-3xl">
                Trabajamos sobre operaciones industriales, logística, servicios y agronegocios para mejorar productividad, ordenar la ejecución y dar mayor previsibilidad a la operación.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button
                  className="px-8 py-4 rounded-2xl text-white font-medium shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                  style={{ backgroundColor: brand.violet }}
                >
                  Coordinar reunión
                </button>
                <button className="px-8 py-4 rounded-2xl border border-slate-300 bg-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  Ver casos
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
                <div className="rounded-[1.75rem] border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: brand.violet }}>
                    Especialidad
                  </p>
                  <p className="text-2xl font-semibold leading-tight">Eficiencia + productividad</p>
                </div>
                <div className="rounded-[1.75rem] border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: brand.blue }}>
                    Sectores
                  </p>
                  <p className="text-2xl font-semibold leading-tight">Industria, logística, servicios y agro</p>
                </div>
                <div className="rounded-[1.75rem] border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: brand.lightBlue }}>
                    Foco
                  </p>
                  <p className="text-2xl font-semibold leading-tight">Capacidad, flujo y servicio</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-70"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(102,47,143,0.08), rgba(30,117,187,0.08), rgba(66,171,225,0.08))',
                }}
              />
              <div className="relative rounded-[2.5rem] border bg-white/85 backdrop-blur p-6 md:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="grid grid-cols-12 gap-4 h-[560px]">
                  <div className="col-span-7 rounded-[1.75rem] border bg-slate-50 p-5 flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">Vista editorial</p>
                      <div className="space-y-3">
                        <div className="h-24 rounded-2xl bg-white border" />
                        <div className="h-10 rounded-xl bg-white border w-3/4" />
                        <div className="h-10 rounded-xl bg-white border w-5/6" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 rounded-2xl border bg-white" />
                      <div className="h-24 rounded-2xl border bg-white" />
                    </div>
                  </div>

                  <div className="col-span-5 flex flex-col gap-4">
                    <div className="rounded-[1.75rem] border p-5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: brand.violet }}>
                        Centros de distribución
                      </p>
                      <div className="h-24 rounded-2xl bg-slate-50 border mb-3" />
                      <p className="text-lg font-semibold leading-tight">Depósitos, staging y preparación</p>
                    </div>
                    <div className="rounded-[1.75rem] border p-5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: brand.blue }}>
                        Plantas industriales
                      </p>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="h-16 rounded-xl bg-slate-50 border" />
                        <div className="h-16 rounded-xl bg-slate-50 border" />
                        <div className="h-16 rounded-xl bg-slate-50 border" />
                      </div>
                      <p className="text-lg font-semibold leading-tight">Layout, flujo y capacidad</p>
                    </div>
                    <div className="rounded-[1.75rem] border p-5 bg-slate-900 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">Procesos críticos</p>
                      <div className="space-y-2 mb-3">
                        <div className="h-3 rounded-full bg-slate-700 w-full" />
                        <div className="h-3 rounded-full bg-slate-700 w-4/5" />
                        <div className="h-3 rounded-full bg-slate-700 w-3/5" />
                      </div>
                      <p className="text-lg font-semibold leading-tight">Automatización y trazabilidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <div className="flex items-end justify-between gap-8 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400 mb-3">Visuales</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
                Planta, layout, depósitos y operación en campo
              </h2>
            </div>
            <p className="hidden lg:block max-w-xl text-slate-500 leading-8">
              Dejamos una banda editorial preparada para sumar fotos reales de planta, layouts, depósitos y workshops.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-[2rem] overflow-hidden border bg-slate-50 shadow-sm">
              <div className="h-64 bg-[linear-gradient(135deg,#e2e8f0,#f8fafc)]" />
              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-2">Operaciones</p>
                <p className="text-xl font-semibold">Fotos de planta y balanceo de línea</p>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden border bg-slate-50 shadow-sm">
              <div className="h-64 bg-[linear-gradient(135deg,#dbeafe,#f8fafc)]" />
              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-2">Logística</p>
                <p className="text-xl font-semibold">Layouts, staging y depósitos</p>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden border bg-slate-50 shadow-sm">
              <div className="h-64 bg-[linear-gradient(135deg,#ede9fe,#f8fafc)]" />
              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-2">Workshops</p>
                <p className="text-xl font-semibold">Clientes, equipos y workshops en campo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <div className="flex items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400 mb-3">Trayectoria</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
                Empresas que confiaron en nuestro criterio
              </h2>
            </div>
            <p className="hidden lg:block max-w-xl text-slate-500 leading-8">
              Una selección de compañías industriales, logísticas y de agronegocios con las que desarrollamos proyectos
              de productividad, diseño operativo y automatización.
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-4 px-8 md:px-10">
            {clientTrack.map((logo, i) => (
              <div
                key={i}
                className="h-20 min-w-[260px] rounded-2xl border bg-slate-50 flex items-center gap-4 px-5 text-slate-700 shadow-sm transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg"
              >
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-12 w-auto max-w-[150px] object-contain bg-white rounded-lg p-1"
                  />
                ) : (
                  <div
                    className="h-10 min-w-[56px] rounded-xl flex items-center justify-center text-white text-xs font-bold tracking-[0.08em]"
                    style={{ background: `linear-gradient(135deg, ${brand.violet}, ${brand.blue})` }}
                  >
                    {logo.accent}
                  </div>
                )}
                <span className="font-semibold tracking-[0.06em] text-sm">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <div className="flex items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400 mb-3">Caso destacado</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] max-w-3xl">
                MAINCAL — Nuevo centro de distribución para crecimiento y futura implementación de WMS
              </h2>
            </div>
            <button className="hidden md:block px-5 py-3 rounded-2xl border bg-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              Ver caso completo
            </button>
          </div>

          <div className="grid xl:grid-cols-[1.25fr_0.75fr] gap-6 items-stretch">
            <div className="rounded-[2rem] border bg-white p-6 md:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] relative overflow-hidden">
              <div
                className="absolute top-0 right-0 h-32 w-32 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: brand.lightBlue }}
              />
              <div className="relative grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">Desafío</p>
                  <p className="text-base leading-7 text-slate-700">
                    Validar si la nueva infraestructura podía absorber crecimiento, ordenar almacenamiento y profesionalizar la preparación.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">Decisión de diseño</p>
                  <p className="text-base leading-7 text-slate-700">
                    Definición de layout, capacidad por tipo de estantería, staging de expedición y preparación por olas.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">Impacto</p>
                  <p className="text-base leading-7 text-slate-700">
                    Base operativa concreta para un CD de 4.000 m² preparado para crecimiento y futura implementación de WMS.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border bg-slate-900 text-white p-6 md:p-7 flex flex-col justify-between shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">Dato de caso</p>
                <p className="text-4xl md:text-5xl font-semibold tracking-[-0.05em] mb-3">4.000 m²</p>
                <p className="text-slate-300 text-base leading-7">
                  Nuevo centro de distribución dimensionado para ordenar la operación y acompañar el crecimiento proyectado.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="h-px bg-slate-700" />
                <p className="text-xs text-slate-400">Diseño operativo · Layout · Capacidad · WMS readiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400 mb-3">Dominios de trabajo</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] max-w-4xl">
              Conocimiento aplicado en industria, logística, servicios y agronegocios.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {specialties.map((item) => (
              <div
                key={item.n}
                className="group rounded-[2rem] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <p className="text-sm mb-4 font-medium" style={{ color: item.color }}>
                  {item.n}
                </p>
                <h3 className="text-2xl font-semibold mb-4 leading-tight">{item.title}</h3>
                <p className="text-slate-600 leading-8 mb-6">{item.desc}</p>
                <div className="space-y-2 mb-8">
                  {item.items.map((subitem, idx) => (
                    <div key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span>{subitem}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-8 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-24"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 md:px-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400 mb-3">Expertise específico</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-6">
              Nuestro expertise en agronegocios
            </h2>
            <p className="text-xl text-slate-600 leading-9 max-w-3xl">
              Desarrollamos experiencia concreta en corredores, acopios, originación y empresas de servicios vinculadas al agro, combinando criterio operativo con productividad administrativa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-[2rem] border bg-slate-50 p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] mb-4" style={{ color: brand.violet }}>Procesos</p>
              <div className="space-y-3 text-slate-700">
                <div>Descargas y calidades</div>
                <div>Aplicaciones y contratos</div>
                <div>Cupos, seguimiento y trazabilidad</div>
                <div>Controles operativos y administrativos</div>
              </div>
            </div>
            <div className="rounded-[2rem] border bg-slate-900 p-7 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">Convergencia</p>
              <div className="space-y-3 text-slate-200">
                <div>Operación + backoffice</div>
                <div>Productividad + control</div>
                <div>Consultoría + automatización</div>
                <div>Expertise sectorial + BTN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
        <div className="max-w-7xl mx-auto px-8 md:px-10 grid lg:grid-cols-[1fr_0.95fr] gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400 mb-3">Producto propio</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 min-w-[88px] rounded-2xl flex items-center justify-center text-white font-bold tracking-[0.08em] shadow-lg" style={{ background: `linear-gradient(135deg, ${brand.violet}, ${brand.blue}, ${brand.lightBlue})` }}>BTN</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">BTN — Bruto Tara Neto</h2>
            </div>
            <p className="text-xl text-slate-600 leading-9 max-w-3xl mb-10">
              Producto orientado a mejorar productividad administrativa y trazabilidad en agronegocios. Diseñado para mostrar valor rápido y profundizar luego por módulos, procesos o casos.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-2xl text-white font-medium shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                style={{ backgroundColor: brand.violet }}
              >
                Explorar BTN
              </button>
              <button className="px-8 py-4 rounded-2xl border border-slate-300 bg-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                Ver impacto
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-5">
                <p className="text-sm uppercase tracking-[0.25em]" style={{ color: brand.violet }}>
                  Entrada rápida
                </p>
                <div
                  className="h-12 min-w-[110px] rounded-2xl flex items-center justify-center text-white font-semibold"
                  style={{ background: `linear-gradient(135deg, ${brand.violet}, ${brand.blue}, ${brand.lightBlue})` }}
                >
                  BTN
                </div>
              </div>
              <p className="text-2xl font-semibold leading-tight">
                Producto de la consultora para agronegocios y procesos administrativos críticos.
              </p>
            </div>
            <div className="rounded-[2rem] border bg-slate-900 text-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">Promesa</p>
              <p className="text-3xl font-semibold leading-tight">De horas a minutos. Sin cambiar todo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 editorial-grid" />
        <div
          className="absolute -top-20 right-0 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: brand.violet }}
        />
        <div className="max-w-6xl mx-auto px-8 md:px-10 text-center relative">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400 mb-4">Contacto</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight mb-6">
            Si la operación necesita más capacidad, mejor nivel de servicio o una decisión de diseño, conversemos.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-9 max-w-3xl mx-auto mb-10">
            Proyectos de productividad, layout, logística, automatización y agronegocios con criterio ejecutivo y foco en implementación.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: brand.violet }}
            >
              Coordinar una reunión
            </button>
            <button className="px-8 py-4 rounded-2xl border border-slate-600 text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5">
              Ver casos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
