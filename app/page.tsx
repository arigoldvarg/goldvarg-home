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
      title: 'Operaciones industriales',
      desc: 'Capacidad, productividad, balanceo, layout y organización del trabajo.',
      color: brand.violet,
    },
    {
      n: '02',
      title: 'Logística de abastecimiento',
      desc: 'Abastecimiento inbound, inventario, depósitos, reposición y nivel de servicio.',
      color: brand.blue,
    },
    {
      n: '03',
      title: 'Automatización de procesos',
      desc: 'Diseño de sistemas operativos y automatización aplicada a procesos críticos.',
      color: brand.lightBlue,
    },
    {
      n: '04',
      title: 'Agronegocios',
      desc: 'Acopios, corredoras, originación, empresas de servicios y productividad administrativa.',
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

        <div className="relative mx-auto max-w-7xl px-8 pb-28 pt-10 md:px-10 md:pb-36 md:pt-14">
          <div className="mb-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: brand.violet }} />
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: brand.blue }} />
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: brand.lightBlue }} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 md:text-sm">
                Goldvarg Ingeniería
              </p>
            </div>
            <div className="hidden items-center gap-8 text-sm text-slate-500 md:flex">
              <span>Especialidades</span>
              <span>Casos</span>
              <span>BTN</span>
              <span>Contacto</span>
            </div>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.28em] text-slate-500">Eficiencia y productividad</p>
              <h1 className="mb-8 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] md:text-7xl lg:text-[5.25rem]">
                Productividad, capacidad y nivel de servicio para operaciones que necesitan escalar.
              </h1>
              <p className="mb-12 max-w-3xl text-lg leading-9 text-slate-600 md:text-xl">
                Ayudamos a compañías industriales, logísticas y de agronegocios a tomar mejores decisiones de diseño,
                rediseño operativo y automatización para ordenar la operación y sostener crecimiento.
              </p>

              <div className="mb-16 flex flex-wrap gap-4">
                <button
                  className="rounded-2xl px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                  style={{ backgroundColor: brand.violet }}
                >
                  Coordinar reunión
                </button>
                <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  Ver casos
                </button>
              </div>

              <div className="grid max-w-4xl gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em]" style={{ color: brand.violet }}>
                    Especialidad
                  </p>
                  <p className="text-2xl font-semibold leading-tight">Eficiencia + productividad</p>
                </div>
                <div className="rounded-[1.75rem] border bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em]" style={{ color: brand.blue }}>
                    Sectores
                  </p>
                  <p className="text-2xl font-semibold leading-tight">Industria, logística y agronegocios</p>
                </div>
                <div className="rounded-[1.75rem] border bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em]" style={{ color: brand.lightBlue }}>
                    Foco
                  </p>
                  <p className="text-2xl font-semibold leading-tight">Capacidad y nivel de servicio</p>
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
              <div className="relative rounded-[2.5rem] border bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
                <div className="grid h-[560px] grid-cols-12 gap-4">
                  <div className="col-span-7 flex flex-col justify-between rounded-[1.75rem] border bg-slate-50 p-5">
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-400">Vista editorial</p>
                      <div className="space-y-3">
                        <div className="h-24 rounded-2xl border bg-white" />
                        <div className="h-10 w-3/4 rounded-xl border bg-white" />
                        <div className="h-10 w-5/6 rounded-xl border bg-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 rounded-2xl border bg-white" />
                      <div className="h-24 rounded-2xl border bg-white" />
                    </div>
                  </div>

                  <div className="col-span-5 flex flex-col gap-4">
                    <div className="rounded-[1.75rem] border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <p className="mb-3 text-xs uppercase tracking-[0.25em]" style={{ color: brand.violet }}>
                        Centros de distribución
                      </p>
                      <div className="mb-3 h-24 rounded-2xl border bg-slate-50" />
                      <p className="text-lg font-semibold leading-tight">Depósitos, staging y preparación</p>
                    </div>
                    <div className="rounded-[1.75rem] border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <p className="mb-3 text-xs uppercase tracking-[0.25em]" style={{ color: brand.blue }}>
                        Plantas industriales
                      </p>
                      <div className="mb-3 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl border bg-slate-50" />
                        <div className="h-16 rounded-xl border bg-slate-50" />
                        <div className="h-16 rounded-xl border bg-slate-50" />
                      </div>
                      <p className="text-lg font-semibold leading-tight">Layout, flujo y capacidad</p>
                    </div>
                    <div className="rounded-[1.75rem] border bg-slate-900 p-5 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-400">Workflows críticos</p>
                      <div className="mb-3 space-y-2">
                        <div className="h-3 w-full rounded-full bg-slate-700" />
                        <div className="h-3 w-4/5 rounded-full bg-slate-700" />
                        <div className="h-3 w-3/5 rounded-full bg-slate-700" />
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

      <section className="border-b bg-white py-16">
        <div className="mx-auto max-w-7xl px-8 md:px-10">
          <div className="mb-8 flex items-end justify-between gap-8">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-slate-400">Visuales</p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Planta, layout, depósitos y operación en campo
              </h2>
            </div>
            <p className="hidden max-w-xl leading-8 text-slate-500 lg:block">
              Dejamos una banda editorial preparada para sumar fotos reales de planta, layouts, depósitos y workshops.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-[2rem] border bg-slate-50 shadow-sm">
              <div className="h-64 bg-[linear-gradient(135deg,#e2e8f0,#f8fafc)]" />
              <div className="p-5">
                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-slate-400">Operaciones</p>
                <p className="text-xl font-semibold">Fotos de planta y balanceo de línea</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border bg-slate-50 shadow-sm">
              <div className="h-64 bg-[linear-gradient(135deg,#dbeafe,#f8fafc)]" />
              <div className="p-5">
                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-slate-400">Logística</p>
                <p className="text-xl font-semibold">Layouts, staging y depósitos</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border bg-slate-50 shadow-sm">
              <div className="h-64 bg-[linear-gradient(135deg,#ede9fe,#f8fafc)]" />
              <div className="p-5">
                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-slate-400">Workshops</p>
                <p className="text-xl font-semibold">Clientes, equipos y workshops en campo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-24">
        <div className="mx-auto max-w-7xl px-8 md:px-10">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-slate-400">Trayectoria</p>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Empresas que confiaron en nuestro criterio
              </h2>
            </div>
            <p className="hidden max-w-xl leading-8 text-slate-500 lg:block">
              Una selección de compañías industriales, logísticas y de agronegocios con las que desarrollamos proyectos
              de productividad, diseño operativo y automatización.
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-4 px-8 md:px-10">
            {clientTrack.map((logo, i) => (
              <div
                key={i}
                className="flex h-20 min-w-[260px] items-center gap-4 rounded-2xl border bg-slate-50 px-5 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-12 max-w-[150px] w-auto rounded-lg bg-white p-1 object-contain"
                  />
                ) : (
                  <div
                    className="flex h-10 min-w-[56px] items-center justify-center rounded-xl text-xs font-bold tracking-[0.08em] text-white"
                    style={{ background: `linear-gradient(135deg, ${brand.violet}, ${brand.blue})` }}
                  >
                    {logo.accent}
                  </div>
                )}
                <span className="text-sm font-semibold tracking-[0.06em]">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div className="mx-auto max-w-7xl px-8 md:px-10">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-slate-400">Caso destacado</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                MAINCAL — Nuevo centro de distribución para crecimiento y futura implementación de WMS
              </h2>
            </div>
            <button className="hidden rounded-2xl border bg-white px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:block">
              Ver caso completo
            </button>
          </div>

          <div className="grid items-stretch gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="relative overflow-hidden rounded-[2rem] border bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] md:p-7">
              <div
                className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: brand.lightBlue }}
              />
              <div className="relative grid gap-6 md:grid-cols-3">
                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">Desafío</p>
                  <p className="text-base leading-7 text-slate-700">
                    Validar si la nueva infraestructura podía absorber crecimiento, ordenar almacenamiento y
                    profesionalizar la preparación.
                  </p>
                </div>
                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">Decisión de diseño</p>
                  <p className="text-base leading-7 text-slate-700">
                    Definición de layout, capacidad por tipo de estantería, staging de expedición y preparación por olas.
                  </p>
                </div>
                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">Impacto</p>
                  <p className="text-base leading-7 text-slate-700">
                    Base operativa concreta para un CD de 4.000 m² preparado para crecimiento y futura implementación
                    de WMS.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[2rem] border bg-slate-900 p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.10)] md:p-7">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">Dato de caso</p>
                <p className="mb-3 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">4.000 m²</p>
                <p className="text-base leading-7 text-slate-300">
                  Nuevo centro de distribución dimensionado para ordenar la operación y acompañar el crecimiento
                  proyectado.
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

      <section className="border-b border-t bg-white py-28">
        <div className="mx-auto max-w-7xl px-8 md:px-10">
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-slate-400">Especialidades</p>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Intervenimos donde la operación necesita capacidad, orden y mejores decisiones.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {specialties.map((item) => (
              <div
                key={item.n}
                className="group rounded-[2rem] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <p className="mb-4 text-sm font-medium" style={{ color: item.color }}>
                  {item.n}
                </p>
                <h3 className="mb-4 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="leading-8 text-slate-600">{item.desc}</p>
                <div
                  className="mt-8 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-24"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-8 md:px-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-slate-400">Producto propio</p>
            <h2 className="mb-6 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">BTN — Bruto Tara Neto</h2>
            <p className="mb-10 max-w-3xl text-xl leading-9 text-slate-600">
              Producto orientado a mejorar productividad administrativa y trazabilidad en agronegocios. Diseñado para
              mostrar valor rápido y profundizar luego por módulos, procesos o casos.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="rounded-2xl px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                style={{ backgroundColor: brand.violet }}
              >
                Explorar BTN
              </button>
              <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                Ver impacto
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.25em]" style={{ color: brand.violet }}>
                  Entrada rápida
                </p>
                <div
                  className="flex h-12 min-w-[110px] items-center justify-center rounded-2xl font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, ${brand.violet}, ${brand.blue}, ${brand.lightBlue})` }}
                >
                  BTN
                </div>
              </div>
              <p className="text-2xl font-semibold leading-tight">
                Producto de la consultora para agronegocios y procesos administrativos críticos.
              </p>
            </div>
            <div className="rounded-[2rem] border bg-slate-900 p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">Promesa</p>
              <p className="text-3xl font-semibold leading-tight">De horas a minutos. Sin cambiar todo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-28 text-white">
        <div className="editorial-grid absolute inset-0 opacity-20" />
        <div
          className="absolute -top-20 right-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: brand.violet }}
        />
        <div className="relative mx-auto max-w-6xl px-8 text-center md:px-10">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-slate-400">Contacto</p>
          <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Si la operación necesita más capacidad, mejor nivel de servicio o una decisión de diseño, conversemos.
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
            Proyectos de productividad, layout, logística, automatización y agronegocios con criterio ejecutivo y foco
            en implementación.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="rounded-2xl px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: brand.violet }}
            >
              Coordinar una reunión
            </button>
            <button className="rounded-2xl border border-slate-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5">
              Ver casos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
