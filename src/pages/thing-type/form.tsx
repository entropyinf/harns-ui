import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { useController, UseControllerProps, useForm } from 'react-hook-form'
import { ThingType } from './types'
import { Input } from '@/components/ui/input'

export function NotificationsForm(props: { value: ThingType }) {
	const form = useForm<ThingType>({ values: props.value })

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => console.log(data))}
			>
				<div className='space-y-8 flex'>
					<StringInput control={form.control} name='id' />
					<StringInput control={form.control} name='version' disabled />
					<StringInput control={form.control} name='tenant' />
				</div>

				<div>
					<StringInput control={form.control} name='name' />
					<StringInput control={form.control} name='parentTypeId' />
				</div>

				<StringInput control={form.control} name='description' />

				<div className='space-y-8 grid grid-cols-2 space-x-1'>
					<StringInput control={form.control} name='createdBy' disabled />
					<StringInput control={form.control} name='updatedBy' disabled />
					<StringInput control={form.control} name='createdTime' disabled />
					<StringInput control={form.control} name='updatedTime' disabled />
				</div>

				<Button type='submit'>Update</Button>
			</form>
		</Form>
	)
}

export function StringInput(props: UseControllerProps<ThingType>) {
	const { field } = useController(props)

	return <FormItem>
		<FormLabel>{field.name}</FormLabel>
		<FormControl>
			<Input
				{...field}
				onChange={field.onChange}
				value={typeof field.value === 'string' ? field.value : ''}
				ref={field.ref}
			/>
		</FormControl>
		<FormMessage />
	</FormItem>
}
