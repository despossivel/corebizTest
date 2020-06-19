import React, { useRef, useState, memo } from 'react';
import { Form } from "@unform/web";
import * as Yup from 'yup';
import { AiOutlineSearch } from 'react-icons/ai';

import Input from '../Input';
import { Container, Button } from './styles';

const Search = () => {
    const formRef = useRef(null);
    const [load, setLoad] = useState(false);

    async function handleSubmit(data, { reset }) {
        setLoad(true);
        try {
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                contextSearch: Yup.string().required(''),
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

            <Input name="contextSearch" placeholder="O que está procurando?" />

            <Button type="submit" >{load ? 'Loading...' : <AiOutlineSearch />}</Button>
        </Container>
    </Form>
        ;
}

export default memo(Search);