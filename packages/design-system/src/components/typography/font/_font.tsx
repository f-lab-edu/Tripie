import localFont from 'next/font/local';

export const maruBuri = localFont({
  src: [
    {
      //   path: "",
      path: '../../../static/fonts/MaruBuri-Regular.woff',
      //   path: "../../../../../assets/fonts/MaruBuri-Regular.woff",
      style: 'normal',
    },
  ],
});

export default maruBuri;
