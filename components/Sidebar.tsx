"use client";
import { MenuSquare } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidebar = () => {
  const [data, loading, error] = useCollection;
  const menuOptions = (
    <>
      <NewDocumentButton />
      {/* docu */}
      {/* list */}
    </>
  );
  return (
    <div className="p-2 md:p-5 bg-slate-200 relative rounded-xl mx-2">
      <Sheet>
        <SheetTrigger className="md:hidden">
          <MenuSquare className="p-2 hover:opacity-30" size={40} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>{menuOptions}</div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
};
export default Sidebar;
