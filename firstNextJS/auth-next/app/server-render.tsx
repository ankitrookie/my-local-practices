import { getServerSession } from "next-auth"

export const ServerRender = async () => {
  const session = await getServerSession()
  return <div>
    {JSON.stringify(session)}
  </div>
}
