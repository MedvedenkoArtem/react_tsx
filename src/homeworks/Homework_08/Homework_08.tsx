import { useState } from "react"
import Button from "components/Button/Button"
import Input from "components/Input/Input"

import { PageWrapper, Paragraph, ButtonControl } from "./styles"

function Homework_08() {
  const [value, setValue] = useState("")

  return (
    <PageWrapper>
      <Paragraph>Lesson_08</Paragraph>

      {/* BUTTONS */}

      <ButtonControl>
        <Button name="Simple Button" onClick={() => {}} />
      </ButtonControl>

      <ButtonControl>
        <Button isRed name="Red Button" onClick={() => {}} />
      </ButtonControl>

      <ButtonControl>
        <Button disabled name="Disabled Button" onClick={() => {}} />
      </ButtonControl>

      <ButtonControl>
        <Button
          isRed
          disabled
          name="Red Disabled Button"
          onClick={() => {}}
        />
      </ButtonControl>

      {/* INPUTS */}

      <ButtonControl>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Normal Input"
        />
      </ButtonControl>

      <ButtonControl>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled
          placeholder="Disabled Input"
        />
      </ButtonControl>

      <ButtonControl>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error="Some error"
          placeholder="Error Input"
        />
      </ButtonControl>
    </PageWrapper>
  )
}

export default Homework_08