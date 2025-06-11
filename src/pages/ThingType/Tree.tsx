import { type TreeItem } from 'react-sortable-tree';
import type { ThingType } from "./types";
import { Tree as RATree } from 'react-arborist';


type NodeData = Pick<ThingType, "id" | "parentTypeId" | "name" | "description">

type TreeProp = {
	data: NodeData[]
};

export default function Tree(prop: TreeProp) {
	const treeData = buildTree(prop.data);
	const data = [
		{ id: "1", name: "Unread" },
		{ id: "2", name: "Threads" },
		{
			id: "3",
			name: "Chat Rooms",
			children: [
				{ id: "c1", name: "General" },
				{ id: "c2", name: "Random" },
				{ id: "c3", name: "Open Source Projects" },
			],
		},
		{
			id: "4",
			name: "Direct Messages",
			children: [
				{ id: "d1", name: "Alice" },
				{ id: "d2", name: "Bob" },
				{ id: "d3", name: "Charlie" },
			],
		},
	];
	return (
		<>
			<RATree data={data} />
		</>
	);
}

function buildTree(data: NodeData[]): Array<TreeItem> {
	const tree: Array<TreeItem> = [
		{
			title: 'Root',
			subtitle: 'Root',
			children: [
				{
					title: 'Root1',
					subtitle: 'Root',
					children: [

					]
				}
			]
		}
	];


	return tree
}