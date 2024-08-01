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
import { useUser } from "@clerk/nextjs";
import { collectionGroup, DocumentData, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";


interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}

const Sidebar = () => {
  const {user} = useUser();
  const [groupedData, setGroupedData] = useState<(
    owner: RoomDocument[];
    editor: RoomDocument[];
  )>({
    owner: [],
    editor: [],
  });
  const [data, loading, error] = useCollection(
    user && (
      query(collectionGroup(db, 'rooms'), where('userId', '==', user.emailAddresses[0].toString()))
    )
  );

  useEffect(() => {
    if (!data) return;

    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;
        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          })
        }
        return acc;
      }, {
        owner: [],
        editor: [],
      }
    )
    setGroupedData(grouped);
  }, [data])

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
