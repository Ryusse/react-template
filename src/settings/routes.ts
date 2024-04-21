export type DefaultPagesType = {
  home: string;
  about: string;
};

export const DEFAULT_PAGES: DefaultPagesType = {
  home: '/',
  about: 'about',
};

export class CustomRoutesDefault {
  static home(): string {
    return `${DEFAULT_PAGES.home}`;
  }

  static about(): string {
    return `/${DEFAULT_PAGES.about}`;
  }
}
