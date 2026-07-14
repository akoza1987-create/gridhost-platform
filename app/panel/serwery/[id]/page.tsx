import { notFound } from "next/navigation";

import { servers } from "@/data/servers";

import ServerLayout from "@/components/panel/server/ServerLayout";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ServerPage({
  params,
}: Props) {
  const { id } = await params;

  const server = servers.find(
    (item) => item.id === Number(id)
  );

  if (!server) {
    notFound();
  }

  return <ServerLayout server={server} />;
}