import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useController, UseControllerProps, useFieldArray, useForm } from 'react-hook-form'
import { ThingType } from './types'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export function ThingTypeForm(props: { value: ThingType }) {
  const form = useForm<ThingType>({ values: props.value })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className='flex flex-col gap-y-4'
      >
        <div className='flex space-x-2 gap-y-4'>
          <TextInput control={form.control} name='id' disabled />
          <TextInput control={form.control} name='tenant' />
          <TextInput control={form.control} name='version' disabled />
        </div>

        <TextInput control={form.control} name='name' />
        <TextInput control={form.control} name='parentTypeId' />
        <TestareaInput control={form.control} name='description' />

        <Characteristic control={form.control} name='characteristics' />

        <div className='grid grid-cols-2 space-x-2 gap-y-4'>
          <TextInput control={form.control} name='createdBy' disabled />
          <TextInput control={form.control} name='updatedBy' disabled />
          <TextInput control={form.control} name='createdTime' disabled />
          <TextInput control={form.control} name='updatedTime' disabled />
        </div>

        <Button type='submit'>Update</Button>
      </form>
    </Form>
  )
}

type InputProp = {
  headless?: boolean
}


export function TextInput(props: UseControllerProps<ThingType> & InputProp) {
  const { headless } = props
  const { field } = useController(props)

  return <FormItem>
    {!headless && <FormLabel>{field.name}</FormLabel>}
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

export function TestareaInput(props: UseControllerProps<ThingType> & InputProp) {
  const { headless } = props
  const { field } = useController(props)

  return <FormItem>
    {!headless && <FormLabel>{field.name}</FormLabel>}
    <FormControl>
      <Textarea
        {...field}
        onChange={field.onChange}
        value={typeof field.value === 'string' ? field.value : ''}
        ref={field.ref}
      />
    </FormControl>
    <FormMessage />
  </FormItem>
}

export function Characteristic(props: UseControllerProps<ThingType, "characteristics">) {
  const { control } = props
  const { field } = useController(props);
  const [fields] = useState(["temperature", "humidity"])

  return (<>
    <FormLabel>{field.name}</FormLabel>
    <table>
      <tr className='text-gray-500 text-xs text-center'>
        <td>Name</td>
        <td>Unit</td>
        <td>Length</td>
        <td>Data type</td>
        <td>Default</td>
      </tr>
      {fields.map((name) => (<tr key={name}>
        <td><TextInput control={control} headless name={`${field.name}.${name}.name`} /></td>
        <td><TextInput control={control} headless name={`${field.name}.${name}.unit`} /></td>
        <td><TextInput control={control} headless name={`${field.name}.${name}.length`} /></td>
        <td><TextInput control={control} headless name={`${field.name}.${name}.dataType`} /></td>
        <td><TextInput control={control} headless name={`${field.name}.${name}.defaultValue`} /></td>
      </tr>))}
    </table>
  </>)
}