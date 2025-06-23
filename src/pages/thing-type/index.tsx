import { useState } from "react";
import thingTypes from "./data";
import type { ThingType } from "./types";
import { Tree } from "./tree";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThingTypeForm } from "./form";

export default function ThingTypePage() {
  const [selected, setSelected] = useState<ThingType | null>(null)
  const [data] = useState(thingTypes)
  return (
    <div className="flex">
      <div className="w-48 p-3">
        <Tree
          data={data}
          getId={v => v.id}
          getTitle={v => v.name}
          getParentId={v => v.parentTypeId}
          onSelected={setSelected}
        />
      </div>

      <Tabs defaultValue="spec">
        <TabsList>
          <TabsTrigger value="spec" >Specification</TabsTrigger>
          <TabsTrigger value="things">Things</TabsTrigger>
        </TabsList>
        <TabsContent value="spec">
          {selected && <ThingTypeForm value={selected} />}
        </TabsContent>
        <TabsContent value="things">
          <h1>Things</h1>
        </TabsContent>
      </Tabs>
    </div>
  )
}
