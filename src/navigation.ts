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
          text: 'Contacto',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
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
    {
      text: 'Contáctanos',
          href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted"  "> Arthelokyo</a> · All rights reserved.
  `,
};
