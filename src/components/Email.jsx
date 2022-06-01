import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { useState } from "react"

export default function ErrorMessageExample() {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor='email' size='md'>Email</FormLabel>
        <Input
          id='email'
          type='email'
          value={input}
          size='sm'
          width="sm"
          onChange={handleInputChange}
        />
        {/* {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )} */}
      </FormControl>
    )
  }