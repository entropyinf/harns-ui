import { useEffect, useState } from 'react';
import styled from 'styled-components';

export type NodeData = {
	id: string
	name: string
	parentId: string
	children?: NodeData[]
} & Record<string, any>

type TreeProp = {
	data: NodeData[]
}

export default function Tree({ data }: TreeProp) {
	useEffect(() => fillChildren(data), [data])

	return (
		<>
			{data.map(item => <TreeNode item={item} />)}
		</>
	);
}

type TreeNodeProp = {
	item: NodeData
}

function TreeNode(props: TreeNodeProp) {
	const [expand, setExpand] = useState(false)
	const item = props.item

	const toggleExpand = () => {
		setExpand(!expand && !!item.children)
	}

	return <>
		<StyledNode onClick={toggleExpand}>
			{item.name}
			{expand && <StyledSubNodes>
				{item.children?.map(c => <TreeNode item={c} />)}
			</StyledSubNodes>}
		</StyledNode>
	</>
}


function fillChildren(data: NodeData[]) {
	const parentIdMap = new Map<string, NodeData[]>()
	for (const item of data) {
		if (!parentIdMap.has(item.parentId)) {
			parentIdMap.set(item.parentId, [])
		}
		parentIdMap.get(item.parentId)?.push(item)
	}
	for (const item of data) {
		item.children = parentIdMap.get(item.id)
	}
}

const StyledNode = styled.li`
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  list-style-type: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const StyledSubNodes = styled.ul`
  margin: 0 0 0 0.5rem;
  overflow: hidden;
  padding-left: 0;
`;