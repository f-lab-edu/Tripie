// 'use client';
// import { Container, Text } from '@tripie-pyotato/design-system';
// import classNames from 'classnames/bind';
// import { useRef, useState } from 'react';
// import { InView } from 'react-intersection-observer';
// import Card from 'shared/components/Card/Card';
// import Icon from 'shared/components/Icon/Icon';
// import Style from './images.module.scss';

// export type ArticleImageUrl = { url: string };
// export type ArticleImage = {
//   cloudinaryBucket: string;
//   cloudinaryId: string;
//   frame?: string;
//   height: number;
//   id: string;
//   metadata: { format: string };
//   source: {};
//   sourceUrl: string;
//   type: string;
//   width: number;
//   sizes: { full: ArticleImageUrl; large: ArticleImageUrl; small_square: ArticleImageUrl };
// };

// export type ImageProps = { type: 'images'; value: { images: ArticleImage[] } };

// const cx = classNames.bind(Style);

// const ArticleImages = ({ item }: { item: ImageProps }) => {
//   const { images } = item.value;
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // const handleScroll = useCallback(
//   //   ({ index = currentIndex, direction }: { index?: number; direction?: 'next' | 'prev' }) => {
//   //     const container = carouselRef.current;
//   //     console.log(container);
//   //     if (container != null) {
//   //       const items = container.querySelectorAll('div');
//   //       let newIndex = currentIndex;

//   //       if (index != null) {
//   //         setCurrentIndex(index);

//   //         items[index]?.scrollIntoView({
//   //           behavior: 'smooth',
//   //           block: 'nearest',
//   //           inline: 'end',
//   //         });
//   //       } else {
//   //         if (direction === 'next') {
//   //           newIndex = currentIndex < items.length - 1 ? newIndex + 1 : 0;
//   //         } else {
//   //           newIndex = currentIndex > 0 ? newIndex - 1 : items.length - 1;
//   //         }

//   //         setCurrentIndex(newIndex);

//   //         items[newIndex]?.scrollIntoView({
//   //           behavior: 'smooth',
//   //           block: 'nearest',
//   //           inline: 'end',
//   //         });
//   //       }
//   //     }
//   //   },
//   //   [carouselRef, currentIndex]
//   // );

//   // useEffect(() => {
//   //   const container = carouselRef.current;

//   //   if (container != null) {
//   //     const childNodes = container.childNodes; // Access NodeListOf<ChildNode>
//   //     if (childNodes) {
//   // container.scrollIntoView({
//   //   behavior: 'smooth', // Smooth scrolling
//   //   block: 'nearest', // Align to the nearest edge
//   //   inline: 'center',
//   // });
//   //     }
//   //   }
//   // }, [currentIndex]);

//   return (
//     // <InView>
//     //   {({ inView, ref }) => (
//     //     <Container ref={ref} margin="none" className={cx('next-button-wrap')}>
//     //       <Container
//     //         applyMargin="top-bottom"
//     //         key={JSON.stringify(images)}
//     //         className={cx(images.length > 1 ? 'carousel' : null)}
//     //       >
//     //         {images.length > 1 && inView ? (
//     //           <Icon.Scroll next={false} className={cx('prev')} onTapStart={() => handleScroll('prev')} />
//     //         ) : null}
//     //         <Container
//     //           ref={carouselRef}
//     //           margin="none"
//     //           className={cx(images.length > 1 ? ['flex-items', 'carousel-inner'] : null)}
//     //         >
//     //           {images.map(({ sizes, sourceUrl }, index) => (
//     //             <Container className={cx('carousel-item')} margin="none" key={sizes.full.url}>
//     //               <Card.Content className={cx('img-wrap')}>
//     //                 <img src={sizes.full.url} key={sizes.full.url} alt={sizes.full.url} />
//     //                 <Container className={cx('img-source')} margin="none">
//     //                   {sourceUrl == null ? null : <Text className={cx('source-url')}>{`출처 ${sourceUrl}`}</Text>}
//     //                 </Container>
//     //               </Card.Content>
//     //             </Container>
//     //           ))}
//     //         </Container>
//     //         {images.length > 1 && inView ? (
//     //           <Icon.Scroll className={cx('next')} onTapStart={() => handleScroll('next')} />
//     //         ) : null}
//     //       </Container>
//     //     </Container>
//     //   )}
//     // </InView>
//     // <InView>
//     //   {({ inView, ref }) => (
//     //     <Container ref={ref} margin="none" className={cx('next-button-wrap')}>
//     //       <Container
//     //         applyMargin="top-bottom"
//     //         key={JSON.stringify(images)}
//     //         className={cx(images.length > 1 ? 'carousel' : null)}
//     //       >
//     //         {images.length > 1 && inView ? (
//     //           <Icon.Scroll next={false} className={cx('prev')} onTapStart={() => handleScroll({ direction: 'prev' })} />
//     //         ) : null}
//     //         <Container
//     //           ref={carouselRef}
//     //           margin="none"
//     //           className={cx(images.length > 1 ? ['flex-items', 'carousel-inner'] : null)}
//     //         >
//     //           {images.map(({ sizes, sourceUrl }, index) => (
//     //             <InView
//     //               key={sizes.full.url}
//     //               className={cx('carousel-item')}
//     //               onChange={(inView, entry) => {
//     //                 if (inView) {
//     //                   if (entry.isIntersecting) {
//     //                     setCurrentIndex(index + 1);
//     //                   }
//     //                 }
//     //               }}
//     //             >
//     //               {/* {({ inView, ref }) => ( */}
//     //               {/* <Container className={cx('carousel-item')} margin="none"> */}
//     //               <Card.Content className={cx('img-wrap')}>
//     //                 <img src={sizes.full.url} key={sizes.full.url} alt={sizes.full.url} ref={ref} />
//     //                 <Container className={cx('img-source')} margin="none">
//     //                   {sourceUrl == null ? null : <Text className={cx('source-url')}>{`출처 ${sourceUrl}`}</Text>}
//     //                 </Container>
//     //               </Card.Content>
//     //               {/* </Container>/ */}
//     //               {/* )} */}
//     //             </InView>
//     //           ))}
//     //         </Container>
//     //         {images.length > 1 && inView ? (
//     //           <Icon.Scroll className={cx('next')} onTapStart={() => handleScroll({ direction: 'next' })} />
//     //         ) : null}
//     //       </Container>
//     //     </Container>
//     //   )}
//     // </InView>

//     <InView>
//       {({ inView, ref }) => (
//         <Container ref={ref} margin="none" className={cx('next-button-wrap')}>
//           <Container
//             applyMargin="top-bottom"
//             key={JSON.stringify(images)}
//             className={cx(images.length > 1 ? 'carousel' : null)}
//           >
//             {images.length > 1 && inView ? (
//               <Icon.Scroll
//                 next={false}
//                 className={cx('prev')}
//                 // onTapStart={() => handleScroll({ direction: 'prev' })}
//               />
//             ) : null}
//             <Container
//               ref={carouselRef}
//               margin="none"
//               className={cx(images.length > 1 ? ['flex-items', 'carousel-inner'] : null)}
//             >
//               {images.map(({ sizes, sourceUrl }, index) => (
//                 <Container className={cx('carousel-item')} margin="none" key={sizes.full.url}>
//                   <InView
//                     onChange={(inView, entry) => {
//                       if (inView) {
//                         setCurrentIndex(index);
//                         console.log('scrollIntoView', entry);

//                         entry.target.scrollIntoView({
//                           behavior: 'smooth',
//                           // block: 'nearest', // Align to the nearest edge
//                           // inline: 'end',
//                         });
//                         // }
//                       }
//                     }}
//                   >
//                     {({ inView, ref }) => (
//                       <Card.Content className={cx('img-wrap')}>
//                         <img src={sizes.full.url} key={sizes.full.url} alt={sizes.full.url} ref={ref} />
//                         <Container className={cx('img-source')} margin="none">
//                           {sourceUrl == null ? null : <Text className={cx('source-url')}>{`출처 ${sourceUrl}`}</Text>}
//                         </Container>
//                       </Card.Content>
//                     )}
//                   </InView>
//                 </Container>
//               ))}
//             </Container>
//             {images.length > 1 && inView ? (
//               <Icon.Scroll
//                 className={cx('next')}
//                 // onTapStart={() => handleScroll({ direction: 'next' })}
//               />
//             ) : null}
//           </Container>
//         </Container>
//       )}
//     </InView>
//   );
// };

// export default ArticleImages;
