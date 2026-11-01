import { PORTAL } from "@/constants/helper";
export default function Loading() {
  return (
    <div className="loading" role="status">
      {PORTAL.loading}
    </div>
  );
}
