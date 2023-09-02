import { ThemeModeToggle } from "@/components/atoms/buttons/ThemeModeToggle"
import { DataTable } from "@/components/atoms/table/DataTable"
import { Users, columns } from "@/utils/columns/UserColumn"
 
async function getData(): Promise<Users[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      full_name: 'Anang',
      status: "active",
      email: "anang@gmail.com",
    },
    {
      id: "728ed52f",
      full_name: 'Anang',
      status: "active",
      email: "anang@gmail.com",
    },
  ]
}
 
export default async function UsersConfig() {
  const data = await getData()
 
  return (
    <div className="container mx-auto py-10">
      <ThemeModeToggle/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}