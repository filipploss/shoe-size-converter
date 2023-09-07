import Converter from "./Converter";

export const metadata = {
  title: "Find Your Perfect Fit: The Shoe Size Converter",
  description:
    "Navigate the world of online shopping effortlessly with our shoe size converter, ensuring you never experience 'too tight' or 'too loose' again.",
};

export default async function Page() {
  return <Converter />;
}