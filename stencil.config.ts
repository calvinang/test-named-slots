import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'k12-template',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  copy: [{ src: '**/*.scss' }],
  plugins: [
    sass({
      includePaths: ['./node_modules/@k12/k12-commons/k12-gradebook-ui-common/sass/']
    })
  ]
};
