import thingTypeList from "./data";
import Tree from "./tree";
import type { ThingType } from "./types";

export default function ThingTypePage() {

	return (
		<>
			<ThingTypeTree thingTypes={thingTypeList} />
		</>
	)
}

function ThingTypeTree(props: { thingTypes: ThingType[] }) {
	const data = props.thingTypes.map(item => ({ id: item.id, name: item.name, parentId: item.parentTypeId }))
	return <Tree data={data} />
}