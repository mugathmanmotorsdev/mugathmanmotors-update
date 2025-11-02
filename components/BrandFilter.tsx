"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";

export default function BrandFilter({ categories }: { categories: string[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)

    const selectedCategories = searchParams.getAll("category");

    //toggle category filter checkbox
    const toggleCategory = (category: string) => {
        const categorySet = new Set(params.getAll("category"))

        if(categorySet.has(category)) categorySet.delete(category)
        else categorySet.add(category)

        params.delete("category")
        categorySet.forEach(b => params.append("category", b))

        params.set("page", "1")

        router.replace(`?${params.toString()}`, {scroll: false})
    }

    //clear all filters
    const clearFilter = () => {
        params.delete("category")
        params.delete("page")

        router.replace(`?${params.toString()}`)
    }
    
    return (
        <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-5" >
                <div className="flex items-center justify-between">
                    <h2 className="hidden md:block text-md text-slate-700">Filters</h2>
                    <Drawer>
                        <DrawerTrigger className="md:hidden px-10" asChild>
                            <Button variant="outline" >Filters</Button>
                        </DrawerTrigger>
                        <DrawerContent  className="md:hidden px-5 min-h-96">
                            <DrawerHeader>
                                <DrawerTitle>Filter</DrawerTitle>
                            </DrawerHeader>
                            <div>
                                { categories.map((category, index) => {
                                    const checked = selectedCategories.includes(category)
                                    return ( 
                                        <div className=" flex flex-col gap-4">
                                            <div key={index} className="flex items-center gap-3">
                                                <Checkbox
                                                    id={category.toLowerCase()}
                                                    checked={checked}
                                                    className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                                                    onCheckedChange={() => toggleCategory(category)}
                                                />
                                                <Label htmlFor={category.toLowerCase()} className="text-lg ">
                                                    {category} 
                                                </Label>
                                            </div>
                                        </div>      
                                    )
                                })}
                            </div>
                        </DrawerContent>
                    </Drawer>
                    
                    <Button 
                    variant="link" 
                    className="p-0 text-sm"
                    onClick={clearFilter}>
                        Clear All
                    </Button>
                </div>
                <div className="hidden md:block">
                    { categories.map((category, index) => {
                        const checked = selectedCategories.includes(category)
                        return ( 
                            <div className=" flex flex-col gap-4">
                                <div key={index} className="flex items-center gap-3">
                                    <Checkbox
                                        id={category.toLowerCase()}
                                        checked={checked}
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                                        onCheckedChange={() => toggleCategory(category)}
                                    />
                                    <Label htmlFor={category.toLowerCase()} className="text-lg ">
                                        {category} 
                                    </Label>
                                </div>
                            </div>      
                        )
                    })}
                </div>
            </div>
        </div>
    )
}