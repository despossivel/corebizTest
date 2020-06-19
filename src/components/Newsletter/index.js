import React, { memo, useState, useRef, useCallback } from 'react';
import { Form } from "@unform/web";
import * as Yup from 'yup';
// import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../Button'
import Input from '../Input';
import Loading from '../Loading';
import { Container, Text, FlexContainer } from './styles';



const Sucess = ({
  setSubmitSuccess
}) => <Container >
    <Text fontWeight="bold">Seu e-amil foi cadastrado com sucesso!</Text>
    <Text size="12px">A partir de agora você receberá as novidade e ofertas exclusivas.</Text>
    <Button label="Cadastrar novo e-mail " icon={false} background="#000" color="#fff" type="submit" onClick={e => setSubmitSuccess(false)} />
  </Container>;

const Newsletter = () => {
  const formRef = useRef(null);
  const [load, setLoad] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = useCallback(async (data, { reset }) => {
    setLoad(true);
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('Preencha com seu nome completo'),
        email: Yup.string().required('Preencha com um e-mail válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setTimeout(() => {
        setSubmitSuccess(true)
        setLoad(false)
      }, 3500)


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

  }, [])


  return <Form ref={formRef} onSubmit={handleSubmit} className="container-form">
    {submitSuccess ? <Sucess setSubmitSuccess={setSubmitSuccess} /> : <Container >
      <Text>Participe de nossas news com promoções e novidades!</Text>
      <FlexContainer>
        <Input name="nome" placeholder="Digite seu nome" background="#fff" />
        <Input name="email" placeholder="Digite seu e-amil" background="#fff" />
        <Button label={load ? <Loading /> : 'Eu quero!'} icon={false} background="#000" color="#fff" type="submit" />
      </FlexContainer>
    </Container>}
  </Form>;
}

export default memo(Newsletter);