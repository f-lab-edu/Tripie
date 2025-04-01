import localFont from 'next/font/local';

const maruBuri = localFont({
  src: [
    {
      path: '../static/fonts/MaruBuri-Regular.woff2',
      style: 'normal',
    },
  ],
});

export default maruBuri;
