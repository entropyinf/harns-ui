import { useState } from "react";
import thingTypes from "./data";
import type { ThingType } from "./types";
import { Tree } from "./tree";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

			<Tabs>
				<TabsList defaultValue={"detail"}>
					<TabsTrigger value="detail">Detail</TabsTrigger>
					<TabsTrigger value="things">Things</TabsTrigger>
				</TabsList>
				<TabsContent value="detail">
					{selected && <Detail value={selected} />}
				</TabsContent>
				<TabsContent value="things">
					<h1>Things</h1>
				</TabsContent>
			</Tabs>
		</div>
	)
}

function Detail(props: { value: ThingType }) {
	const { value } = props;

	return <></>;
}
