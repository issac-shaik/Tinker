import { MenuSquare } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidebar = () => {
  return (
    <div className="p-2 md:p-5 bg-slate-200 relative rounded-xl mx-2">
      <Sheet>
        <SheetTrigger>
          <MenuSquare className="p-2 hover:opacity-30" size={40} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>{/* options */}</div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="hidden md:inline">
        <NewDocumentButton />
      </div>
    </div>
  );
};
export default Sidebar;
