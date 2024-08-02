import { useForm, ValidationError } from '@formspree/react';
import { Button, Form, Input, Label, P, Text } from './styles';

function ContactForm() {
  const [state, handleSubmit] = useForm("meojgzqp");
  if (state.succeeded) {
      return <P>Obrigador por se juntar!</P>;
  }

  return (
    <Form onSubmit={handleSubmit} action="https://formspree.io/f/meojgzqp" method="POST">
      <Label htmlFor="email">
        Email:
      </Label>
      <Input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <Label htmlFor="Fone">
        Telefone:
      </Label>
      <Input
        id="fone"
        type="fone" 
        name="fone" 
      />
      <ValidationError 
        prefix="fone"
        field="fone"
        errors={state.errors}
      />
      <Label htmlFor="text">
        Enviar mensagem:
      </Label>
      <Text
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button type="submit" disabled={state.submitting}>
        Enviar
      </Button>
    </Form>
  );
}

export default ContactForm;