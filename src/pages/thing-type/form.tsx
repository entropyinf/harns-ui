
import { useState } from 'react'
import { useController, UseControllerProps, useForm } from 'react-hook-form'
import thingTypes from './data'
import { Tree, TreeProp } from './tree'
import { ThingType } from './types'

export function ThingTypeForm(props: { value: ThingType }) {
	const form = useForm<ThingType>({ values: props.value })
	const [data] = useState(thingTypes)

	return (
		<form onSubmit={form.handleSubmit((data) => console.log(data))}>
			<div>
				<Textinput control={form.control} name='id' disabled />
				<Textinput control={form.control} name='tenant' disabled />
				<Textinput control={form.control} name='version' disabled />
			</div>

			<Textinput control={form.control} name='name' />
			<Treeselect control={form.control} name='parentTypeId'
				data={data}
				getId={v => v.id}
				getTitle={v => v.name}
				getParentId={v => v.parentTypeId}
			/>
			<Testareainput control={form.control} name='description' />

			<Characteristic control={form.control} name='characteristics' />
			<PropertySets control={form.control} name='propertySets' />

			<div className='grid grid-cols-2 space-x-2 gap-y-4'>
				<Textinput control={form.control} name='createdBy' disabled />
				<Textinput control={form.control} name='updatedBy' disabled />
				<Textinput control={form.control} name='createdTime' disabled />
				<Textinput control={form.control} name='updatedTime' disabled />
			</div>

			<button type='submit'>Update</button>
		</form>
	)
}

type inputProp = {
	headless?: boolean
}


export function Textinput(props: UseControllerProps<ThingType> & inputProp) {
	const { headless } = props
	const { field } = useController(props)

	return <>
		{!headless && <span>{field.name}</span>}
		<div>
			<input
				{...field}
				onChange={field.onChange}
				value={typeof field.value === 'string' ? field.value : ''}
				ref={field.ref}
			/>
		</div>
		<div />
	</>
}

export function Testareainput(props: UseControllerProps<ThingType> & inputProp) {
	const { headless } = props
	const { field } = useController(props)

	return <>
		{!headless && <span>{field.name}</span>}
		<div>
			<textarea
				{...field}
				onChange={field.onChange}
				value={typeof field.value === 'string' ? field.value : ''}
				ref={field.ref}
			/>
		</div>
		<div />
	</>
}

export function Treeselect<T>(props: UseControllerProps<ThingType> & inputProp & TreeProp<T>) {
	const { headless } = props
	const { field } = useController(props)

	return <>
		{!headless && <span>{field.name}</span>}
		<div >
			<select>
				<div>
					<div>
						{field.value as string}
					</div>
				</div>
				<div>
					<Tree {...props} onSelected={(v) => field.onChange(v)} />
				</div>
			</select>
		</div>
		<div />
	</>
}

export function Characteristic(props: UseControllerProps<ThingType, "characteristics">) {
	const { control } = props
	const { field: { name, value } } = useController(props);

	const fields = {
		name: { title: 'Name' },
		unit: { title: 'Unit' },
		length: { title: 'Length' },
		dataType: { title: 'Type' },
		defaultValue: { title: 'Default' }
	}

	return (<>
		<span>{name}</span>
		<table>
			<thead >
				<tr>
					{Object.entries(fields).map(([k, v]) => <th key={k}>{v.title}</th>)}
				</tr>
			</thead>
			<tbody>
				{Object.entries(value).map(([k]) => (
					<tr key={k}>
						{Object.entries(fields).map(([f]) => (
							<td key={f} >
								<Textinput control={control} headless name={`${name}.${k}.${f}`} />
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	</>)
}

export function PropertySets(props: UseControllerProps<ThingType, "propertySets">) {
	const { control } = props
	const { field: { name, value } } = useController(props);

	const fields = {
		name: { title: 'Name' },
		unit: { title: 'Unit' },
		length: { title: 'Length' },
		dataType: { title: 'Type' },
		defaultValue: { title: 'Default' },
		accessMode: { title: 'Access Mode' },
		min: { title: 'Min' },
		max: { title: 'Max' },
	}

	return (<>
		<span>{name}</span>
		<table>
			<thead >
				<tr>
					{Object.entries(fields).map(([k, v]) => <th key={k}>{v.title}</th>)}
				</tr>
			</thead>
			<tbody>
				{Object.entries(value).map(([k]) => (
					<tr key={k}>
						{Object.entries(fields).map(([f]) => (
							<td key={f} >
								<Textinput control={control} headless name={`${name}.${k}.${f}`} />
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	</>)
}