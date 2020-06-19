import React, { memo, useState, useRef } from 'react';
import { Form } from "@unform/web";
import * as Yup from 'yup';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../Button'
import Input from '../Input';
import { Container, Title, FlexContainer } from './styles';

const Newsletter = () => {
  const formRef = useRef(null);
  const [load, setLoad] = useState(false);


  async function handleSubmit(data, { reset }) {
    setLoad(true);
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required(''),
        email: Yup.string().required(''),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLoad(false)

    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      setLoad(false)
    }

  }


  return <Form ref={formRef} onSubmit={handleSubmit} className="container-form">
    <Container >
      <Title>Participe de nossas news com promoções e novidades!</Title>
      <FlexContainer>
        <Input name="nome" placeholder="Digite seu nome" background="#fff" />
        <Input name="email" placeholder="Digite seu e-amil" background="#fff" />
        <Button label="ENTRE EM CONTATO" icon={false} />
      </FlexContainer>
      {/* <Button type="submit" >{load ? 'Loading...' : <AiOutlineSearch />}</Button> */}
    </Container>
  </Form>

    ;
}

export default memo(Newsletter);