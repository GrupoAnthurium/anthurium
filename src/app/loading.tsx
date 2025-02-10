import { Loader2Icon } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="w-full h-[calc(100dvh-40px)] flex items-center justify-center">
      <Loader2Icon className="text-primary animate-spin" />
    </div>
  );
}
