import type { Metadata } from "next";
import IletisimPage from "./IletisimPage";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Nevo İnşaat ile iletişime geçin. Teklif alın, projeleriniz hakkında bilgi edinin. Ankara Kahramankazan.",
  alternates: { canonical: "https://nevoinsaat.com/iletisim" },
};

export default function Page() {
  return <IletisimPage />;
}
