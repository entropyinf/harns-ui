import { createContext, useContext, useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

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
      <div className="rounded-3xl w-80 h-full">
        {data.filter(v => !v.parentId).map(item => <TreeNode value={item} />)}
      </div>
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
    <li
      className="select-none rounded-2xl px-3 py-1 list-none flex items-center justify-between hover:cursor-pointer hover:bg-gray-100"
      onClick={() => ctx?.onSelected?.(value)}
    >
      {value.name}
      {hasChildren && (
        <div
          className="inline-block transition-transform duration-300 ${expand ? 'rotate-90' : ''} hover:cursor-pointer"
          onClick={toggleExpand}
        >
          <FaAngleRight />
        </div>
      )}
    </li>
    {expand && <TreeNodes value={value.children} />}
  </>
}

function TreeNodes(props: { value?: Data[] }) {
  const { value } = props;
  return (
    <ul className="pl-4 m-0 border-l border-gray-200">
      {value?.map(c => <TreeNode value={c} />)}
    </ul>
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