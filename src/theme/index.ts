export interface AppTheme {
  pallette: {
    primary: string;
    text: string;
    gray: string;
    shadow: string;
    light: string;
    lightest: string,
    error: string,
  };
}

export const defaultTheme: AppTheme = {
  pallette: {
    primary: '#0969DA',
    text: '#000000',
    gray: '#3F434B',
    shadow: '#0f0f0f',
    light: '#ffffff',
    lightest: '#EBEFF4',
    error: '#E32636',
  },
};
