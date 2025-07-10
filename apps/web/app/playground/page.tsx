import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Metadata Test Page',
    description: 'This should appear in the <head>!',
  };
};

const Playground = () => {
  return (
    <div>Hello from test page!</div>
    // <Stack direction="column">
    //   <AnimatedText.Jump>jump 1</AnimatedText.Jump>
    //   <AnimatedText.Jump>jump 2</AnimatedText.Jump>
    //   <AnimatedText.Jump>jump 3</AnimatedText.Jump>
    //   <AnimatedText.Jump>jump 4</AnimatedText.Jump>
    // </Stack>
  );
};

export default Playground;
