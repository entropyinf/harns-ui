import { createContext, useContext, useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import styled, { css } from 'styled-components';

export type Data = {
  id: string
  name: string
  parentId?: string
  children?: Data[]
} & Record<string, any>

type TreeProp = {
  data: Data[]
  onSelected?: (value: Data) => void
}

const Context = createContext<TreeProp | null>(null)

export default function Tree(props: TreeProp) {
  const [data] = useState(() => {
    fillChildren(props.data)
    return props.data
  })

  return (
    <Context.Provider value={props}>
      <UI.Root>
        {data.filter(v => !v.parentId).map(item => <TreeNode value={item} />)}
      </UI.Root>
    </Context.Provider>
  );
}

type TreeNodeProp = {
  value: Data
}

function TreeNode(props: TreeNodeProp) {
  const [expand, setExpand] = useState(false)
  const value = props.value
  const hasChildren = !!value.children

  const toggleExpand = () => {
    setExpand(!expand && hasChildren)
  }
  const ctx = useContext(Context)

  return <>
    <UI.TreeNode onClick={() => ctx?.onSelected?.(value)}>
      {value.name}
      {hasChildren && (
        <UI.Arrow expand={expand} onClick={toggleExpand}>
          <FaAngleRight />
        </UI.Arrow>
      )}
    </UI.TreeNode>

    {expand && <TreeNodes value={value.children} />}
  </>
}

function TreeNodes(props: { value?: Data[] }) {
  const { value } = props;
  return (
    <UI.TreeNodes>
      {value?.map(c => <TreeNode value={c} />)}
    </UI.TreeNodes>
  )
}

function fillChildren(data: Data[]) {
  const parentIdMap = new Map<string, Data[]>()
  for (const item of data) {
    const parentId = item.parentId || ''
    if (!parentIdMap.has(parentId)) {
      parentIdMap.set(parentId, [])
    }
    parentIdMap.get(parentId)?.push(item)
  }
  for (const item of data) {
    item.children = parentIdMap.get(item.id)
  }
}

namespace UI {
  export const Root = styled.div`
		border-radius: 0.75rem;
		width: 20rem;
    height: 100%;
	`
  export const TreeNode = styled.li`
		user-select: none;
		border-radius: 0.5rem;
		padding: 4px 0.75rem;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&:hover{
			cursor: pointer;
			background-color: #f5f5f5
		}
	`
  export const TreeNodes = styled.ul`
		padding-left: 1rem;
		margin: 0;
		border-left: 1px solid #f0f0f0;
	`

  export const Arrow = styled.div<{ expand: boolean }>`
		display: inline-block;
		transition: transform 0.3s;
		${props => props.expand && css`
			transform: rotate(90deg);
		`}
		&:hover{
			cursor: pointer;
		}
	`
}