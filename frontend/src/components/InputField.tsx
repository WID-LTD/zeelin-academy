'use client'

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react'

type BaseProps = {
  label: string
  error?: string
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { as?: 'input' }
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' }
type SelectProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { as: 'select'; options: { value: string; label: string }[] }

type FieldProps = InputProps | TextareaProps | SelectProps

const inputClasses = 'w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]'

export default function InputField(props: FieldProps) {
  const { label, error, as, ...rest } = props

  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-secondary">{label}</label>
      {as === 'textarea' ? (
        <textarea className={inputClasses} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : as === 'select' && 'options' in props ? (
        <select className={inputClasses} {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}>
          {(props as SelectProps).options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input className={inputClasses} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
