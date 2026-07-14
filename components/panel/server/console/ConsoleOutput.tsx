const logs = [
  "[12:01:22] [INFO] Starting Minecraft server...",
  "[12:01:23] [INFO] Loading world...",
  "[12:01:24] [INFO] Preparing spawn area...",
  "[12:01:25] [INFO] Loading plugins...",
  "[12:01:26] [INFO] Vault enabled.",
  "[12:01:27] [INFO] World loaded.",
  "[12:01:28] [INFO] Server started successfully.",
];

export default function ConsoleOutput() {
  return (
    <div className="h-[420px] overflow-y-auto rounded-xl bg-black p-4 font-mono text-sm text-green-400">
      {logs.map((log) => (
        <p key={log} className="mb-1">
          {log}
        </p>
      ))}
    </div>
  );
}