import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import styles from "./style.module.scss"

export function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });

  return (
    <form className={styles.box} onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy to this corporation"
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Login