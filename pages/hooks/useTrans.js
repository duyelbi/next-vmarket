import { useRouter } from "next/router";
import en from "../../public/locales/en.js";
import vi from "../../public/locales/vi.js";

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === "vi" ? vi : en;

  return trans;
};

export default useTrans;
