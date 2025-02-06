import { Loader2Icon } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <Loader2Icon className="text-blue-500 animate-spin" />
    </div>
  );
}
