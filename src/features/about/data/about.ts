import {
  IconBolt,
  IconBrandTypescript,
  IconBrandVue,
  IconBulb,
  IconCode,
  IconDatabase,
  IconHeart,
  IconNotebook,
  IconPalette,
  IconPlus,
  IconShield,
  IconTarget,
  IconUsers,
} from '@tabler/icons-vue'

export const miniFeatures = [
  {
    icon: IconTarget,
    title: 'Simplicidad',
    description: 'Interfaz intuitiva y fácil de usar',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    icon: IconBolt,
    title: 'Velocidad',
    description: 'Captura ideas al instante',
    iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
  },
  {
    icon: IconShield,
    title: 'Privacidad',
    description: 'Tus datos permanecen contigo',
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    icon: IconBulb,
    title: 'Creatividad',
    description: 'Organiza ideas sin límites',
    iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600',
  },
]

export const techs = [
  {
    icon: IconBrandVue,
    title: 'Vue 3 & Vite',
    description: 'Interfaz moderna y reactiva',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
  },
  {
    icon: IconBrandTypescript,
    title: 'TypeScript',
    description: 'Código robusto y confiable',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: IconPalette,
    title: 'Tailwind + DaisyUI',
    description: 'Diseño elegante y responsive',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-600',
  },
  {
    icon: IconDatabase,
    title: 'LocalStorage',
    description: 'Almacenamiento local seguro',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-600',
  },
]

export const reasons = [
  {
    icon: IconShield,
    title: '100% Local',
    description: 'Tus notas se guardan en tu navegador. Sin servidores externos ni riesgos.',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: IconBolt,
    title: 'Súper Rápido',
    description: 'Escribe y busca al instante en todas tus notas.',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
  },
  {
    icon: IconHeart,
    title: 'Gratis Siempre',
    description: 'Sin suscripciones ni funciones premium. Todo disponible siempre.',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600',
  },
  {
    icon: IconCode,
    title: 'Código Abierto',
    description: 'Transparencia total: revisa cómo funciona la aplicación.',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-600',
  },
  {
    icon: IconUsers,
    title: 'Para Todos',
    description: 'Estudiantes, profesionales o escritores: NotasApp se adapta a ti.',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-600',
  },
  {
    icon: IconBulb,
    title: 'Innovación',
    description: 'Mejoramos basándonos en lo que realmente necesitas.',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-600',
  },
]

export const buttonsAbout = [
  {
    label: 'Crear mi primera nota',
    to: '/notes',
    icon: IconPlus,
    style:
      'btn btn-white flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full w-full sm:w-auto transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-white/40',
  },
  {
    label: 'Volver al inicio',
    to: '/',
    icon: IconNotebook,
    style:
      'btn btn-outline text-white border-white/40 flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full w-full sm:w-auto transition-transform duration-300 hover:scale-105 hover:bg-white/10',
  },
]
