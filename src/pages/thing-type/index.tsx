import { useState } from "react";
import thingTypes from "./data";
import type { ThingType } from "./types";
import { Tree } from "./tree";
import { ThingTypeForm } from "./form";

export default function ThingTypePage() {
	const [selected, setSelected] = useState<ThingType | null>(null)
	const [data] = useState(thingTypes)
	return (
		<div style={{ display: 'flex', gap: 2 }}>
			<Tree
				data={data}
				getId={v => v.id}
				getTitle={v => v.name}
				getParentId={v => v.parentTypeId}
				onSelected={setSelected}
			/>

			{selected && <ThingTypeForm value={selected} />}
		</div>
	)
}
