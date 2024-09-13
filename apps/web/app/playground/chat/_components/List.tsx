'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function List({ items, renderItem }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {items.map((item, index) => {
        const isHighlighted = index === selectedIndex;
        return renderItem(item, isHighlighted);
      })}
      {JSON.stringify(items)}
      <button
        onClick={() => {
          setSelectedIndex(i => (i + 1 < items.length ? i + 1 : i));
          router.push(pathname + '?' + createQueryString('item', items[selectedIndex]?.title));
        }}
      >
        Next
      </button>
    </div>
  );
}
