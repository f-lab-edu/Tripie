// 'use client';
// import { useEffect, useRef, useState } from 'react';

// import classNames from 'classnames/bind';
// import { ArticleImage } from 'models/Article';

// import Style from './images.module.scss';

// export type ImageProps = { type: 'images'; value: { images: ArticleImage[] } };

// const cx = classNames.bind(Style);

// const InstaLikeCarousel = ({ images }: { images: string[] }) => {
//   const containerRef = useRef(null);
//   const [focusedIndex, setFocusedIndex] = useState(0);

//   useEffect(() => {
//     const observerOptions = {
//       root: containerRef.current, // observe within the carousel container
//       threshold: 0.6, // 60% of the item is visible
//     };

//     // Callback for the observer
//     const observerCallback = entries => {
//       entries.forEach(entry => {
//         // If the entry is mostly visible, update the focused index
//         if (entry.isIntersecting) {
//           const index = Number(entry.target.getAttribute('data-index'));
//           setFocusedIndex(index);
//         }
//       });
//     };

//     // Create the observer
//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     if (containerRef?.current != null) {
//       // Observe each carousel item
//       const items = containerRef.current.querySelectorAll('.insta-like-carousel-item');
//       items.forEach(item => observer.observe(item));
//     }

//     // Clean up the observer on unmount
//     return () => {
//       observer.disconnect();
//     };
//   }, [images, containerRef]);

//   return (
//     <div className={cx('insta-like-carousel-container')} ref={containerRef}>
//       {images.map((imgUrl, idx) => (
//         <div
//           key={imgUrl + idx}
//           data-index={idx}
//           className={cx(`insta-like-carousel-item`, focusedIndex === idx ? 'focused' : '')}
//           style={{ backgroundImage: `url(${imgUrl})` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default InstaLikeCarousel;
