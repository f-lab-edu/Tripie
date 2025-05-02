'use client';
import { TextUnderLineAnimation, Link as TripieLink } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';

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
    <Stack margin="none" alignItems="start" justifyContent="start" flexWrapOn="wrap-xl" gap="default">
      {links.map(({ label, href }) => (
        <TextUnderLineAnimation key={href}>
          <TripieLink size="small" href={href}>
            {label}
          </TripieLink>
        </TextUnderLineAnimation>
      ))}
    </Stack>
  );
};

export default ArticleLink;
