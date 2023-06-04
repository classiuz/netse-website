'use client'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Input, Textarea } from './FormFields'
import Button from '@/components/Button'

export type Inputs = {
  name: string
  lastname: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-11/12 flex-col gap-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        <Input label="Nombre" register={register('name', { pattern: namePattern })} errors={errors.name} />
        <Input label="Apellido" register={register('lastname', { pattern: namePattern })} errors={errors.lastname} />
        <Input label="Email*" register={register('email', { required: true, pattern: emailPattern })} errors={errors.email} className='lg:w-6/12' />
      </div>
      <Textarea label="Mensaje*" register={register('message', { required: true })} errors={errors.message} />
      <Button className='mx-auto'>Enviar mensaje</Button>
    </form>
  )
}
