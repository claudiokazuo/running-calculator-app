import NextHead from "next/head";

export default function Head({ children }) {
  return (
    <NextHead>       
      <title>{children}</title>
    </NextHead>
  );
}
