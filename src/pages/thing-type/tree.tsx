import { useState } from "react"

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
	return <>
		{
			roots.map(root => (
				<TreeNode
					key={getId(root)}
					value={root}
					map={map}
					{...props}
				/>
			))
		}
	</>
}

type TreeNodeProp<T> = { value: T, map: Record<string, T[]> } & TreeProp<T>

function TreeNode<T>(props: TreeNodeProp<T>) {
	const { value, map, getId, getTitle } = props;
	const children = map[getId(value)]
	const hasChildren = children?.length > 0
	const [expand, setExpand] = useState(false)

	return (
		<div
			key={getId(value)}
			onClick={(e) => {
				setExpand(!expand)
				e.stopPropagation()
				props.onSelected?.(value)
			}}
		>
			<div
				className="cursor-pointer user-select-none hover:bg-slate-50 inline-block w-full"
			>
				{getTitle(value)}
			</div>
			<ul
				className="ml-5 pl-2 border-l border-l-gray-300 font-sans"
			>
				{hasChildren && expand && (
					children.map(child => (
						<TreeNode key={getId(child)}  {...props} value={child} map={map} />
					))
				)}
			</ul>
		</div>
	)
}

export { TreeProp, TreeNodeProp, Tree, TreeNode }