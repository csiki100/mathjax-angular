export interface MathjaxContent {
  latex?: string;
  mathml?: string;
}
export interface UpdateValue<T> {
  value: T;
  order: number;
}

export const isMathjax = /(?:\$|\\\(|\\\[|\\begin\{.*?})/;
//export const isMathJax = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
export const mathjax_url =
  'https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js';

export const MathjaxDefaultConfig = {
  loader: {
    load: ['output/svg', '[tex]/require', '[tex]/ams'],
  },
  tex: {
    inlineMath: [['$', '$']],
    //displayMath: [['$$', '$$']],
    packages: ['base', 'require', 'ams'],
  },
  svg: { fontCache: 'global' },
};
//
export class RootMathjaxConfig {
  config?: { [name: string]: any };
  src?: string;
}