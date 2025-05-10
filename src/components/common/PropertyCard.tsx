'use client'
import { DeletePropertyAction } from "@/action/PropertyAction"
import { Database } from "@/utils/Database"
import {  Card, DropdownMenu } from "@radix-ui/themes"
import { MoreVertical } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { enqueueSnackbar } from "notistack"

type PropertyCardProps = {
 item:Database["public"]["Tables"]["Property"]['Row']
}

export default function PropertyCard({
    item
 
}: PropertyCardProps) {

    const router =useRouter()

    const handleDeleteProperty=async ()=>{
       const status= await DeletePropertyAction({id:item.id})
       if(!status.success){
          enqueueSnackbar(status.error,{
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          })
       }
       else{
        enqueueSnackbar(status.message,{
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          })    


          router.refresh()
       }

       
    }

  return (
    <Card className="flex flex-col p-4 space-y-2 shadow-1 rounded-xl">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <Image
            src={item.propertyImages?.[0] || "/placeholder-image.jpg"
            }
            alt="To-let"
            width={100}
            height={100}
            className="rounded-md object-cover"
          />
          <div className="space-y-1 ">
            <h3 className="font-medium text-4">{item.propertyCategory} {item.propertyType} rent</h3>
            <p className="text-muted-foreground">{item.propertyShortAddress}</p>
            <p className="text-muted-foreground text-xs">Post date : {item.createdAt}</p>
           
          </div>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <MoreVertical className="w-5 h-5 text-muted-foreground" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Item onClick={() => handleDeleteProperty()}>
              
                Delete Property
            </DropdownMenu.Item>
            <DropdownMenu.Item>Edit Property</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div className="pt-3 border-t text-xs text-muted-foreground">
        Post Analytics - Reach : 0 | Click : 0 | Collect : 0
      </div>
    </Card>
  )
}
