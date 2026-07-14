import ConsoleHeader from "./ConsoleHeader";
import ConsoleOutput from "./ConsoleOutput";
import ConsoleInput from "./ConsoleInput";

export default function ServerConsole() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
      <ConsoleHeader />

      <div className="mt-6">
        <ConsoleOutput />
      </div>

      <ConsoleInput />
    </div>
  );
}