/// <reference types="vite/client" />

// CSS module declarations
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Swiper CSS import
declare module 'swiper/css' {
  const content: string;
  export default content;
}

declare module 'swiper/css/autoplay' {
  const content: string;
  export default content;
}

