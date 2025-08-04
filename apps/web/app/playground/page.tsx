import API from 'constants/api-routes';
import Image from 'next/image';

import { Container } from '@tripie-pyotato/design-system/@core';

const Playground = async () => {
  const urls = [
    // 'https://res.cloudinary.com/dbzzletpw/image/upload/f_auto,q_auto,c_fill,w_256,h_256/fl_keep_iptc/fl_attachment/67557e76-66eb-44b1-bd7a-7b44e006a3c9',
    'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/67557e76-66eb-44b1-bd7a-7b44e006a3c9',
    'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/6f50e645-a145-4b59-8b10-8fa0795c353c',
    'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/4e1c207d-c18c-4bc4-9b1b-580eed5b13b4',
    'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/b76cbacc-4aa1-4c68-ad09-de7cb1c0c3c3',
    'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/1a509128-a476-4f89-aef5-fcf74636555b',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/7e64d2ff-8dec-423f-9a9c-81955022a5a2',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/cf78a008-234d-484d-8187-b10ed3802897',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/303c550e-dd14-444a-8247-5c3f49d5ac30',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/5e5b3445-8325-47ed-8da9-dbddb45f9ada',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/bac16850-40f0-45c2-bd7a-2e65c0ef2860',
    ///
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/3d5a78b2-4e00-465a-9b6b-27ef89cebb10',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/d18573e4-abaa-4ab5-8803-b9a12d3e5240',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/339baf17-96f4-4dfe-bb5b-dcaf575b9203',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/2aa2973c-e79b-4bfd-bb1a-dc82be5171c1',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/67557e76-66eb-44b1-bd7a-7b44e006a3c9',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/41b0d9ae-99d1-483a-9142-a82f73f5de12',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/7ce101b7-1335-4f3a-90ed-a3ab5cfb5cd0',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/98d44e22-91bf-4dde-a8ed-ca32dab5ae37',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/4343c3e1-7c99-4595-a1fe-2279e8ca873a',
    // 'https://media.tripie-api.shop/dbzzletpw/image/upload/q_auto,c_fill,f_auto,h_256,w_256/8f9323ff-c4cb-4888-a210-b33662359920',
  ];

  const imageBlurUrls = await Promise.all(
    urls.map(
      url =>
        fetch(`${API.BASE_URL}/api/blur-image?url=${encodeURIComponent(url)}`)
          .then(res => res.json())
          .then(data => data.data) // assuming the blur SVG is in `data.data`
    )
  );

  return (
    <>
      <Container display="inline-flex">
        {urls.map((item, index) => (
          <Image
            src={item}
            key={item}
            alt={`${item} 이미지`}
            placeholder="blur"
            // loading={index >= 2 ? 'lazy' : 'eager'}
            // priority={index < 2}
            blurDataURL={imageBlurUrls[index]}
            width={256}
            height={256}
          />
        ))}
      </Container>
      {/* <Container display="inline-flex">
        {urls.map((item, index) => (
          <TripieBlurImage src={item.replace('q_auto,', 'e_blur:2000,q_1,')} key={item} index={index} />
        ))}
      </Container> */}
    </>
  );
};

export default Playground;
