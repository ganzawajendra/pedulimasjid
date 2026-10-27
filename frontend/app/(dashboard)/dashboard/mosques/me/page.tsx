import MosqueMineView from "./mosque-mine";
import { getMyMosque } from "@/lib/data";

export default async function MosqueMePage() {
  const mosques = await getMyMosque();
  const mosque = mosques.length > 0 ? mosques[0] : null;

  return <MosqueMineView mosque={mosque} />;
}