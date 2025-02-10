'use server';
import { Card, Container, TripieImage } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import firestoreService from 'app/api/firebase';
import Nav from 'app/home/_components/nav/Nav';
import Title from 'app/regions/_components/Title';
import API from 'constants/api-routes';
import Style from './article-body.module.scss';
import ArticleBody from './ArticleBody';

const cx = classNames.bind(Style);

const Articles = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  const regionId = (await params).regionId;
  const articleId = (await params).articleId;

  let data = await firestoreService.getArticleDetails('article-details', regionId, articleId);

  const blurredThumbnail = await fetch(
    'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${data?.metadataContents?.image?.sizes?.full?.url}`
  ).then(v => v.json());

  if (data?.body == null) {
    return <>{JSON.stringify(data)}</>;
  }

  const dynamicBlurDataUrl = await Promise.all(
    data.body.map(async v => {
      if (v.type === 'embedded') {
        return {
          ...v,
          value: await Promise.all(
            v.value.entries.map(async entry => {
              return await Promise.all(
                entry.map(async item => {
                  if (item.type === 'images') {
                    return {
                      ...item,
                      value: await Promise.all(
                        item.value.images.map(async image => {
                          const blurData = await fetch(
                            `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes?.small_square?.url}`
                          ).then(res => res.json());

                          return {
                            ...image,
                            blurData,
                          };
                        })
                      ),
                    };
                  }
                  return item;
                })
              );
            })
          ),
        };
      }
      if (v.type === 'pois') {
        return {
          ...v,
          value: {
            pois: await Promise.all(
              v.value.pois.map(async poi => {
                return {
                  ...poi,
                  source: {
                    ...poi.source,
                    image: {
                      ...poi.source.image,
                      blurData: await fetch(
                        `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${poi.source.image.sizes.small_square?.url}`
                      ).then(res => res.json()),
                    },
                  },
                };
              })
            ),
          },
        };
      }
      if (v.type === 'images') {
        return {
          ...v,
          value: {
            images: await Promise.all(
              v.value.images.map(async image => {
                return {
                  ...image,
                  blurData: await fetch(
                    `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes.small_square?.url}`
                  ).then(res => res.json()),
                };
              })
            ),
          },
        };
      }
      return v;
    })
  );

  return (
    <>
      <Nav />
      <Card.Content className={cx('fit-content')}>
        <Container margin="m" applyMargin="top-left-right">
          <Title withNavigation={false}>{data?.metadataContents?.title}</Title>
        </Container>
        <Container margin="m" applyMargin="all" className={cx('img-container')}>
          <TripieImage
            src={data?.metadataContents?.image?.sizes?.full?.url}
            alt={`${data?.metadataContents?.image?.sizes?.full?.url}의 썸네일`}
            blurDataURL={blurredThumbnail?.data}
            sizes="large"
          />
        </Container>
        <Container margin="m" applyMargin="left-right">
          <ArticleBody items={dynamicBlurDataUrl} regionId={regionId} dataUrl={data.id} />
        </Container>
      </Card.Content>
    </>
  );
};

export default Articles;
