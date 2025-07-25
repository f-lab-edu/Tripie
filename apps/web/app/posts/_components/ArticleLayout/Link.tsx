'use client';
import { TextUnderLineAnimation, Link as TripieLink } from '@tripie-pyotato/design-system/@components';
import { Stack, Text } from '@tripie-pyotato/design-system/@core';

import useFilterLink from 'hooks/useFilterLink';

import { LinkProps } from 'models/Props';
import { useMemo } from 'react';

const ArticleLink = ({ item, regionId, dataUrl }: { item: LinkProps; regionId: string; dataUrl: string }) => {
  const { filteredLinks } = useFilterLink({ item, regionId, dataUrl });

  const links = useMemo(
    () => filteredLinks.map(item => ({ ...item, href: item.href.replace('regions', 'posts') })),
    [filteredLinks]
  );

  if (links.length === 0) {
    return null;
  }
  return (
    <Stack
      display="inline-flex"
      margin="none"
      direction="column"
      alignItems="start"
      justifyContent="start"
      flexWrapOn="wrap-xxl"
      gap="default"
    >
      {links.map(({ label, href }) => (
        <TextUnderLineAnimation key={href}>
          <TripieLink size="small" href={href}>
            <Text.Accented bold={true}>{label}</Text.Accented>
          </TripieLink>
        </TextUnderLineAnimation>
      ))}
    </Stack>
  );
};

export default ArticleLink;
