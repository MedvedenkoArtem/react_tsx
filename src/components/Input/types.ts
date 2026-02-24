import styled from "@emotion/styled"
import type { ChangeEvent } from "react"

export type InputProps = {
  id?: string
  name?: string
  value: string
  placeholder?: string
  disabled?: boolean
  error?: string | undefined
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}