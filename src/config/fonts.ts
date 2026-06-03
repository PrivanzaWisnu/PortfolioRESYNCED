export const DEFAULT_FONT_ID = 'poppins'

export const FONT_SIZES = ['small', 'default', 'large', 'extra-large'] as const;

export interface FontConfig {
  id: string
  name: string
  fontFamily: string
  load?: {
    type: 'link' | 'import' | 'font-face'
    href?: string
    url?: string
    css?: string
  }
}

// Di sini kita daftarkan font-font estetik dari Google Fonts
export const fonts: Record<string, FontConfig> = {
  poppins: {
    id: 'poppins',
    name: 'Poppins (Default)',
    fontFamily: '"Poppins", sans-serif',
    load: {
      type: 'import',
      url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
    }
  },
  quicksand: {
    id: 'quicksand',
    name: 'Quicksand',
    fontFamily: '"Quicksand", sans-serif',
    load: {
      type: 'import',
      url: 'https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap'
    }
  },
  roboto: {
    id: 'roboto',
    name: 'Roboto',
    fontFamily: '"Roboto", sans-serif',
    load: {
      type: 'import',
      url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
    }
  },
  playfair: {
    id: 'playfair',
    name: 'Playfair Display',
    fontFamily: '"Playfair Display", serif',
    load: {
      type: 'import',
      url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap'
    }
  }
}

export function getFontById(id: string) {
  return fonts[id]
}