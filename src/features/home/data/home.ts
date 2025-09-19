import {
  IconCalendar,
  IconSearch,
  IconShield,
  IconStar,
  IconTag,
  IconZoomPan,
  IconBook,
  IconPlus,
} from '@tabler/icons-vue'

export const baseBtn = `
  btn flex items-center justify-center gap-2
  px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold
  rounded-full w-full sm:w-auto
  transition-transform duration-300 hover:scale-105
`

export const features = [
  {
    title: 'Búsqueda inteligente',
    description: 'Encuentra cualquier nota al instante. Busca por título, contenido o etiquetas.',
    icon: IconSearch,
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    title: 'Organización con etiquetas',
    description:
      'Categoriza tus notas con etiquetas personalizadas. Mantén todo organizado y fácil de encontrar.',
    icon: IconTag,
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    title: 'Notas favoritas',
    description: 'Marca tus notas más importantes como favoritas para acceder a ellas rápidamente.',
    icon: IconStar,
    iconBg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  },
  {
    title: 'Guardado automático',
    description:
      'Nunca pierdas tus ideas. Todas tus notas se guardan automáticamente mientras escribes.',
    icon: IconZoomPan,
    iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
  },
  {
    title: 'Historial completo',
    description:
      'Ve cuándo creaste y modificaste cada nota. Mantén un registro completo de tu actividad.',
    icon: IconCalendar,
    iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  },
  {
    title: 'Datos seguros',
    description:
      'Tus notas se almacenan de forma segura en tu navegador. Privacidad y control total sobre tus datos.',
    icon: IconShield,
    iconBg: 'bg-gradient-to-br from-red-500 to-red-600',
  },
]

export const stats = [
  { icon: IconBook, color: 'text-blue-600', label: 'Notas ilimitadas' },
  { icon: IconSearch, color: 'text-green-600', label: 'Búsqueda rápida' },
  { icon: IconTag, color: 'text-purple-600', label: 'Etiquetas' },
  { icon: IconZoomPan, color: 'text-orange-600', label: 'Auto guardado' },
]

export const buttonsHome = [
  {
    label: 'Comenzar ahora',
    to: '/notes',
    icon: IconPlus,
    style: `
      ${baseBtn}
      btn-primary shadow-lg
    `,
  },
]
