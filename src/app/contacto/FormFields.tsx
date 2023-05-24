import { type UseFormRegisterReturn, type FieldError } from 'react-hook-form'
import Icon from '@/components/Icon'
import clsx from 'clsx'

interface Props {
  label: string
  register: UseFormRegisterReturn
  errors: FieldError | undefined
  className?: string
}

export function Input({ label, register, errors, className }: Props) {
  return (
    <div
      className={clsx('flex flex-col gap-2', {
        [className!]: className,
      })}
    >
      <label htmlFor={register.name} className="text-neutral-600">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          {...register}
          className={clsx('w-full rounded-md border-b-2 bg-surface px-6 py-2 text-base outline-none', {
            'border-error': errors,
            'border-outline': !errors,
          })}
        />
        {errors && (
          <span className="absolute right-4 bg-surface text-xl text-error">
            <Icon iconName="error" />
          </span>
        )}
      </div>
      <div className="h-[24px]">
        <ErrorMessage errors={errors} label={label} />
      </div>
    </div>
  )
}

export function Textarea({ label, register, errors }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={register.name} className="text-neutral-600">
        {label}
      </label>
      <div className="relative flex items-start">
        <textarea
          {...register}
          className={clsx('h-64 w-full resize-none rounded-md border-b-2 bg-surface px-6 py-2 text-base outline-none', {
            'border-error': errors,
            'border-outline': !errors,
          })}
        />

        {errors && (
          <span className="absolute right-4 top-2 bg-surface text-xl text-error">
            <Icon iconName="error" />
          </span>
        )}
      </div>
      <div className="h-[24px]">
        <ErrorMessage errors={errors} label={label} />
      </div>
    </div>
  )
}

function ErrorMessage({ errors, label }: { errors: FieldError | undefined; label: string }) {
  const field = label.split('*')[0]
  if (!errors) return null

  if (errors.type === 'required') {
    return <span className="ml-1 text-sm text-error">{`Es necesario colocar un ${field}.`}</span>
  }
  if (errors.type === 'pattern') {
    return <span className="ml-1 text-sm text-error">{`El ${field} no es válido.`}</span>
  }

  return null
}
