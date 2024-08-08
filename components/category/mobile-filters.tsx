// External Imports
import { RiFilter3Fill } from "react-icons/ri";

// Local Imports
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Filter } from "./filter";


interface Props {
  sizes: Size[];
  colors: Color[];
};

export const MobileFilters = ({ sizes, colors }: Props) => {
  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className="gap-1 rounded-full"
          >
            <span>Filters</span>
            <RiFilter3Fill />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="lg:hidden">
          <DrawerHeader className="text-left">
            <div className="flex flex-col gap-8">
              <Filter
                name="Sizes"
                valueKey="sizeId"
                data={sizes}
              />
              <Filter
                name="Colors"
                valueKey="colorId"
                data={colors}
              />
            </div>
          </DrawerHeader>


          <DrawerFooter>
            <DrawerClose>
              <Button size={"xl"} className="w-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
