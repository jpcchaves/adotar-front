import { LAYOUT_OPTIONS } from '@/config/enums';
import logoIconImg from '@public/logo-short.svg';
import logoImg from '@public/logo.svg';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'Adotar',
  description:
    'Facilitating animal adoption through an simple and interactive web app.',
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HYDROGEN,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `Adotar | ${title}` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Adotar` : title,
      description,
      url: 'http://localhost:3000',
      siteName: 'Adotar', // https://developers.google.com/search/docs/appearance/site-names
      locale: 'en_US',
      type: 'website',
    },
  };
};
