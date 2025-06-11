import thingTypeList from "./data";
import Tree from "./Tree";


export default function ThingTypePage() {
	return (
		<>
			<Tree data={thingTypeList} />
		</>
	)
}