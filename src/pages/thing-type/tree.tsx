import { useState } from "react"
import styled from "styled-components"
import { FaAngleRight } from "react-icons/fa6";
export { TreeProp, TreeNodeProp, Tree, TreeNode }

type TreeProp<T> = {
	data: T[],
	getId: (v: T) => string
	getTitle: (v: T) => string
	getParentId: (v: T) => string | null
	onSelected?: (v: T) => void
}

function Tree<T>(props: TreeProp<T>) {
	const { data, getId, getParentId } = props;
	const [map] = useState(() => {
		const map: Record<string, T[]> = {}
		for (const item of data) {
			const parentId = getParentId(item) || ''
			const children = map[parentId] || []
			children.push(item)
			map[parentId] = children
		}
		return map
	})
	const roots = map[''] || []
	return <SCTree>
		{roots.map(root => (
			<TreeNode
				key={getId(root)}
				value={root}
				map={map}
				{...props}
			/>
		))}
	</SCTree>
}

type TreeNodeProp<T> = { value: T, map: Record<string, T[]> } & TreeProp<T>

function TreeNode<T>(props: TreeNodeProp<T>) {
	const { value, map, getId, getTitle } = props;
	const children = map[getId(value)]
	const hasChildren = children?.length > 0
	const [expand, setExpand] = useState(false)

	const onSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		setExpand(!expand)
		props.onSelected?.(value)
	}

	return (
		<>
			<SCTreeNode onClick={onSelect}>
				{getTitle(value)}
				{hasChildren && (
					<SCExpandIcon expand={expand} />
				)}
			</SCTreeNode>

			<SCTreeNodes>
				{hasChildren && expand && (
					children.map(child => (
						<TreeNode key={getId(child)}  {...props} value={child} map={map} />
					))
				)}
			</SCTreeNodes>
		</ >
	)
}


const SCTree = styled.div`
	background-color: #f5f5f5;
	padding: 1rem;
	min-width: 10rem;
	height: 100%;
`

const SCTreeNodes = styled.div`
	padding-left: 1rem;
	border-left: 1px solid #e5e5e5;
`

const SCTreeNode = styled.div`
	user-select: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	font-size: 14px;
	&:hover {
		background-color: #e5e5e5;
		cursor: pointer;
	}
`

const SCExpandIcon = styled(FaAngleRight) <{ expand: boolean }>`
	transform: ${props => props.expand ? 'rotate(90deg)' : 'rotate(0deg)'};
	transition: transform 0.3s ease-in-out;
`