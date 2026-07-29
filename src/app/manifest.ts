import { MetadataRoute } from "next";
 export const dynamic = "force-static";

  Yani başlangıcı şöyle olsun:

  import { MetadataRoute } from "next";

  export const dynamic = "force-static";

  export default function manifest(): MetadataRoute.Manifest {

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nevo İnşaat",
    short_name: "Nevo",
    description: "Ankara's Leading Construction Brand",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F19",
    theme_color: "#0B0F19",
    icons: [
      {
        src: "/images/logo1.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
