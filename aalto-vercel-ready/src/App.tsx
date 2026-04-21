import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  Globe,
  HeartPulse,
  Hotel,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Target,
  Users,
  Warehouse,
  Wrench,
  X,
  Linkedin,
  Construction,
  Paintbrush,
  Hammer,
  Thermometer,
  Send,
  ClipboardList,
  UserCheck,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import aaltoLogoCompleto from './assets/aalto-logo-completo.png';
import aemLogo from './assets/aem-logo.png';
import talcaLogo from './assets/talca.png';
import unileverLogo from './assets/unilever.png';
import yaguarLogo from './assets/yaguar.png';
import randstadLogo from './assets/randstad.png';
import famiqLogo from './assets/famiq.png';
import salenteinLogo from './assets/salentein.png';
import rosellBoherLogo from './assets/rosell-boher.png';
import triventoLogo from './assets/trivento.png';
import chandonLogo from './assets/chandon.png';
import luigiBoscaLogo from './assets/luigi-bosca.png';
import nortonLogo from './assets/norton.png';
import renacerLogo from './assets/renacer.png';
import smnLogo from './assets/smn.png';
import parkHyattLogo from './assets/park-hyatt.png';
import halliburtonLogo from './assets/halliburton.png';
import neverlandLogo from './assets/neverland.png';
import cocaColaLogo from './assets/coca-cola.png';


type Sector = {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

type Client =
  | { type: 'image'; name: string; src: string; className?: string }
  | { type: 'text'; name: string; label: string };

const sectors: Sector[] = [
  { title: 'Bodegas', Icon: Warehouse },
  { title: 'Hotelería', Icon: Hotel },
  { title: 'Salud', Icon: HeartPulse },
  { title: 'Industrias', Icon: Factory },
  { title: 'Retail & Centros Comerciales', Icon: ShoppingBag },
];

const values = ['Compromiso', 'Calidad', 'Innovación', 'Cercanía', 'Eficiencia'];

const clients: Client[] = [
  { type: 'image', name: 'Randstad', src: randstadLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Talca', src: talcaLogo, className: 'max-h-12 md:max-h-14' },
  { type: 'image', name: 'Unilever', src: unileverLogo, className: 'max-h-16 md:max-h-20' },
  { type: 'image', name: 'Yaguar', src: yaguarLogo, className: 'max-h-12 md:max-h-14' },
  { type: 'image', name: 'Salentein', src: salenteinLogo, className: 'max-h-12 md:max-h-14' },
  { type: 'image', name: 'Rosell Boher Lodge', src: rosellBoherLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Trivento', src: triventoLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Chandon', src: chandonLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Luigi Bosca', src: luigiBoscaLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Norton', src: nortonLogo, className: 'max-h-12 md:max-h-14' },
  { type: 'image', name: 'Renacer', src: renacerLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'SMN Argentina', src: smnLogo, className: 'max-h-12 md:max-h-14' },
  { type: 'image', name: 'Halliburton', src: halliburtonLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Park Hyatt', src: parkHyattLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Neverland', src: neverlandLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Coca-Cola', src: cocaColaLogo, className: 'max-h-10 md:max-h-12' },
  { type: 'image', name: 'Famiq', src: famiqLogo, className: 'max-h-12 md:max-h-14' },
  { type: 'text', name: 'Achaval Ferrer', label: 'ACHAVAL FERRER' },
  { type: 'text', name: 'Valle de Uco', label: 'VALLE DE UCO' },
];

const landingBenefitCards = [
  {
    title: 'Integración real',
    text: 'Adaptación a procesos y estándares internos para sostener la operación con menos fricción.',
    Icon: UserCheck,
  },
  {
    title: 'Un solo interlocutor',
    text: 'Más claridad y menos desgaste para coordinar requerimientos, seguimiento y respuesta.',
    Icon: Briefcase,
  },
  {
    title: 'Respaldo profesional',
    text: 'Cobertura operativa, normativa y técnica para empresas que necesitan continuidad.',
    Icon: ShieldCheck,
  },
  {
    title: 'Mayor previsibilidad',
    text: 'Una estructura más ordenada para sostener el día a día y responder mejor a la demanda.',
    Icon: Target,
  },
];

const landingModes = [
  'Refuerzo operativo eventual',
  'Cobertura técnica continua',
  'Soporte para picos de demanda',
  'Integración a equipos internos',
];

const landingPainPoints = [
  'Dificultad para conseguir perfiles confiables',
  'Pérdida de tiempo coordinando terceros',
  'Respuesta irregular ante urgencias',
  'Falta de alineación con procesos internos',
];

const landingSteps = [
  {
    title: 'Relevamiento',
    text: 'Entendemos necesidad, contexto y nivel de cobertura según la operación.',
  },
  {
    title: 'Definición',
    text: 'Ordenamos perfil, modalidad y alcance para evitar improvisación.',
  },
  {
    title: 'Implementación',
    text: 'Coordinamos incorporación operativa y puesta en marcha.',
  },
  {
    title: 'Seguimiento',
    text: 'Acompañamos con respaldo y continuidad para sostener el servicio.',
  },
];

function Logo({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center rounded-sm px-3 py-2 ${dark ? 'bg-white/95 shadow-lg' : 'bg-white'} ${className}`}
    >
      <img
        src={aaltoLogoCompleto}
        alt="AALTO Mantenimiento"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </div>
  );
}

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="bg-white border border-slate-100 min-h-[112px] flex items-center justify-center px-6 py-6 hover:shadow-lg transition-all duration-300 rounded-sm">
      {client.type === 'image' ? (
        <img src={client.src} alt={client.name} className={`max-w-full object-contain ${client.className ?? 'max-h-12'}`} />
      ) : (
        <span className="text-center text-sm md:text-base font-bold tracking-[0.18em] text-[#1a365d] uppercase">
          {client.label}
        </span>
      )}
    </div>
  );
}

function ContactSection({
  title = 'Contacto corporativo',
  subtitle = 'Nuestro equipo técnico está disponible para evaluar requerimientos, coordinar una visita y proponer soluciones a medida.',
  formMessagePlaceholder = '',
}: {
  title?: string;
  subtitle?: string;
  formMessagePlaceholder?: string;
}) {
  return (
    <section id="contacto" className="py-16 md:py-24 lg:py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-10 md:space-y-14">
            <div className="space-y-6">
              <span className="text-[#3b82f6] font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px]">Canales de atención</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter">{title}</h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">{subtitle}</p>
            </div>

            <div className="space-y-8">
              {[
                { label: 'Email institucional', value: 'aalto.mza@gmail.com', Icon: Mail },
                { label: 'Teléfono directo', value: '+54 261 471 5133', Icon: Phone },
                { label: 'Presencia web', value: 'aaltomantenimiento.com.ar', Icon: Globe },
              ].map(({ label, value, Icon }) => (
                <div key={label} className="flex items-start gap-5 md:gap-8">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#3b82f6]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[11px] font-bold text-white/35 uppercase tracking-widest mb-2">{label}</p>
                    <p className="text-lg md:text-xl font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 lg:p-12 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-[#1a365d] uppercase tracking-tight mb-8">Enviar requerimiento</h3>
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Nombre completo</label>
                  <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Empresa / organización</label>
                  <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Email de contacto</label>
                  <input type="email" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Teléfono</label>
                  <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Mensaje / consulta</label>
                <textarea
                  rows={4}
                  placeholder={formMessagePlaceholder}
                  className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors resize-none placeholder:text-slate-300"
                />
              </div>
              <button className="w-full py-5 bg-[#1a365d] text-white text-[11px] font-bold uppercase tracking-[0.35em] hover:bg-[#3b82f6] transition-all flex items-center justify-center gap-4">
                <Send size={16} />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo className="shadow-none px-0 py-0 bg-transparent" />
          <div className="flex items-center gap-8 text-slate-400">
            <Linkedin size={22} className="hover:text-[#1a365d] cursor-pointer transition-colors" />
            <Mail size={22} className="hover:text-[#1a365d] cursor-pointer transition-colors" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] text-center md:text-right">
            © {new Date().getFullYear()} AALTO Mantenimiento
          </p>
        </div>
      </div>
    </footer>
  );
}

function MantenimientoModal({ active, onClose }: { active: boolean; onClose: () => void }) {
  if (!active) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 20 }}
          className="relative w-full max-w-5xl bg-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div className="bg-[#1a365d] p-6 md:p-10 text-white flex justify-between items-center shrink-0">
            <div className="space-y-2">
              <h3 className="text-lg md:text-2xl font-bold uppercase tracking-[0.18em]">Mantenimiento edilicio</h3>
              <div className="w-14 h-1 bg-[#3b82f6]" />
            </div>
            <button onClick={onClose} className="p-2 md:p-3 hover:bg-white/10 transition-colors">
              <X size={28} />
            </button>
          </div>

          <div className="p-6 md:p-12 overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {[
                {
                  title: 'Obra civil',
                  desc: 'Albañilería general, construcción en seco, pavimentos, pisos, revestimientos y acabados.',
                  Icon: Construction,
                },
                {
                  title: 'Pintura',
                  desc: 'Pintura civil de medianas y grandes superficies, texturados, epoxi y terminaciones.',
                  Icon: Paintbrush,
                },
                {
                  title: 'Plomería',
                  desc: 'Plomería general y mantenimiento de instalaciones sanitarias en operación.',
                  Icon: Wrench,
                },
                {
                  title: 'Carpintería',
                  desc: 'Fabricación y restauración de aberturas y mobiliario. Construcción y mantenimiento de pérgolas y decks.',
                  Icon: Hammer,
                },
                {
                  title: 'Refrigeración',
                  desc: 'Instalación y mantenimiento de aire acondicionado, refrigeración central, roof-top, inverter, piso techo y sistemas frigoríficos.',
                  Icon: Thermometer,
                },
                {
                  title: 'Soporte operativo',
                  desc: 'Planificación de tareas programadas, orden de intervención y seguimiento técnico según las necesidades de cada cliente.',
                  Icon: Briefcase,
                },
              ].map(({ title, desc, Icon }) => (
                <div key={title} className="border border-slate-100 bg-slate-50 p-6 md:p-8">
                  <Icon size={24} className="text-[#3b82f6] mb-5" />
                  <h4 className="text-lg font-bold text-[#1a365d] uppercase tracking-[0.08em] mb-3">{title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function SiteNav({
  path,
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  goTo,
  scrollTo,
}: {
  path: string;
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  goTo: (nextPath: string) => void;
  scrollTo: (id: string) => void;
}) {
  const isLanding = path === '/personal-externo';
  const navLinks = isLanding
    ? [
        { name: 'Servicio', href: '#hero-pe' },
        { name: 'Beneficios', href: '#beneficios-pe' },
        { name: 'Proceso', href: '#proceso-pe' },
        { name: 'Contacto', href: '#contacto' },
      ]
    : [
        { name: 'Quiénes somos', href: '#quienes' },
        { name: 'Especialidades', href: '#especialidades' },
        { name: 'Sectores', href: '#sectores' },
        { name: 'Clientes', href: '#clientes' },
        { name: 'Contacto', href: '#contacto' },
      ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled || isLanding ? 'py-3 bg-white/95 shadow-md border-b border-slate-100 backdrop-blur' : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          <button type="button" className="cursor-pointer" onClick={() => goTo('/')}>
            <Logo dark={!scrolled && !isLanding} className={scrolled || isLanding ? 'shadow-none px-0 py-0 bg-transparent' : ''} />
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {isLanding && (
              <button
                onClick={() => goTo('/')}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#1a365d] hover:text-[#3b82f6] transition-all"
              >
                <ArrowLeft size={14} />
                Inicio
              </button>
            )}
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href.replace('#', ''))}
                className={`text-[11px] font-bold uppercase tracking-[0.24em] transition-all hover:text-[#3b82f6] ${
                  scrolled || isLanding ? 'text-[#1a365d]' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contacto')}
              className={`px-7 py-3 rounded-none text-[11px] font-bold uppercase tracking-[0.26em] transition-all border ${
                scrolled || isLanding
                  ? 'bg-[#1a365d] text-white border-[#1a365d] hover:bg-[#2b6cb0]'
                  : 'bg-white text-[#1a365d] border-white hover:bg-transparent hover:text-white'
              }`}
            >
              Solicitar asesoramiento
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className={`lg:hidden p-2 transition-colors ${scrolled || isLanding ? 'text-[#1a365d]' : 'text-white'}`}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[90]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[100] flex flex-col shadow-2xl"
            >
              <div className="p-8 flex justify-between items-center border-b border-slate-100">
                <Logo className="shadow-none px-0 py-0 bg-transparent" />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-[#1a365d]">
                  <X size={32} />
                </button>
              </div>
              <div className="flex-1 py-10 px-10 flex flex-col gap-8">
                {isLanding && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      goTo('/');
                    }}
                    className="text-base font-bold text-[#1a365d] uppercase tracking-[0.18em] border-b border-slate-50 pb-4 hover:text-[#3b82f6] transition-colors text-left"
                  >
                    Volver al inicio
                  </button>
                )}
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollTo(link.href.replace('#', ''));
                    }}
                    className="text-base font-bold text-[#1a365d] uppercase tracking-[0.18em] border-b border-slate-50 pb-4 hover:text-[#3b82f6] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <div className="p-10 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollTo('contacto');
                  }}
                  className="w-full py-5 bg-[#1a365d] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#2b6cb0] transition-all"
                >
                  Solicitar asesoramiento
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function HomePage({ openModal, goToPersonalExterno }: { openModal: () => void; goToPersonalExterno: () => void }) {
  return (
    <>
      <section className="relative min-h-screen w-full flex items-center bg-[#0a192f] overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071628] via-[#071628]/90 to-[#071628]/55 z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Edificio corporativo"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-45 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div
            className="absolute inset-0 z-20 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-30 pt-16 lg:pt-20">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.95] tracking-tighter mb-8 uppercase"
            >
              Tus instalaciones <br />
              <span className="text-[#3b82f6]">en buenas manos.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-white/75 font-light mb-12 max-w-3xl leading-relaxed"
            >
              Desde una obra puntual hasta el mantenimiento diario. Siempre con la misma dedicación y compromiso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
            >
              <button
                onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 bg-[#3b82f6] text-white font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all hover:bg-[#2b6cb0]"
              >
                Ver especialidades
              </button>
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all hover:bg-white hover:text-[#1a365d]"
              >
                Contacto directo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="sectores" className="py-12 md:py-16 bg-[#1a365d] text-white border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-8">
            {sectors.map(({ title, Icon }) => (
              <div key={title} className="border border-white/10 bg-white/[0.03] px-4 py-5 md:px-5 md:py-6 min-h-[108px] flex flex-col justify-between">
                <Icon size={24} className="text-[#7fb2ff]" />
                <p className="text-sm md:text-[15px] font-bold uppercase tracking-[0.08em] leading-tight max-w-[180px]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quienes" className="py-20 sm:py-28 lg:py-36 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[#3b82f6] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">Presentación institucional</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a365d] uppercase tracking-tighter leading-none">
                  Quiénes somos
                </h2>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
                <p>
                  <strong className="text-slate-900 font-bold">AALTO MANTENIMIENTO</strong> surge en el año 2020 como respuesta a la creciente demanda de soluciones integrales de mantenimiento edilicio en empresas B2B de sectores como bodegas, hoteles, industrias, salud y centros comerciales.
                </p>
                <p>
                  Desde entonces nos responsabilizamos por el cuidado integral de sus espacios, permitiendo que cada empresa concentre recursos y esfuerzos en el desarrollo del negocio, con la tranquilidad de contar con el apoyo de un equipo profesional, eficaz y eficiente.
                </p>
                <p className="text-[#1a365d] font-medium">Con AALTO MANTENIMIENTO, sus instalaciones están en buenas manos.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-6 border-t border-slate-100">
                {values.map((value) => (
                  <div key={value} className="border border-slate-100 px-4 py-3 bg-slate-50">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a365d]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200" alt="Operario de mantenimiento" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -left-0 md:-left-8 bg-[#1a365d] text-white p-6 md:p-8 max-w-sm shadow-2xl">
                <p className="text-sm md:text-base font-light leading-relaxed">
                  Atención cercana, ejecución técnica y respaldo operativo para acompañar la continuidad de cada cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-6 items-stretch">
            <div className="bg-[#1a365d] p-8 md:p-10 text-white flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="text-[#7fb2ff] font-bold uppercase tracking-[0.35em] text-[10px] block mb-5">Lo que nos hace diferentes</span>
                <p className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Ofrecemos soluciones a medida que resuelven tus necesidades y potencian el éxito de tu empresa.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 text-white/70 text-sm uppercase tracking-[0.18em] font-bold">
                <ArrowRight size={16} />
                Enfoque B2B real
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-8">
              <Target size={28} className="text-[#3b82f6] mb-6" />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#1a365d] mb-4">Misión</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Impulsar el crecimiento empresarial de nuestros clientes transformando el mantenimiento edilicio en una ventaja competitiva.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8">
              <Globe size={28} className="text-[#3b82f6] mb-6" />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#1a365d] mb-4">Visión</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Ser reconocidos a nivel nacional como un aliado estratégico en mantenimiento edilicio, ampliando cobertura y capacidad de respuesta.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 flex flex-col justify-between gap-6">
              <ShieldCheck size={28} className="text-[#3b82f6]" />
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#1a365d] mb-4">Respaldo institucional</h3>
                <div className="flex items-center justify-between gap-4">
                  <img src={aemLogo} alt="AEM" className="h-16 w-16 object-contain rounded-sm border border-slate-200 bg-white p-2" />
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Socio de AEM, Asociación de Ejecutivos de Mendoza.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block">Unidades de servicio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a365d] uppercase tracking-tighter">Especialidades</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group bg-slate-50 border border-slate-100 p-8 md:p-12 flex flex-col hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-[#1a365d] flex items-center justify-center mb-8 group-hover:bg-[#3b82f6] transition-colors">
                <Construction size={30} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a365d] uppercase tracking-tighter mb-5">Mantenimiento edilicio</h3>
              <p className="text-slate-600 font-light mb-8 leading-relaxed text-base">
                Ejecución de tareas de mantenimiento programado según las necesidades de cada organización.
              </p>
              <p className="text-slate-500 font-light mb-10 leading-relaxed text-sm md:text-base">
                Cuidamos cada detalle de tus instalaciones para que funcionen de forma óptima, con un servicio confiable y adaptado a las necesidades de tu empresa.
              </p>
              <button
                onClick={openModal}
                className="mt-auto w-full sm:w-auto px-8 py-4 border-2 border-[#1a365d] text-[#1a365d] font-bold uppercase tracking-[0.28em] text-[10px] hover:bg-[#1a365d] hover:text-white transition-all"
              >
                Ver especialidades
              </button>
            </div>

            <div className="group bg-[#1a365d] p-8 md:p-12 flex flex-col hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:bg-[#3b82f6] transition-colors">
                <Users size={30} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-5">Personal externo (outsourcing)</h3>
              <p className="text-white/75 font-light mb-8 leading-relaxed text-base">
                Provisión de técnicos especializados integrados a la operación del cliente.
              </p>
              <ul className="space-y-3 mb-10 text-white/75 font-light text-sm md:text-base">
                <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1 text-[#7fb2ff]" />Integración a procesos y estándares internos.</li>
                <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1 text-[#7fb2ff]" />Un solo interlocutor para simplificar la gestión.</li>
                <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1 text-[#7fb2ff]" />Respaldo operativo, normativo y técnico.</li>
              </ul>
              <button
                onClick={goToPersonalExterno}
                className="mt-auto w-full sm:w-auto px-8 py-4 bg-white text-[#1a365d] font-bold uppercase tracking-[0.28em] text-[10px] hover:bg-[#3b82f6] hover:text-white transition-all"
              >
                Conocer servicio
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Obra civil', Icon: Construction },
              { title: 'Pintura', Icon: Paintbrush },
              { title: 'Plomería', Icon: Wrench },
              { title: 'Carpintería', Icon: Hammer },
              { title: 'Refrigeración', Icon: Thermometer },
            ].map(({ title, Icon }) => (
              <div key={title} className="bg-white border border-slate-100 p-6 min-h-[132px] flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <Icon size={24} className="text-[#3b82f6]" />
                <h4 className="text-base font-bold uppercase tracking-[0.08em] text-[#1a365d]">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes" className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 md:mb-16">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block">Prueba social</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a365d] uppercase tracking-tighter mb-4">Empresas que confían en AALTO</h2>
            <p className="text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
              Seleccionamos logos reales de clientes visibles en el brochure y en los materiales compartidos para reforzar la trayectoria y el respaldo de la empresa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {clients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

function PersonalExternoPage({ goHome }: { goHome: () => void }) {
  return (
    <>
      <section id="hero-pe" className="relative min-h-[88vh] w-full flex items-center bg-[#0a192f] overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071628] via-[#071628]/92 to-[#071628]/62 z-10" />
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1800"
            alt="Operación empresarial"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-35 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-3 text-[#7fb2ff] font-bold uppercase tracking-[0.35em] text-[10px] md:text-[11px] mb-6">
              <Users size={16} />
              Personal externo / outsourcing
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter uppercase mb-8">
              Personal externo confiable <span className="text-[#3b82f6]">para tu operación</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/75 font-light mb-10 max-w-3xl leading-relaxed">
              Integrá técnicos especializados a tu empresa con respaldo operativo, coordinación clara y una gestión más simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 bg-[#3b82f6] text-white font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all hover:bg-[#2b6cb0]"
              >
                Solicitar asesoramiento
              </button>
              <button
                onClick={() => document.getElementById('proceso-pe')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all hover:bg-white hover:text-[#1a365d]"
              >
                Ver cómo trabajamos
              </button>
            </div>
            <p className="text-white/55 text-sm md:text-base font-light mt-8 max-w-2xl">
              Ideal para empresas que necesitan cobertura técnica con orden, respuesta y un único interlocutor.
            </p>
            <button
              onClick={goHome}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mt-10 uppercase tracking-[0.22em] text-[11px] font-bold"
            >
              <ArrowLeft size={14} />
              Volver al inicio
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
            <div className="bg-slate-50 border border-slate-100 p-8 md:p-10">
              <span className="text-[#3b82f6] font-bold uppercase tracking-[0.35em] text-[10px] md:text-[11px] block mb-5">Problema operativo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] uppercase tracking-tighter mb-6">
                Cuando el soporte externo falla, la operación lo siente
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl">
                Demoras, mala coordinación, falta de seguimiento y personal que no se adapta al estándar de la empresa terminan generando más carga interna, menos previsibilidad y más desgaste operativo.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {landingPainPoints.map((item) => (
                <div key={item} className="border border-slate-100 bg-white p-6 min-h-[150px] flex flex-col justify-between">
                  <CheckCircle2 size={22} className="text-[#3b82f6]" />
                  <p className="text-[#1a365d] font-bold uppercase tracking-[0.08em] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios-pe" className="py-18 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.35em] text-[10px] md:text-[11px] block mb-5">Propuesta de valor</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a365d] uppercase tracking-tighter mb-6">
              Una solución operativa, no solo cobertura
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              En AALTO ponemos a disposición personal externo preparado para integrarse a la operación de cada cliente con criterio, respaldo y seguimiento. No se trata solo de cubrir una necesidad puntual, sino de sostener el funcionamiento del día a día con una estructura profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {landingBenefitCards.map(({ title, text, Icon }) => (
              <div key={title} className="bg-white border border-slate-100 p-7 md:p-8 min-h-[250px] flex flex-col justify-between hover:shadow-lg transition-all">
                <Icon size={28} className="text-[#3b82f6]" />
                <div>
                  <h3 className="text-lg font-bold text-[#1a365d] uppercase tracking-[0.08em] mb-4">{title}</h3>
                  <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-6">
              <span className="text-[#3b82f6] font-bold uppercase tracking-[0.35em] text-[10px] md:text-[11px] block">Coberturas según necesidad</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] uppercase tracking-tighter">
                Modalidades que se adaptan a tu contexto operativo
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                Definimos la modalidad de trabajo según el contexto de cada empresa, el tipo de operación y el nivel de soporte requerido.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {landingModes.map((mode) => (
                <div key={mode} className="border border-slate-100 bg-slate-50 p-6 md:p-7 min-h-[148px] flex flex-col justify-between">
                  <ChevronRight size={22} className="text-[#3b82f6]" />
                  <p className="text-[#1a365d] text-base md:text-lg font-bold uppercase tracking-[0.08em] leading-tight">{mode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#1a365d] text-white border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10 md:mb-12">
            <span className="text-[#7fb2ff] font-bold uppercase tracking-[0.35em] text-[10px] md:text-[11px] block mb-4">Sectores donde aplica</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">Aplicable a operaciones que necesitan continuidad y orden</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-8">
            {sectors.map(({ title, Icon }) => (
              <div key={title} className="border border-white/10 bg-white/[0.03] px-4 py-5 md:px-5 md:py-6 min-h-[108px] flex flex-col justify-between">
                <Icon size={24} className="text-[#7fb2ff]" />
                <p className="text-sm md:text-[15px] font-bold uppercase tracking-[0.08em] leading-tight max-w-[180px]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso-pe" className="py-18 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.35em] text-[10px] md:text-[11px] block mb-5">Implementación</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a365d] uppercase tracking-tighter mb-6">Así trabajamos</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {landingSteps.map(({ title, text }, index) => (
              <div key={title} className="bg-slate-50 border border-slate-100 p-7 md:p-8 min-h-[240px] flex flex-col justify-between">
                <div className="w-12 h-12 bg-[#1a365d] text-white flex items-center justify-center text-sm font-bold tracking-[0.14em]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a365d] uppercase tracking-[0.08em] mb-4">{title}</h3>
                  <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-6">
              <span className="text-[#3b82f6] font-bold uppercase tracking-[0.35em] text-[10px] md:text-[11px] block">Por qué empresas eligen AALTO</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] uppercase tracking-tighter">
                Un servicio pensado para sostener operación real
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                La diferencia no está solo en cubrir una necesidad, sino en hacerlo con criterio operativo, alineación y respaldo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Un único interlocutor para simplificar la gestión',
                'Integración a procesos y estándares internos',
                'Respaldo técnico, operativo y normativo',
                'Experiencia en entornos empresariales',
                'Estructura clara para sostener la operación',
                'Respuesta profesional y seguimiento',
              ].map((item) => (
                <div key={item} className="bg-white border border-slate-100 p-6 min-h-[148px] flex flex-col justify-between">
                  <Building2 size={22} className="text-[#3b82f6]" />
                  <p className="text-[#1a365d] text-sm md:text-base font-bold uppercase tracking-[0.08em] leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-[#1a365d] text-white p-8 md:p-12 lg:p-16 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="text-[#7fb2ff] font-bold uppercase tracking-[0.35em] text-[10px] md:text-[11px] block mb-5">Cierre comercial</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-5">
                Contanos qué necesitás y te ayudamos a definir la mejor cobertura
              </h2>
              <p className="text-white/70 text-lg font-light leading-relaxed max-w-3xl">
                Coordinamos una conversación breve para entender tu operación y proponerte una solución adecuada.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full lg:w-auto px-10 py-4 bg-white text-[#1a365d] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all hover:bg-[#3b82f6] hover:text-white"
            >
              Solicitar asesoramiento
            </button>
          </div>
        </div>
      </section>

      <ContactSection
        title="Solicitar asesoramiento"
        subtitle="Coordinamos una conversación breve para entender tu operación y proponerte una solución adecuada."
        formMessagePlaceholder="Contanos brevemente qué tipo de cobertura necesitás, en qué contexto y qué prioridad tiene."
      />
    </>
  );
}

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState(window.location.pathname === '/personal-externo' ? '/personal-externo' : '/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handlePopState = () => setPath(window.location.pathname === '/personal-externo' ? '/personal-externo' : '/');
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveModal(null);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [path]);

  const navigateTo = (nextPath: string) => {
    const safePath = nextPath === '/personal-externo' ? '/personal-externo' : '/';
    if (safePath !== window.location.pathname) {
      window.history.pushState({}, '', safePath);
    }
    setPath(safePath);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (path !== '/') {
      navigateTo('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  const pageTitle = useMemo(
    () =>
      path === '/personal-externo'
        ? 'Personal Externo para Empresas | AALTO Mantenimiento'
        : 'AALTO Mantenimiento | Soluciones de mantenimiento edilicio y personal externo',
    [path],
  );

  const pageDescription = useMemo(
    () =>
      path === '/personal-externo'
        ? 'Soluciones de personal externo para bodegas, hotelería, salud, industrias y retail. Técnicos especializados integrados a tu operación con respaldo profesional.'
        : 'AALTO Mantenimiento brinda soluciones integrales de mantenimiento edilicio y personal externo para empresas de Mendoza.',
    [path],
  );

  useEffect(() => {
    document.title = pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
  }, [pageTitle, pageDescription]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 scroll-smooth">
      <SiteNav
        path={path}
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        goTo={navigateTo}
        scrollTo={scrollTo}
      />

      {path === '/personal-externo' ? (
        <PersonalExternoPage goHome={() => navigateTo('/')} />
      ) : (
        <HomePage openModal={() => setActiveModal('mantenimiento')} goToPersonalExterno={() => navigateTo('/personal-externo')} />
      )}

      <Footer />
      <MantenimientoModal active={activeModal === 'mantenimiento'} onClose={() => setActiveModal(null)} />
    </div>
  );
}
