import { Separator } from "./ui/separator"
import { Skeleton } from "./ui/skeleton"
import { Button } from "./ui/button"

export default function InventoryCatalogSkeleton() {
  
  return (
      <>           
        {/* products section */}
        <section className="py-12 container mx-auto flex flex-col md:flex-row gap-8">
          <section className="py-12 md:w-1/3 md:block px-5 flex flex-col gap-6">
            <Skeleton className="w-full h-10"/>
            <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-5" >
                <div className="flex items-center justify-between">
                    <h2 className="hidden md:block text-md text-slate-700">Filters</h2>
                    
                    <Button
                    variant="link" 
                    className="p-0 text-sm"
                    >
                        Clear All
                    </Button>
                </div>
                <div className="hidden md:flex flex-col gap-5">
                    { [...Array(5)].map((category, index) => {
                        return ( 
                            <Skeleton className="w-50 h-6" />     
                        )
                    })}
                </div>
            </div>
        </div>
          </section>

          <div className="hidden md:block">
            <Separator orientation="vertical" />
          </div>
          
          <section className="py-12 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    [...Array(6)].map((_, index) => (
                        <div className="flex flex-col gap-4">
                            <Skeleton className="mx-2 w-full h-60"/>
                            <Skeleton className="w-full h-5" />
                            <Skeleton className="w-full h-5" />
                        </div>
                    ))
                }
                
            </div>
          </section>
        </section>    
      </>
  )
}