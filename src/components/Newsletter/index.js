import React, { memo, useState, useRef, useCallback } from 'react';
import { Form } from "@unform/web";
import * as Yup from 'yup';
// import { AiOutlineSearch } from 'react-icons/ai';
import Button from 'components/Button'
import Input from 'components/Input';
import Loading from 'components/Loading';
import { Container, Text, FlexContainer } from './styles';
import {
  postNewsletter
} from 'services/api';


const Sucess = ({
  setSubmitSuccess
}) => <Container >
    <Text fontWeight="bold">Seu e-amil foi cadastrado com sucesso!</Text>
    <Text size="12px">A partir de agora você receberá as novidade e ofertas exclusivas.</Text>
    <Button {...{
      label: "Cadastrar novo e-mail",
      icon: false,
      background: "#000",
      color: "#fff",
      type: "submit",
      onClick: e => setSubmitSuccess(false)
    }} />
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
        name: Yup.string().required('Preencha com seu nome completo'),
        email: Yup.string().required('Preencha com um e-mail válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });


      const {
        name,
        email
      } = data;

      // const isValidEmail = IsEmail(email);

      // if (!isValidEmail) return alert('E-mail invalido!');

      const response = await postNewsletter({
        name,
        email
      });

      if (response.status === 200) {
        setSubmitSuccess(true)
        setLoad(false)
      } else {
        setLoad(false)
        console.error('Aconteceu alguma coisa!', response.status)
      }

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
    reset();
  }, [])



  // const IsEmail = useCallback((email) => {
  //   const exclude = /[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
  //   const check = /@[w-]+./;
  //   const checkend = /.[a-zA-Z]{2,3}$/;
  //   if (((email.search(exclude) != -1) || (email.search(check)) == -1) || (email.search(checkend) == -1)) { return false; }
  //   else { return true; }
  // }, [])



  return <Form ref={formRef} onSubmit={handleSubmit} className="container-form">
    {submitSuccess ? <Sucess setSubmitSuccess={setSubmitSuccess} /> : <Container >
      <Text>Participe de nossas news com promoções e novidades!</Text>
      <FlexContainer>
        <Input {...{ name: "name", placeholder: "Digite seu nome", background: "#fff" }} />
        <Input {...{ name: "email", placeholder: "Digite seu e-mail", background: "#fff", type:'email' }} />
        <Button {...{
          label: load ? <Loading /> : 'Eu quero!',
          icon: false,
          background: "#000",
          color: "#fff",
          type: "submit"
        }} />
      </FlexContainer>
    </Container>}
  </Form>;
}

export default memo(Newsletter);