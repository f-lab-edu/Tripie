import firestoreService from 'app/api/firebase';
import { ReactNode } from 'react';
import { RegionArticleData } from '../_components/RegionCard';

export async function generateStaticParams() {
  const posts: RegionArticleData[] = await firestoreService.getList('region-articles2');

  return posts.map(post => ({
    id: String(post.regionId),
  }));
}

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
  // params: Promise<{ regionId: string }>;
}>) {
  // const { regionId } = await params;
  // const parsedRegionId = decodeURIComponent(regionId);
  // const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
  //   item =>
  //     TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
  //     TRIPIE_REGION_BY_LOCATION[parsedRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION]?.[0]
  // )?.[0];

  // const posts = await pureRegionArticles(parsedRegionId);

  // const posts: RegionArticleData[] = await firestoreService.getList('region-articles2');
  // const regionData = posts.filter((item: RegionArticleData) => item.regionId === selectedRegion)?.[0]?.data;

  return (
    <>
      {/* <Container margin="xl" applyMargin="top" padding="none">
        <RegionTitle
          regionId={parsedRegionId}
          city={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS]}
        />
      </Container>
      <Suspense fallback={<Loading />}>
        <RegionSelect selected={parsedRegionId} selectedRegion={selectedRegion} />
      </Suspense> */}
      {children}
    </>
  );
}
