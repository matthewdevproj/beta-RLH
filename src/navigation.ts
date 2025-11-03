import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/.'),
    },
    {
      text: 'Nosotros',
      links: [
        {
          text: 'Nuestra Empresa',
          href: getPermalink('/about'),
        },
        {
          text: 'Términos de Servicio',
          href: getPermalink('/terms'),
        },
        {
          text: 'Política de Privacidad',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Asesoría y Auditoría Tributaria',
          href: getPermalink('/servicios/asesoria-tributaria'),
        },
        {
          text: 'Servicios Contables y de Planillas',
          href: getPermalink('/servicios/servicios-contables'),
        },
        {
          text: 'Asesoría Legal',
          href: getPermalink('/servicios/asesoria-legal'),
        },
        {
          text: 'Auditoría Financiera',
          href: getPermalink('/servicios/auditoria-financiera'),
        },
        {
          text: 'Consultoría en NIIF',
          href: getPermalink('/servicios/consulta-niif'),
        },
        {
          text: 'Capacitaciones In-House',
          href: getPermalink('/servicios/capacitaciones-in-house'),
        },
        {
          text: 'Otros Servicios',
          href: getPermalink('/servicios/otros-servicios'),
        },
      ],
    },
    {
      text: 'Boletines',
      href: getBlogPermalink(),
    },
  ],

  actions: [{ text: 'Contáctanos', href: '/#contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Nuestros Servicios',
      links: [
        { text: 'Asesoría y Auditoría Tributaria', href: getPermalink('/servicios/asesoria-tributaria') },
        { text: 'Servicios Contables y de Planillas', href: getPermalink('/servicios/servicios-contables') },
        { text: 'Asesoría Legal', href: getPermalink('/servicios/asesoria-legal') },
        { text: 'Auditoría Financiera', href: getPermalink('/servicios/auditoria-financiera') },
        { text: 'Consultoría en NIIF', href: getPermalink('/servicios/consulta-niif') },
        { text: 'Capacitaciones In-House', href: getPermalink('/servicios/capacitaciones-in-house') },
        { text: 'Otros Servicios', href: getPermalink('/servicios/otros-servicios') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Nosotros', href: getPermalink('/about') },
        { text: 'Contacto', href: getPermalink('/contact') },
        { text: 'Boletines', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Preguntas Frecuentes', href: getPermalink('/#faqs') },
        { text: 'Solicitar Cotización', href: getPermalink('#contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Términos de Servicio', href: getPermalink('/terms') },
        { text: 'Política de Privacidad', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos de Servicio', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  
  footNote: `
    © ${new Date().getFullYear()} <strong>RLH Consultoria & Asesoria Contable </strong>. Todos los derechos reservados.  
    Diseñado y desarrollado con ❤️ por <a class="text-blue-600 underline dark:text-muted" href="#">Ch'askode</a>.
  `,
};